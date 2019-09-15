(ns wordsmith.events
  (:require
   [re-frame.core :as rf]
   [wordsmith.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]))

(rf/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(rf/reg-event-fx
 ::set-word
 (fn [{:keys [db]} [_ word]]
   {:db (assoc db :word word)}))

(rf/reg-event-fx
 ::try-word
 (fn [{:keys [db]}]
   (when-not ((:words db) (:word db))
     {:dispatch [::add-word]})))

(defn new-pos
  [word]
  (take 3 (repeatedly (partial rand-int 400))))

(rf/reg-event-fx
 ::add-word
 (fn [{:keys [db]}]
   ;; TODO add to local storage
   ;;

   {:db (-> db
            (update-in [:words] conj (:word db))
            (update-in [:positions] assoc (:word db) (new-pos (:word db)))
            (assoc :word ""))}))
