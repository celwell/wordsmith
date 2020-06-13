(ns wordsmith.events
  (:require [re-frame.core :as rf]
            [wordsmith.util :as util]
            [wordsmith.db :as db]
            [wordsmith.dictionary :as dictionary]
            [clojure.string :as s]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-fx
 ::set-word
 (fn [{:keys [db]} [_ word]]
   {:db (-> db
            (assoc :word (s/lower-case word))
            (assoc :error? false))}))

(defn- word-error
  [db]
  (assoc db :error? true))

(defn- in-dictionary?
  [word]
  (dictionary/word-list word))

(defn- word-already-exists
  [db]
  (-> db                                ; make it jump
      (update-in [:words (:word db)] merge {:vx (- (rand 30) 15)
                                            :vy (rand -15)})
      word-error))

(rf/reg-event-fx
 ::try-word
 (fn [{:keys [db]}]
   (if (and (not (s/blank? (:word db)))
            (in-dictionary? (:word db)))
     (if (nil? (get (:words db) (:word db)))
       {:dispatch [::add-word]}
       {:db (word-already-exists db)})
     {:db (word-error db)})))

(rf/reg-event-fx
 ::add-word
 (fn [{:keys [db]}]
   ;; TODO add to local storage
   ;;
   (let [word (s/trim (:word db))]
     {:db (-> db
              (update-in [:words] assoc word
                         {:x 65
                          :y 120
                          :prev-x 65
                          :prev-y 120
                          :vx (rand 5)
                          :vy (rand -1)})
              (assoc :word ""))})))

(rf/reg-event-fx
 ::window-resized
 (fn [{:keys [db]}]
   {:db (-> db
            (assoc-in [:window :width] (.-innerWidth js/window))
            (assoc-in [:window :height] (.-innerHeight js/window)))}))

(defn velocity
  [[word-key {:keys [x y vx vy] :as word}]]
  [word-key (-> word
                (assoc :prev-x x)
                (assoc :prev-y y)
                (update :x + vx)
                (update :y + vy))])

(defn gravity
  [{:keys [g]} [word-key word]]
  [word-key (update word :vy + g)])

(defn friction
  [{:keys [window k]} [word-key {:keys [x y] :as word}]]
  (let [{window-width :width
         window-height :height} window
        word-width (util/word-width word-key)
        word-height (util/word-height word-key)
        half-word-width (/ word-width 2)
        half-word-height (/ word-height 2)]
    [word-key (cond-> word
                (or (= (- y half-word-height) 0)
                    (= (+ y half-word-height) window-height)) (update :vx * k)
                (or (= (- x half-word-width) 0)
                    (= (+ x half-word-width) window-width))   (update :vy * k))]))

(defn border
  [{:keys [window cr]} [word-key {:keys [x y vx vy] :as word}]]
  (let [{window-width :width
         window-height :height} window
        half-word-width (/ (util/word-width word-key) 2)
        half-word-height (/ (util/word-height word-key) 2)]
    [word-key (cond-> word
                (> (+ x half-word-width) window-width)   (assoc :vx (* vx -1 cr)
                                                                :x (- window-width half-word-width))
                (> (+ y half-word-height) window-height) (assoc :vy (* vy -1 cr)
                                                                :y (- window-height half-word-height))
                (< (- x half-word-width) 0)              (assoc :vx (* vx -1 cr)
                                                                :x half-word-width)
                (< (- y half-word-height) 0)             (assoc :vy (* vy -1 cr)
                                                                :y half-word-height))]))

(defn neighbors
  [word-key words]
  (remove (comp (partial = word-key) key) words))

(defn intersecting?
  [w-top-edge w-right-edge w-bottom-edge w-left-edge
   nw-top-edge nw-right-edge nw-bottom-edge nw-left-edge]
  (and (or (< nw-top-edge w-top-edge nw-bottom-edge)
           (> nw-bottom-edge w-bottom-edge nw-top-edge))
       (or (> nw-right-edge w-right-edge nw-left-edge)
           (< nw-left-edge w-left-edge nw-right-edge))))

(defn solve-collision
  [word neighbor w-key k cr]
  ;; w-  prefix means "word-"
  ;; nw- prefix means "neighbor-word-"
  (let [{w-x :x   w-y :y
         w-vx :vx w-vy :vy
         w-prev-x :prev-x w-prev-y :prev-y} word
        [nw-key {nw-x :x nw-y :y
                 nw-vx :vx nw-vy :vy
                 nw-prev-x :prev-x nw-prev-y :prev-y}] neighbor
        half-w-width (/ (util/word-width w-key) 2)
        half-w-height (/ (util/word-height w-key) 2)
        half-nw-width (/ (util/word-width nw-key) 2)
        half-nw-height (/ (util/word-height nw-key) 2)

        w-top-edge     (- w-y half-w-height)
        w-right-edge   (+ w-x half-w-width)
        w-bottom-edge  (+ w-y half-w-height)
        w-left-edge    (- w-x half-w-width)
        nw-top-edge    (- nw-y half-nw-height)
        nw-right-edge  (+ nw-x half-nw-width)
        nw-bottom-edge (+ nw-y half-nw-height)
        nw-left-edge   (- nw-x half-nw-width)

        w-prev-top-edge     (- w-prev-y half-w-height)
        w-prev-right-edge   (+ w-prev-x half-w-width)
        w-prev-bottom-edge  (+ w-prev-y half-w-height)
        w-prev-left-edge    (- w-prev-x half-w-width)
        nw-prev-top-edge    (- nw-prev-y half-nw-height)
        nw-prev-right-edge  (+ nw-prev-x half-nw-width)
        nw-prev-bottom-edge (+ nw-prev-y half-nw-height)
        nw-prev-left-edge   (- nw-prev-x half-nw-width)

        ;; relative velocities
        ;; dvx (- vx1 vx2)
        ;; dvy (- vy1 vy2)

        intersects? (intersecting? w-top-edge
                                   w-right-edge
                                   w-bottom-edge
                                   w-left-edge
                                   nw-top-edge
                                   nw-right-edge
                                   nw-bottom-edge
                                   nw-left-edge)]
    (cond
      (and intersects?
           (> w-bottom-edge nw-top-edge)
           (not (> w-prev-bottom-edge nw-prev-top-edge))
           (pos? w-vy))
      (assoc word
             :y  (- w-y w-vy)
             :vy (* (Math/abs w-vy) -1 cr)
             :vx (* w-vx k))

      (and intersects?
           (< w-top-edge nw-bottom-edge)
           (not (< w-prev-top-edge nw-prev-bottom-edge))
           (neg? w-vy))
      (assoc word
             :y  (- w-y w-vy)
             :vy (* (Math/abs w-vy) cr)
             :vx (* w-vx k))
      
      (and intersects?
           (> w-right-edge nw-left-edge)
           (not (> w-prev-right-edge nw-prev-left-edge))
           (pos? w-vx))
      (assoc word
             :x  (- w-x w-vx)
             :vx (* (Math/abs w-vx) -1 cr)
             :vy (* w-vy k))

      (and intersects?
           (< w-left-edge nw-right-edge)
           (not (< w-prev-left-edge nw-prev-right-edge))
           (neg? w-vx))
      (assoc word
             :x  (- w-x w-vx)
             :vx (* (Math/abs w-vx) cr)
             :vy (* w-vy k))

      :else word)))

(defn collisions
  [{:keys [words k cr]} [word-key {:keys [x y vx vy] :as word}]]
  [word-key (reduce (fn [w neighbor]
                      (solve-collision w neighbor word-key k cr))
                    word
                    (neighbors word-key words))])

;; (defn fmap
;;   [f m]
;;   (into {} (for [[k v] m] [k (f v)])))

(rf/reg-event-db
 ::anim-step
 (fn [db]
   (update-in db [:words] #(->> %
                                ;; apply forces
                                (map (partial gravity db))
                                (into {})
                                (map (partial friction db))
                                (into {})
                                ;; do velocity
                                (map velocity)
                                (into {})
                                ;; collide
                                (map (partial collisions db))
                                (into {})
                                (map (partial border db))
                                (into {})))))
