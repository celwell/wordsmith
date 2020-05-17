goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47205 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47206 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47206;

try{try{var seq__47208 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47209 = null;
var count__47210 = (0);
var i__47211 = (0);
while(true){
if((i__47211 < count__47210)){
var vec__47218 = chunk__47209.cljs$core$IIndexed$_nth$arity$2(null,i__47211);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47218,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47218,(1),null);
var temp__5733__auto___47277 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47277)){
var effect_fn_47278 = temp__5733__auto___47277;
(effect_fn_47278.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47278.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47278.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47279 = seq__47208;
var G__47280 = chunk__47209;
var G__47281 = count__47210;
var G__47282 = (i__47211 + (1));
seq__47208 = G__47279;
chunk__47209 = G__47280;
count__47210 = G__47281;
i__47211 = G__47282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47208);
if(temp__5735__auto__){
var seq__47208__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47208__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47208__$1);
var G__47283 = cljs.core.chunk_rest(seq__47208__$1);
var G__47284 = c__4550__auto__;
var G__47285 = cljs.core.count(c__4550__auto__);
var G__47286 = (0);
seq__47208 = G__47283;
chunk__47209 = G__47284;
count__47210 = G__47285;
i__47211 = G__47286;
continue;
} else {
var vec__47222 = cljs.core.first(seq__47208__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(1),null);
var temp__5733__auto___47287 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47287)){
var effect_fn_47288 = temp__5733__auto___47287;
(effect_fn_47288.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47288.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47288.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47289 = cljs.core.next(seq__47208__$1);
var G__47290 = null;
var G__47291 = (0);
var G__47292 = (0);
seq__47208 = G__47289;
chunk__47209 = G__47290;
count__47210 = G__47291;
i__47211 = G__47292;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__46900__auto___47293 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__46901__auto___47294 = (end__46900__auto___47293 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46901__auto___47294,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__46900__auto___47293);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47205;
}} else {
var seq__47225 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47226 = null;
var count__47227 = (0);
var i__47228 = (0);
while(true){
if((i__47228 < count__47227)){
var vec__47235 = chunk__47226.cljs$core$IIndexed$_nth$arity$2(null,i__47228);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47235,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47235,(1),null);
var temp__5733__auto___47295 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47295)){
var effect_fn_47296 = temp__5733__auto___47295;
(effect_fn_47296.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47296.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47296.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47297 = seq__47225;
var G__47298 = chunk__47226;
var G__47299 = count__47227;
var G__47300 = (i__47228 + (1));
seq__47225 = G__47297;
chunk__47226 = G__47298;
count__47227 = G__47299;
i__47228 = G__47300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47225);
if(temp__5735__auto__){
var seq__47225__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47225__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47225__$1);
var G__47301 = cljs.core.chunk_rest(seq__47225__$1);
var G__47302 = c__4550__auto__;
var G__47303 = cljs.core.count(c__4550__auto__);
var G__47304 = (0);
seq__47225 = G__47301;
chunk__47226 = G__47302;
count__47227 = G__47303;
i__47228 = G__47304;
continue;
} else {
var vec__47238 = cljs.core.first(seq__47225__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(1),null);
var temp__5733__auto___47305 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47305)){
var effect_fn_47306 = temp__5733__auto___47305;
(effect_fn_47306.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47306.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47306.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47307 = cljs.core.next(seq__47225__$1);
var G__47308 = null;
var G__47309 = (0);
var G__47310 = (0);
seq__47225 = G__47307;
chunk__47226 = G__47308;
count__47227 = G__47309;
i__47228 = G__47310;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47241 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47242 = null;
var count__47243 = (0);
var i__47244 = (0);
while(true){
if((i__47244 < count__47243)){
var map__47252 = chunk__47242.cljs$core$IIndexed$_nth$arity$2(null,i__47244);
var map__47252__$1 = (((((!((map__47252 == null))))?(((((map__47252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47252):map__47252);
var effect = map__47252__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47252__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47252__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__47241,chunk__47242,count__47243,i__47244,map__47252,map__47252__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__47241,chunk__47242,count__47243,i__47244,map__47252,map__47252__$1,effect,ms,dispatch))
,ms);
}


var G__47311 = seq__47241;
var G__47312 = chunk__47242;
var G__47313 = count__47243;
var G__47314 = (i__47244 + (1));
seq__47241 = G__47311;
chunk__47242 = G__47312;
count__47243 = G__47313;
i__47244 = G__47314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47241);
if(temp__5735__auto__){
var seq__47241__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47241__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47241__$1);
var G__47315 = cljs.core.chunk_rest(seq__47241__$1);
var G__47316 = c__4550__auto__;
var G__47317 = cljs.core.count(c__4550__auto__);
var G__47318 = (0);
seq__47241 = G__47315;
chunk__47242 = G__47316;
count__47243 = G__47317;
i__47244 = G__47318;
continue;
} else {
var map__47254 = cljs.core.first(seq__47241__$1);
var map__47254__$1 = (((((!((map__47254 == null))))?(((((map__47254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47254):map__47254);
var effect = map__47254__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47254__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47254__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__47241,chunk__47242,count__47243,i__47244,map__47254,map__47254__$1,effect,ms,dispatch,seq__47241__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__47241,chunk__47242,count__47243,i__47244,map__47254,map__47254__$1,effect,ms,dispatch,seq__47241__$1,temp__5735__auto__))
,ms);
}


var G__47319 = cljs.core.next(seq__47241__$1);
var G__47320 = null;
var G__47321 = (0);
var G__47322 = (0);
seq__47241 = G__47319;
chunk__47242 = G__47320;
count__47243 = G__47321;
i__47244 = G__47322;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__47257 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47258 = null;
var count__47259 = (0);
var i__47260 = (0);
while(true){
if((i__47260 < count__47259)){
var event = chunk__47258.cljs$core$IIndexed$_nth$arity$2(null,i__47260);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__47325 = seq__47257;
var G__47326 = chunk__47258;
var G__47327 = count__47259;
var G__47328 = (i__47260 + (1));
seq__47257 = G__47325;
chunk__47258 = G__47326;
count__47259 = G__47327;
i__47260 = G__47328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47257);
if(temp__5735__auto__){
var seq__47257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47257__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47257__$1);
var G__47329 = cljs.core.chunk_rest(seq__47257__$1);
var G__47330 = c__4550__auto__;
var G__47331 = cljs.core.count(c__4550__auto__);
var G__47332 = (0);
seq__47257 = G__47329;
chunk__47258 = G__47330;
count__47259 = G__47331;
i__47260 = G__47332;
continue;
} else {
var event = cljs.core.first(seq__47257__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__47333 = cljs.core.next(seq__47257__$1);
var G__47334 = null;
var G__47335 = (0);
var G__47336 = (0);
seq__47257 = G__47333;
chunk__47258 = G__47334;
count__47259 = G__47335;
i__47260 = G__47336;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47265 = cljs.core.seq(value);
var chunk__47266 = null;
var count__47267 = (0);
var i__47268 = (0);
while(true){
if((i__47268 < count__47267)){
var event = chunk__47266.cljs$core$IIndexed$_nth$arity$2(null,i__47268);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47339 = seq__47265;
var G__47340 = chunk__47266;
var G__47341 = count__47267;
var G__47342 = (i__47268 + (1));
seq__47265 = G__47339;
chunk__47266 = G__47340;
count__47267 = G__47341;
i__47268 = G__47342;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47265);
if(temp__5735__auto__){
var seq__47265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47265__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47265__$1);
var G__47343 = cljs.core.chunk_rest(seq__47265__$1);
var G__47344 = c__4550__auto__;
var G__47345 = cljs.core.count(c__4550__auto__);
var G__47346 = (0);
seq__47265 = G__47343;
chunk__47266 = G__47344;
count__47267 = G__47345;
i__47268 = G__47346;
continue;
} else {
var event = cljs.core.first(seq__47265__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47347 = cljs.core.next(seq__47265__$1);
var G__47348 = null;
var G__47349 = (0);
var G__47350 = (0);
seq__47265 = G__47347;
chunk__47266 = G__47348;
count__47267 = G__47349;
i__47268 = G__47350;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.js.map
