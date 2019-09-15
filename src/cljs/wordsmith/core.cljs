(ns wordsmith.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [wordsmith.events :as events]
   [wordsmith.views :as views]
   [wordsmith.config :as config]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::events/window-resized])
  (.addEventListener js/window "resize" #(re-frame/dispatch [::events/window-resized]))
  (dev-setup)
  (mount-root))
