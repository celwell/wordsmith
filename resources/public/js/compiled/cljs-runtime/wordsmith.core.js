goog.provide('wordsmith.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('wordsmith.events');
goog.require('wordsmith.views');
goog.require('wordsmith.config');
wordsmith.core.dev_setup = (function wordsmith$core$dev_setup(){
if(wordsmith.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
wordsmith.core.mount_root = (function wordsmith$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wordsmith.views.main_panel], null),document.getElementById("app"));
});
wordsmith.core.init = (function wordsmith$core$init(){
var G__42616_42619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","initialize-db","wordsmith.events/initialize-db",-775332146)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42616_42619) : re_frame.core.dispatch_sync.call(null,G__42616_42619));

var G__42617_42620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","window-resized","wordsmith.events/window-resized",-390773337)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42617_42620) : re_frame.core.dispatch_sync.call(null,G__42617_42620));

window.addEventListener("resize",(function (){
var G__42618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","window-resized","wordsmith.events/window-resized",-390773337)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42618) : re_frame.core.dispatch.call(null,G__42618));
}));

wordsmith.core.dev_setup();

return wordsmith.core.mount_root();
});

//# sourceMappingURL=wordsmith.core.js.map
