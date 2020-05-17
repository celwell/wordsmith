goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51767 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51768 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51768;

try{try{var seq__51773 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51774 = null;
var count__51775 = (0);
var i__51776 = (0);
while(true){
if((i__51776 < count__51775)){
var vec__51805 = chunk__51774.cljs$core$IIndexed$_nth$arity$2(null,i__51776);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51805,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51805,(1),null);
var temp__5733__auto___51885 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51885)){
var effect_fn_51886 = temp__5733__auto___51885;
(effect_fn_51886.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51886.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51886.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51887 = seq__51773;
var G__51888 = chunk__51774;
var G__51889 = count__51775;
var G__51890 = (i__51776 + (1));
seq__51773 = G__51887;
chunk__51774 = G__51888;
count__51775 = G__51889;
i__51776 = G__51890;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51773);
if(temp__5735__auto__){
var seq__51773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51773__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51773__$1);
var G__51891 = cljs.core.chunk_rest(seq__51773__$1);
var G__51892 = c__4550__auto__;
var G__51893 = cljs.core.count(c__4550__auto__);
var G__51894 = (0);
seq__51773 = G__51891;
chunk__51774 = G__51892;
count__51775 = G__51893;
i__51776 = G__51894;
continue;
} else {
var vec__51812 = cljs.core.first(seq__51773__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51812,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51812,(1),null);
var temp__5733__auto___51897 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51897)){
var effect_fn_51898 = temp__5733__auto___51897;
(effect_fn_51898.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51898.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51898.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51899 = cljs.core.next(seq__51773__$1);
var G__51900 = null;
var G__51901 = (0);
var G__51902 = (0);
seq__51773 = G__51899;
chunk__51774 = G__51900;
count__51775 = G__51901;
i__51776 = G__51902;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51471__auto___51903 = re_frame.interop.now();
var duration__51472__auto___51904 = (end__51471__auto___51903 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51472__auto___51904,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51471__auto___51903);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51767;
}} else {
var seq__51817 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51818 = null;
var count__51819 = (0);
var i__51820 = (0);
while(true){
if((i__51820 < count__51819)){
var vec__51829 = chunk__51818.cljs$core$IIndexed$_nth$arity$2(null,i__51820);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(1),null);
var temp__5733__auto___51905 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51905)){
var effect_fn_51910 = temp__5733__auto___51905;
(effect_fn_51910.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51910.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51910.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51911 = seq__51817;
var G__51912 = chunk__51818;
var G__51913 = count__51819;
var G__51914 = (i__51820 + (1));
seq__51817 = G__51911;
chunk__51818 = G__51912;
count__51819 = G__51913;
i__51820 = G__51914;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51817);
if(temp__5735__auto__){
var seq__51817__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51817__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51817__$1);
var G__51916 = cljs.core.chunk_rest(seq__51817__$1);
var G__51917 = c__4550__auto__;
var G__51918 = cljs.core.count(c__4550__auto__);
var G__51919 = (0);
seq__51817 = G__51916;
chunk__51818 = G__51917;
count__51819 = G__51918;
i__51820 = G__51919;
continue;
} else {
var vec__51833 = cljs.core.first(seq__51817__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51833,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51833,(1),null);
var temp__5733__auto___51923 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51923)){
var effect_fn_51924 = temp__5733__auto___51923;
(effect_fn_51924.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51924.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51924.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51926 = cljs.core.next(seq__51817__$1);
var G__51927 = null;
var G__51928 = (0);
var G__51929 = (0);
seq__51817 = G__51926;
chunk__51818 = G__51927;
count__51819 = G__51928;
i__51820 = G__51929;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__51837 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51838 = null;
var count__51839 = (0);
var i__51840 = (0);
while(true){
if((i__51840 < count__51839)){
var map__51847 = chunk__51838.cljs$core$IIndexed$_nth$arity$2(null,i__51840);
var map__51847__$1 = (((((!((map__51847 == null))))?(((((map__51847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51847):map__51847);
var effect = map__51847__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51847__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51847__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51837,chunk__51838,count__51839,i__51840,map__51847,map__51847__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51837,chunk__51838,count__51839,i__51840,map__51847,map__51847__$1,effect,ms,dispatch))
,ms);
}


var G__51942 = seq__51837;
var G__51943 = chunk__51838;
var G__51944 = count__51839;
var G__51945 = (i__51840 + (1));
seq__51837 = G__51942;
chunk__51838 = G__51943;
count__51839 = G__51944;
i__51840 = G__51945;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51837);
if(temp__5735__auto__){
var seq__51837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51837__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51837__$1);
var G__51946 = cljs.core.chunk_rest(seq__51837__$1);
var G__51947 = c__4550__auto__;
var G__51948 = cljs.core.count(c__4550__auto__);
var G__51949 = (0);
seq__51837 = G__51946;
chunk__51838 = G__51947;
count__51839 = G__51948;
i__51840 = G__51949;
continue;
} else {
var map__51852 = cljs.core.first(seq__51837__$1);
var map__51852__$1 = (((((!((map__51852 == null))))?(((((map__51852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51852):map__51852);
var effect = map__51852__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51837,chunk__51838,count__51839,i__51840,map__51852,map__51852__$1,effect,ms,dispatch,seq__51837__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51837,chunk__51838,count__51839,i__51840,map__51852,map__51852__$1,effect,ms,dispatch,seq__51837__$1,temp__5735__auto__))
,ms);
}


var G__51956 = cljs.core.next(seq__51837__$1);
var G__51957 = null;
var G__51958 = (0);
var G__51959 = (0);
seq__51837 = G__51956;
chunk__51838 = G__51957;
count__51839 = G__51958;
i__51840 = G__51959;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51858 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51859 = null;
var count__51860 = (0);
var i__51861 = (0);
while(true){
if((i__51861 < count__51860)){
var event = chunk__51859.cljs$core$IIndexed$_nth$arity$2(null,i__51861);
re_frame.router.dispatch(event);


var G__51960 = seq__51858;
var G__51961 = chunk__51859;
var G__51962 = count__51860;
var G__51963 = (i__51861 + (1));
seq__51858 = G__51960;
chunk__51859 = G__51961;
count__51860 = G__51962;
i__51861 = G__51963;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51858);
if(temp__5735__auto__){
var seq__51858__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51858__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51858__$1);
var G__51965 = cljs.core.chunk_rest(seq__51858__$1);
var G__51966 = c__4550__auto__;
var G__51967 = cljs.core.count(c__4550__auto__);
var G__51968 = (0);
seq__51858 = G__51965;
chunk__51859 = G__51966;
count__51860 = G__51967;
i__51861 = G__51968;
continue;
} else {
var event = cljs.core.first(seq__51858__$1);
re_frame.router.dispatch(event);


var G__51969 = cljs.core.next(seq__51858__$1);
var G__51970 = null;
var G__51971 = (0);
var G__51972 = (0);
seq__51858 = G__51969;
chunk__51859 = G__51970;
count__51860 = G__51971;
i__51861 = G__51972;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51868 = cljs.core.seq(value);
var chunk__51869 = null;
var count__51870 = (0);
var i__51871 = (0);
while(true){
if((i__51871 < count__51870)){
var event = chunk__51869.cljs$core$IIndexed$_nth$arity$2(null,i__51871);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51974 = seq__51868;
var G__51975 = chunk__51869;
var G__51976 = count__51870;
var G__51977 = (i__51871 + (1));
seq__51868 = G__51974;
chunk__51869 = G__51975;
count__51870 = G__51976;
i__51871 = G__51977;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51868);
if(temp__5735__auto__){
var seq__51868__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51868__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51868__$1);
var G__51980 = cljs.core.chunk_rest(seq__51868__$1);
var G__51981 = c__4550__auto__;
var G__51982 = cljs.core.count(c__4550__auto__);
var G__51983 = (0);
seq__51868 = G__51980;
chunk__51869 = G__51981;
count__51870 = G__51982;
i__51871 = G__51983;
continue;
} else {
var event = cljs.core.first(seq__51868__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51985 = cljs.core.next(seq__51868__$1);
var G__51986 = null;
var G__51987 = (0);
var G__51988 = (0);
seq__51868 = G__51985;
chunk__51869 = G__51986;
count__51870 = G__51987;
i__51871 = G__51988;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
