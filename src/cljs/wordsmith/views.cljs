(ns wordsmith.views
  (:require [re-frame.core :as rf]
            [wordsmith.util :as util]
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
                        :x (int (- x (/ (util/word-width word) 2)))
                        :y (int (- y (/ (util/word-height word) 2)))
                        :fontFamily "courier new"
                        :fontSize util/font-size}]))
        (doall
         (for [[word {:keys [x y vx vy]}] @words]
           ^{:key word}
           [:> rk/Rect {:x (int (- x (/ (util/word-width word) 2)))
                        :y (int (- y (/ (util/word-height word) 2)))
                        :width (util/word-width word)
                        :height (util/word-height word)
                        :fill "rgba(200,0,0,0.5)"
                        :stroke "black"
                        :strokeWidth 1
                        }]))
        ]])))

(defn anim-loop
  []
  (rf/dispatch [::events/anim-step])
  (js/requestAnimationFrame anim-loop))

(def canvas
  (with-meta canvas*
    {:component-did-mount
     (fn [_this]
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
                :spellCheck false
                :on-change (fn [e]
                             (rf/dispatch [::events/set-word
                                           (-> e .-target .-value)]))
                :on-key-down (fn [e]
                               (when (or (= (.-key e) "Enter")
                                         (= (.-key e) " "))
                                 (.preventDefault e)
                                 (rf/dispatch [::events/try-word])))}]])))
