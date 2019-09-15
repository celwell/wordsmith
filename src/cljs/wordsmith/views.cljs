(ns wordsmith.views
  (:require
   [re-frame.core :as rf]
   [wordsmith.subs :as subs]
   [wordsmith.events :as events]
   ["react-konva" :as rk]))

(defn canvas* []
  (let [words (rf/subscribe [::subs/words])
        window (rf/subscribe [::subs/window])]
    (fn []
      [:> rk/Stage {:class "stage"
                    :width (:width @window)
                    :height (:height @window)}
       [:> rk/Layer
        (doall
         (for [[word {:keys [x y vx vy]}] @words]
           ^{:key word}
           [:> rk/Text {:text word
                        :x (- x (* (count word) 7))
                        :y (- y 12)}]))
        ]
       ])))

(defn anim-loop
  []
  (do (rf/dispatch [::events/anim-step])
      (js/requestAnimationFrame anim-loop)))

(def canvas
  (with-meta canvas*
    {:component-did-mount
     (fn [this]
       (js/requestAnimationFrame anim-loop))}))

(defn main-panel []
  (let [word (rf/subscribe [::subs/word])
        error? (rf/subscribe [::subs/error?])]
    (fn []
      [:div
       [canvas]
       [:h1 "How many words can you think of?"]
       [:input {:class (when @error? "error")
                :value @word
                :auto-focus true
                :spellcheck false
                :on-change (fn [e]
                             (rf/dispatch [::events/set-word
                                           (-> e .-target .-value)]))
                :on-key-down (fn [e]
                               (when (or (= (.-key e) "Enter")
                                         (= (.-key e) " "))
                                 (.preventDefault e)
                                 (rf/dispatch [::events/try-word])))}]])))
