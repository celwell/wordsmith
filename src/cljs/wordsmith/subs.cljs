(ns wordsmith.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::word
 (fn [db]
   (:word db)))

(re-frame/reg-sub
 ::words
 (fn [db]
   (:words db)))
