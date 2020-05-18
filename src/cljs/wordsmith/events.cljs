(ns wordsmith.events
  (:require
   [re-frame.core :as rf]
   [wordsmith.db :as db]
   ;; [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
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
      (update-in [:words (:word db)] merge {:vx (- (rand 10) 5)
                                            :vy (rand -10)})
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
  [{:keys [vx vy] :as word}]
  (-> word
      (update :x + vx)
      (update :y + vy)))

(defn gravity
  [{:keys [g]} word]
  (update word :vy + g))

(defn friction
  [{:keys [window k]} {:keys [x y] :as word}]
  (let [{:keys [width height]} window]
    (cond-> word
      (or (= y 0) (= y height)) (update :vx * k)
      (or (= x 0) (= x width))  (update :vy * k))))

(defn border
  [{:keys [window cr]} {:keys [x y vx vy] :as word}]
  (let [{:keys [width height]} window]
    (cond-> word
      (> x width)  (assoc :vx (* vx -1 cr)
                          :x width)
      (> y height) (assoc :vy (* vy -1 cr)
                          :y height)
      (< x 0)      (assoc :vx (* vx -1 cr)
                          :x 0)
      (< y 0)      (assoc :vy (* vy -1 cr)
                          :y 0))))

(defn fmap
  [f m]
  (into (empty m) (for [[k v] m] [k (f v)])))

(rf/reg-event-db
 ::anim-step
 (fn [db]
   (update-in db [:words] #(->> %
                                (fmap (partial gravity db))
                                (fmap (partial friction db))
                                (fmap velocity)
                                (fmap (partial border db))))))
