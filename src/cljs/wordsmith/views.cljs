(ns wordsmith.views
  (:require
   [re-frame.core :as rf]
   [wordsmith.subs :as subs]
   [wordsmith.events :as events]
   ))

(defn main-panel []
  (let [word& (rf/subscribe [::subs/word])
        words& (rf/subscribe [::subs/words])]
    (fn []
      [:div
       [:h1 "How many words can you think of?"]
       [:input {:value @word&
                :auto-focus true
                :on-change (fn [e]
                             (rf/dispatch [::events/set-word
                                           (-> e .-target .-value)]))
                :on-key-up (fn [e]
                             (when (= (.-key e) "Enter")
                               (rf/dispatch [::events/try-word])))}]
       [:ul {:style {:margin-top 50}}
        (for [w @words&]
          ^{:key w}
          [:li w])]
       ])))
