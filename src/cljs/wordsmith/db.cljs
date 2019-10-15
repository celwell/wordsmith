(ns wordsmith.db)

(def default-db
  {:word ""
   ;; e.g.,
   ;; "cat" {:x 8, :y 9, :vx 3, :vy 4}
   :words {}
   :window {:width nil
            :height nil}
   :g 0.13
   :k 0.8
   ;; coefficient of restitution
   :cr 0.6
   :error? false})
