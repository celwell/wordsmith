(ns wordsmith.events
  (:require
   [re-frame.core :as rf]
   [wordsmith.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   [clojure.string :as s]))

(rf/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(rf/reg-event-fx
 ::set-word
 (fn [{:keys [db]} [_ word]]
   {:db (-> db
            (assoc :word word)
            (assoc :error? false))}))

(rf/reg-event-fx
 ::try-word
 (fn [{:keys [db]}]
   (if (and (nil? (get (:words db) (:word db)))
            (not (s/blank? (:word db))))
     {:dispatch [::add-word]}
     {:db (-> db
              (update-in [:words] assoc (:word db)
                         (merge (get (:words db) (:word db))
                                {:vx (- (rand 10) 5)
                                 :vy (rand -10)}))
              (assoc :error? true))})))

(rf/reg-event-fx
 ::add-word
 (fn [{:keys [db]}]
   ;; TODO add to local storage
   ;;

   {:db (-> db
            (update-in [:words] assoc (s/trim (:word db))
                       {:x (rand-int (-> db :window :width))
                        :y 0
                        :vx (- (rand 5) 2.5)
                        :vy 0})
            (assoc :word ""))}))

(rf/reg-event-fx
 ::window-resized
 (fn [{:keys [db]}]
   {:db (-> db
            (assoc-in [:window :width] (.-innerWidth js/window))
            (assoc-in [:window :height] (.-innerHeight js/window)))}))

(defn velocity
  [m k v]
  (assoc m k (-> v
                 (update :x + (:vx v))
                 (update :y + (:vy v)))))

(defn gravity
  [{:keys [g]} m k v]
  (assoc m k (update v :vy + g)))

(defn friction
  [{:keys [window k]} m wk {:keys [x y vx vy] :as v}]
  (assoc m wk (cond-> v
                (or (= y 0)
                    (= y (:height window))) (update :vx * k)
                (or (= x 0)
                    (= x (:width window))) (update :vy * k))))

(defn border
  [{:keys [window cr]} m k {:keys [x y vx vy] :as v}]
  (let [{:keys [width height]} window]
    (assoc m k (cond-> v
                 (> x width) (assoc :vx (* vx -1 cr)
                                    :x width)
                 (> y height) (assoc :vy (* vy -1 cr)
                                     :y height)
                 (< x 0) (assoc :vx (* vx -1 cr)
                                :x 0)
                 (< y 0) (assoc :vy (* vy -1 cr)
                                :y 0)))))

(rf/reg-event-fx
 ::anim-step
 (fn [{:keys [db]}]
   (let [words (:words db)]
     {:db (assoc db
                 :words ;; TODO transducer?
                 (->> words
                      (reduce-kv (partial gravity db) {})
                      (reduce-kv (partial friction db) {})
                      (reduce-kv velocity {})
                      (reduce-kv (partial border db) {}))
                 #_(reduce-kv (comp (partial gravity db)
                                    velocity)
                              {}
                              words))})))
