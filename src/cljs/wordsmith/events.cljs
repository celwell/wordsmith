(ns wordsmith.events
  (:require [re-frame.core :as rf]
            [wordsmith.db :as db]
            [wordsmith.dictionary :as dictionary]
            [wordsmith.physics :as physics]
            [clojure.string :as s]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-fx
 ::window-resized
 (fn [{:keys [db]}]
   {:db (-> db
            (assoc-in [:window :width] (.-innerWidth js/window))
            (assoc-in [:window :height] (.-innerHeight js/window)))}))

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

;; (defn fmap
;;   [f m]
;;   (into {} (for [[k v] m] [k (f v)])))

(rf/reg-event-db
 ::anim-step
 (fn [db]
   (update-in db [:words] #(->> %
                                ;; apply forces
                                (map (partial physics/gravity db))
                                (into {})
                                (map (partial physics/friction db))
                                (into {})
                                ;; apply velocity
                                (map physics/velocity)
                                (into {})
                                ;; handle collisions between words
                                (map (partial physics/collisions db))
                                (into {})
                                ;; handle collisions against viewport borders
                                (map (partial physics/border db))
                                (into {})))))
