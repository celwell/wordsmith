goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51500){
var map__51501 = p__51500;
var map__51501__$1 = (((((!((map__51501 == null))))?(((((map__51501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51501):map__51501);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51501__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51503_51541 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51504_51542 = null;
var count__51505_51543 = (0);
var i__51506_51544 = (0);
while(true){
if((i__51506_51544 < count__51505_51543)){
var vec__51518_51545 = chunk__51504_51542.cljs$core$IIndexed$_nth$arity$2(null,i__51506_51544);
var k_51546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51518_51545,(0),null);
var cb_51547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51518_51545,(1),null);
try{var G__51522_51548 = cljs.core.deref(re_frame.trace.traces);
(cb_51547.cljs$core$IFn$_invoke$arity$1 ? cb_51547.cljs$core$IFn$_invoke$arity$1(G__51522_51548) : cb_51547.call(null,G__51522_51548));
}catch (e51521){var e_51549 = e51521;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51546,"while storing",cljs.core.deref(re_frame.trace.traces),e_51549], 0));
}

var G__51550 = seq__51503_51541;
var G__51551 = chunk__51504_51542;
var G__51552 = count__51505_51543;
var G__51553 = (i__51506_51544 + (1));
seq__51503_51541 = G__51550;
chunk__51504_51542 = G__51551;
count__51505_51543 = G__51552;
i__51506_51544 = G__51553;
continue;
} else {
var temp__5735__auto___51554 = cljs.core.seq(seq__51503_51541);
if(temp__5735__auto___51554){
var seq__51503_51558__$1 = temp__5735__auto___51554;
if(cljs.core.chunked_seq_QMARK_(seq__51503_51558__$1)){
var c__4550__auto___51560 = cljs.core.chunk_first(seq__51503_51558__$1);
var G__51561 = cljs.core.chunk_rest(seq__51503_51558__$1);
var G__51562 = c__4550__auto___51560;
var G__51563 = cljs.core.count(c__4550__auto___51560);
var G__51564 = (0);
seq__51503_51541 = G__51561;
chunk__51504_51542 = G__51562;
count__51505_51543 = G__51563;
i__51506_51544 = G__51564;
continue;
} else {
var vec__51523_51565 = cljs.core.first(seq__51503_51558__$1);
var k_51566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51523_51565,(0),null);
var cb_51567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51523_51565,(1),null);
try{var G__51527_51568 = cljs.core.deref(re_frame.trace.traces);
(cb_51567.cljs$core$IFn$_invoke$arity$1 ? cb_51567.cljs$core$IFn$_invoke$arity$1(G__51527_51568) : cb_51567.call(null,G__51527_51568));
}catch (e51526){var e_51569 = e51526;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51566,"while storing",cljs.core.deref(re_frame.trace.traces),e_51569], 0));
}

var G__51583 = cljs.core.next(seq__51503_51558__$1);
var G__51584 = null;
var G__51585 = (0);
var G__51586 = (0);
seq__51503_51541 = G__51583;
chunk__51504_51542 = G__51584;
count__51505_51543 = G__51585;
i__51506_51544 = G__51586;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
