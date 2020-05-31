(ns wordsmith.db)

(def default-db
  {:word ""
   ;; e.g.,
   ;; "cat" {:x 8, :y 9, :vx 3, :vy 4}
   :words {}
   :window {:width nil
            :height nil}
   :g 0.13 ; gravity
   :k 0.8  ; friction
   :cr 0.4 ; coefficient of restitution
   :error? false})
