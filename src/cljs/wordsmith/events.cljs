(ns wordsmith.events
  (:require [re-frame.core :as rf]
            [wordsmith.util :as util]
            [wordsmith.db :as db]
            [clojure.string :as s]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-fx
 ::set-word
 (fn [{:keys [db]} [_ word]]
   {:db (-> db
            (assoc :word word)
            (assoc :error? false))}))

(defn- word-already-exists
  [db]
  (-> db ; make it jump
      ;; (update-in [:words (:word db)] merge {:vx (- (rand 10) 5)
      ;;                                       :vy (rand -10)})
      (update-in [:words (:word db)] merge {:vx (- (rand 100) 5)
                                            :vy (rand -20)})
      (assoc :error? true)))

(rf/reg-event-fx
 ::try-word
 (fn [{:keys [db]}]
   (if (and (nil? (get (:words db) (:word db)))
            (not (s/blank? (:word db))))
     {:dispatch [::add-word]}
     {:db (word-already-exists db)})))

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
                          :vx (rand 4)
                          :vy (rand -1)})
              (assoc :word ""))})))

(rf/reg-event-fx
 ::window-resized
 (fn [{:keys [db]}]
   {:db (-> db
            (assoc-in [:window :width] (.-innerWidth js/window))
            (assoc-in [:window :height] (.-innerHeight js/window)))}))

(defn velocity
  [[word-key {:keys [vx vy] :as word}]]
  [word-key (-> word
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

;; (defn collisions
;;   [{:keys [words]} [word-key {:keys [x y vx vy] :as word}]]
;;   (reduce-kv maybe-collide words)
;;   (for [neighbor (neighbors word-key words)]
;;     [word-key word]))

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
                                ;; handle collisions
                                (map (partial border db))
                                (into {})
                                
                                ;; (map (partial collisions db))
                                ;; (into {})
                                ))))
