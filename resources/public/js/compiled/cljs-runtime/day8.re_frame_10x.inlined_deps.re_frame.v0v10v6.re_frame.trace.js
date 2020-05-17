goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$start_trace(p__46922){
var map__46924 = p__46922;
var map__46924__$1 = (((((!((map__46924 == null))))?(((((map__46924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46924):map__46924);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__46927_46956 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__46928_46957 = null;
var count__46929_46958 = (0);
var i__46930_46959 = (0);
while(true){
if((i__46930_46959 < count__46929_46958)){
var vec__46942_46960 = chunk__46928_46957.cljs$core$IIndexed$_nth$arity$2(null,i__46930_46959);
var k_46961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46942_46960,(0),null);
var cb_46962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46942_46960,(1),null);
try{var G__46946_46963 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces);
(cb_46962.cljs$core$IFn$_invoke$arity$1 ? cb_46962.cljs$core$IFn$_invoke$arity$1(G__46946_46963) : cb_46962.call(null,G__46946_46963));
}catch (e46945){var e_46964 = e46945;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46961,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_46964], 0));
}

var G__46965 = seq__46927_46956;
var G__46966 = chunk__46928_46957;
var G__46967 = count__46929_46958;
var G__46968 = (i__46930_46959 + (1));
seq__46927_46956 = G__46965;
chunk__46928_46957 = G__46966;
count__46929_46958 = G__46967;
i__46930_46959 = G__46968;
continue;
} else {
var temp__5735__auto___46969 = cljs.core.seq(seq__46927_46956);
if(temp__5735__auto___46969){
var seq__46927_46970__$1 = temp__5735__auto___46969;
if(cljs.core.chunked_seq_QMARK_(seq__46927_46970__$1)){
var c__4550__auto___46971 = cljs.core.chunk_first(seq__46927_46970__$1);
var G__46972 = cljs.core.chunk_rest(seq__46927_46970__$1);
var G__46973 = c__4550__auto___46971;
var G__46974 = cljs.core.count(c__4550__auto___46971);
var G__46975 = (0);
seq__46927_46956 = G__46972;
chunk__46928_46957 = G__46973;
count__46929_46958 = G__46974;
i__46930_46959 = G__46975;
continue;
} else {
var vec__46947_46976 = cljs.core.first(seq__46927_46970__$1);
var k_46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46947_46976,(0),null);
var cb_46978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46947_46976,(1),null);
try{var G__46952_46979 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces);
(cb_46978.cljs$core$IFn$_invoke$arity$1 ? cb_46978.cljs$core$IFn$_invoke$arity$1(G__46952_46979) : cb_46978.call(null,G__46952_46979));
}catch (e46950){var e_46980 = e46950;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46977,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_46980], 0));
}

var G__46981 = cljs.core.next(seq__46927_46970__$1);
var G__46982 = null;
var G__46983 = (0);
var G__46984 = (0);
seq__46927_46956 = G__46981;
chunk__46928_46957 = G__46982;
count__46929_46958 = G__46983;
i__46930_46959 = G__46984;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.js.map
