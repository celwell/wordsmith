(ns wordsmith.util)

(def font-size 28)
(def letter-width 16.9)

(defn word-width* [word]
  (* letter-width (count word)))

(def word-width (memoize word-width*))

(defn contains-descender? [word]
  (or (not (neg? (.indexOf word "j")))
      (not (neg? (.indexOf word "p")))
      (not (neg? (.indexOf word "q")))
      (not (neg? (.indexOf word "y")))
      (not (neg? (.indexOf word "g")))))

(defn contains-tall-letter? [word]
  (or (not (neg? (.indexOf word "t")))
      (not (neg? (.indexOf word "f")))
      (not (neg? (.indexOf word "h")))
      (not (neg? (.indexOf word "k")))
      (not (neg? (.indexOf word "l")))
      (not (neg? (.indexOf word "b")))))

(defn word-height* [word]
  font-size
  ;; (+ (* font-size 0.6)
  ;;    (when (contains-tall-letter? word) (* font-size 0.2))
  ;;    (when (contains-descender? word) (* font-size 0.2)))
  )

(def word-height (memoize word-height*))
