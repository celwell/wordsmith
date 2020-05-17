goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59811 = arguments.length;
var i__4731__auto___59812 = (0);
while(true){
if((i__4731__auto___59812 < len__4730__auto___59811)){
args__4736__auto__.push((arguments[i__4731__auto___59812]));

var G__59813 = (i__4731__auto___59812 + (1));
i__4731__auto___59812 = G__59813;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59464){
var G__59465 = cljs.core.first(seq59464);
var seq59464__$1 = cljs.core.next(seq59464);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59465,seq59464__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59473){
var map__59474 = p__59473;
var map__59474__$1 = (((((!((map__59474 == null))))?(((((map__59474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59474):map__59474);
var src = map__59474__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59476 = cljs.core.seq(sources);
var chunk__59477 = null;
var count__59478 = (0);
var i__59479 = (0);
while(true){
if((i__59479 < count__59478)){
var map__59488 = chunk__59477.cljs$core$IIndexed$_nth$arity$2(null,i__59479);
var map__59488__$1 = (((((!((map__59488 == null))))?(((((map__59488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59488):map__59488);
var src = map__59488__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59490){var e_59821 = e59490;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59821);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59821.message)].join('')));
}

var G__59822 = seq__59476;
var G__59823 = chunk__59477;
var G__59824 = count__59478;
var G__59825 = (i__59479 + (1));
seq__59476 = G__59822;
chunk__59477 = G__59823;
count__59478 = G__59824;
i__59479 = G__59825;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59476);
if(temp__5735__auto__){
var seq__59476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59476__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59476__$1);
var G__59826 = cljs.core.chunk_rest(seq__59476__$1);
var G__59827 = c__4550__auto__;
var G__59828 = cljs.core.count(c__4550__auto__);
var G__59829 = (0);
seq__59476 = G__59826;
chunk__59477 = G__59827;
count__59478 = G__59828;
i__59479 = G__59829;
continue;
} else {
var map__59503 = cljs.core.first(seq__59476__$1);
var map__59503__$1 = (((((!((map__59503 == null))))?(((((map__59503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59503):map__59503);
var src = map__59503__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59503__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59503__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59503__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59503__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59505){var e_59832 = e59505;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59832);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59832.message)].join('')));
}

var G__59834 = cljs.core.next(seq__59476__$1);
var G__59835 = null;
var G__59836 = (0);
var G__59837 = (0);
seq__59476 = G__59834;
chunk__59477 = G__59835;
count__59478 = G__59836;
i__59479 = G__59837;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__59508 = cljs.core.seq(js_requires);
var chunk__59509 = null;
var count__59510 = (0);
var i__59511 = (0);
while(true){
if((i__59511 < count__59510)){
var js_ns = chunk__59509.cljs$core$IIndexed$_nth$arity$2(null,i__59511);
var require_str_59845 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59845);


var G__59846 = seq__59508;
var G__59847 = chunk__59509;
var G__59848 = count__59510;
var G__59849 = (i__59511 + (1));
seq__59508 = G__59846;
chunk__59509 = G__59847;
count__59510 = G__59848;
i__59511 = G__59849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59508);
if(temp__5735__auto__){
var seq__59508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59508__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59508__$1);
var G__59850 = cljs.core.chunk_rest(seq__59508__$1);
var G__59851 = c__4550__auto__;
var G__59852 = cljs.core.count(c__4550__auto__);
var G__59853 = (0);
seq__59508 = G__59850;
chunk__59509 = G__59851;
count__59510 = G__59852;
i__59511 = G__59853;
continue;
} else {
var js_ns = cljs.core.first(seq__59508__$1);
var require_str_59854 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59854);


var G__59855 = cljs.core.next(seq__59508__$1);
var G__59856 = null;
var G__59857 = (0);
var G__59858 = (0);
seq__59508 = G__59855;
chunk__59509 = G__59856;
count__59510 = G__59857;
i__59511 = G__59858;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__59517 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59517) : callback.call(null,G__59517));
} else {
var G__59518 = shadow.cljs.devtools.client.env.files_url();
var G__59519 = ((function (G__59518){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__59518))
;
var G__59520 = "POST";
var G__59521 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59522 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59518,G__59519,G__59520,G__59521,G__59522);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59534){
var map__59535 = p__59534;
var map__59535__$1 = (((((!((map__59535 == null))))?(((((map__59535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59535):map__59535);
var msg = map__59535__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59535__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59535__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59540 = info;
var map__59540__$1 = (((((!((map__59540 == null))))?(((((map__59540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59540):map__59540);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59540__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59540__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59545(s__59546){
return (new cljs.core.LazySeq(null,((function (map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info){
return (function (){
var s__59546__$1 = s__59546;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59546__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59552 = cljs.core.first(xs__6292__auto__);
var map__59552__$1 = (((((!((map__59552 == null))))?(((((map__59552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59552):map__59552);
var src = map__59552__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__59546__$1,map__59552,map__59552__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59545_$_iter__59547(s__59548){
return (new cljs.core.LazySeq(null,((function (s__59546__$1,map__59552,map__59552__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info){
return (function (){
var s__59548__$1 = s__59548;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59548__$1);
if(temp__5735__auto____$1){
var s__59548__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59548__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__59548__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__59550 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__59549 = (0);
while(true){
if((i__59549 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__59549);
cljs.core.chunk_append(b__59550,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__59874 = (i__59549 + (1));
i__59549 = G__59874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59550),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59545_$_iter__59547(cljs.core.chunk_rest(s__59548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59550),null);
}
} else {
var warning = cljs.core.first(s__59548__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59545_$_iter__59547(cljs.core.rest(s__59548__$2)));
}
} else {
return null;
}
break;
}
});})(s__59546__$1,map__59552,map__59552__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info))
,null,null));
});})(s__59546__$1,map__59552,map__59552__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59545(cljs.core.rest(s__59546__$1)));
} else {
var G__59875 = cljs.core.rest(s__59546__$1);
s__59546__$1 = G__59875;
continue;
}
} else {
var G__59876 = cljs.core.rest(s__59546__$1);
s__59546__$1 = G__59876;
continue;
}
} else {
return null;
}
break;
}
});})(map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info))
,null,null));
});})(map__59540,map__59540__$1,sources,compiled,map__59535,map__59535__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__59555_59877 = cljs.core.seq(warnings);
var chunk__59556_59878 = null;
var count__59557_59879 = (0);
var i__59558_59880 = (0);
while(true){
if((i__59558_59880 < count__59557_59879)){
var map__59565_59881 = chunk__59556_59878.cljs$core$IIndexed$_nth$arity$2(null,i__59558_59880);
var map__59565_59882__$1 = (((((!((map__59565_59881 == null))))?(((((map__59565_59881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59565_59881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59565_59881):map__59565_59881);
var w_59883 = map__59565_59882__$1;
var msg_59884__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565_59882__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565_59882__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565_59882__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565_59882__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59887)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59885),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59886),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59884__$1)].join(''));


var G__59895 = seq__59555_59877;
var G__59896 = chunk__59556_59878;
var G__59897 = count__59557_59879;
var G__59898 = (i__59558_59880 + (1));
seq__59555_59877 = G__59895;
chunk__59556_59878 = G__59896;
count__59557_59879 = G__59897;
i__59558_59880 = G__59898;
continue;
} else {
var temp__5735__auto___59899 = cljs.core.seq(seq__59555_59877);
if(temp__5735__auto___59899){
var seq__59555_59900__$1 = temp__5735__auto___59899;
if(cljs.core.chunked_seq_QMARK_(seq__59555_59900__$1)){
var c__4550__auto___59901 = cljs.core.chunk_first(seq__59555_59900__$1);
var G__59902 = cljs.core.chunk_rest(seq__59555_59900__$1);
var G__59903 = c__4550__auto___59901;
var G__59904 = cljs.core.count(c__4550__auto___59901);
var G__59905 = (0);
seq__59555_59877 = G__59902;
chunk__59556_59878 = G__59903;
count__59557_59879 = G__59904;
i__59558_59880 = G__59905;
continue;
} else {
var map__59567_59907 = cljs.core.first(seq__59555_59900__$1);
var map__59567_59908__$1 = (((((!((map__59567_59907 == null))))?(((((map__59567_59907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59567_59907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59567_59907):map__59567_59907);
var w_59909 = map__59567_59908__$1;
var msg_59910__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567_59908__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567_59908__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567_59908__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567_59908__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59913)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59911),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59912),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59910__$1)].join(''));


var G__59915 = cljs.core.next(seq__59555_59900__$1);
var G__59916 = null;
var G__59917 = (0);
var G__59918 = (0);
seq__59555_59877 = G__59915;
chunk__59556_59878 = G__59916;
count__59557_59879 = G__59917;
i__59558_59880 = G__59918;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info){
return (function (p__59571){
var map__59572 = p__59571;
var map__59572__$1 = (((((!((map__59572 == null))))?(((((map__59572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59572):map__59572);
var src = map__59572__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info){
return (function (p__59579){
var map__59580 = p__59579;
var map__59580__$1 = (((((!((map__59580 == null))))?(((((map__59580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59580):map__59580);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59580__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info){
return (function (p__59585){
var map__59586 = p__59585;
var map__59586__$1 = (((((!((map__59586 == null))))?(((((map__59586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59586):map__59586);
var rc = map__59586__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59586__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info){
return (function (p1__59530_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59530_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__59540,map__59540__$1,sources,compiled,warnings,map__59535,map__59535__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59592){
var map__59593 = p__59592;
var map__59593__$1 = (((((!((map__59593 == null))))?(((((map__59593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59593):map__59593);
var msg = map__59593__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59593__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59599 = cljs.core.seq(updates);
var chunk__59601 = null;
var count__59602 = (0);
var i__59603 = (0);
while(true){
if((i__59603 < count__59602)){
var path = chunk__59601.cljs$core$IIndexed$_nth$arity$2(null,i__59603);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59655_59931 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59658_59932 = null;
var count__59659_59933 = (0);
var i__59660_59934 = (0);
while(true){
if((i__59660_59934 < count__59659_59933)){
var node_59935 = chunk__59658_59932.cljs$core$IIndexed$_nth$arity$2(null,i__59660_59934);
var path_match_59936 = shadow.cljs.devtools.client.browser.match_paths(node_59935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59936)){
var new_link_59937 = (function (){var G__59674 = node_59935.cloneNode(true);
G__59674.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59674;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59936], 0));

goog.dom.insertSiblingAfter(new_link_59937,node_59935);

goog.dom.removeNode(node_59935);


var G__59938 = seq__59655_59931;
var G__59939 = chunk__59658_59932;
var G__59940 = count__59659_59933;
var G__59941 = (i__59660_59934 + (1));
seq__59655_59931 = G__59938;
chunk__59658_59932 = G__59939;
count__59659_59933 = G__59940;
i__59660_59934 = G__59941;
continue;
} else {
var G__59942 = seq__59655_59931;
var G__59943 = chunk__59658_59932;
var G__59944 = count__59659_59933;
var G__59945 = (i__59660_59934 + (1));
seq__59655_59931 = G__59942;
chunk__59658_59932 = G__59943;
count__59659_59933 = G__59944;
i__59660_59934 = G__59945;
continue;
}
} else {
var temp__5735__auto___59946 = cljs.core.seq(seq__59655_59931);
if(temp__5735__auto___59946){
var seq__59655_59947__$1 = temp__5735__auto___59946;
if(cljs.core.chunked_seq_QMARK_(seq__59655_59947__$1)){
var c__4550__auto___59948 = cljs.core.chunk_first(seq__59655_59947__$1);
var G__59949 = cljs.core.chunk_rest(seq__59655_59947__$1);
var G__59950 = c__4550__auto___59948;
var G__59951 = cljs.core.count(c__4550__auto___59948);
var G__59952 = (0);
seq__59655_59931 = G__59949;
chunk__59658_59932 = G__59950;
count__59659_59933 = G__59951;
i__59660_59934 = G__59952;
continue;
} else {
var node_59953 = cljs.core.first(seq__59655_59947__$1);
var path_match_59954 = shadow.cljs.devtools.client.browser.match_paths(node_59953.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59954)){
var new_link_59955 = (function (){var G__59680 = node_59953.cloneNode(true);
G__59680.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59954),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59680;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59954], 0));

goog.dom.insertSiblingAfter(new_link_59955,node_59953);

goog.dom.removeNode(node_59953);


var G__59956 = cljs.core.next(seq__59655_59947__$1);
var G__59957 = null;
var G__59958 = (0);
var G__59959 = (0);
seq__59655_59931 = G__59956;
chunk__59658_59932 = G__59957;
count__59659_59933 = G__59958;
i__59660_59934 = G__59959;
continue;
} else {
var G__59960 = cljs.core.next(seq__59655_59947__$1);
var G__59961 = null;
var G__59962 = (0);
var G__59963 = (0);
seq__59655_59931 = G__59960;
chunk__59658_59932 = G__59961;
count__59659_59933 = G__59962;
i__59660_59934 = G__59963;
continue;
}
}
} else {
}
}
break;
}


var G__59964 = seq__59599;
var G__59965 = chunk__59601;
var G__59966 = count__59602;
var G__59967 = (i__59603 + (1));
seq__59599 = G__59964;
chunk__59601 = G__59965;
count__59602 = G__59966;
i__59603 = G__59967;
continue;
} else {
var G__59968 = seq__59599;
var G__59969 = chunk__59601;
var G__59970 = count__59602;
var G__59971 = (i__59603 + (1));
seq__59599 = G__59968;
chunk__59601 = G__59969;
count__59602 = G__59970;
i__59603 = G__59971;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59599);
if(temp__5735__auto__){
var seq__59599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59599__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59599__$1);
var G__59972 = cljs.core.chunk_rest(seq__59599__$1);
var G__59973 = c__4550__auto__;
var G__59974 = cljs.core.count(c__4550__auto__);
var G__59975 = (0);
seq__59599 = G__59972;
chunk__59601 = G__59973;
count__59602 = G__59974;
i__59603 = G__59975;
continue;
} else {
var path = cljs.core.first(seq__59599__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59682_59976 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59685_59977 = null;
var count__59686_59978 = (0);
var i__59687_59979 = (0);
while(true){
if((i__59687_59979 < count__59686_59978)){
var node_59982 = chunk__59685_59977.cljs$core$IIndexed$_nth$arity$2(null,i__59687_59979);
var path_match_59984 = shadow.cljs.devtools.client.browser.match_paths(node_59982.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59984)){
var new_link_59985 = (function (){var G__59703 = node_59982.cloneNode(true);
G__59703.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59984),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59703;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59984], 0));

goog.dom.insertSiblingAfter(new_link_59985,node_59982);

goog.dom.removeNode(node_59982);


var G__59986 = seq__59682_59976;
var G__59987 = chunk__59685_59977;
var G__59988 = count__59686_59978;
var G__59989 = (i__59687_59979 + (1));
seq__59682_59976 = G__59986;
chunk__59685_59977 = G__59987;
count__59686_59978 = G__59988;
i__59687_59979 = G__59989;
continue;
} else {
var G__59990 = seq__59682_59976;
var G__59991 = chunk__59685_59977;
var G__59992 = count__59686_59978;
var G__59993 = (i__59687_59979 + (1));
seq__59682_59976 = G__59990;
chunk__59685_59977 = G__59991;
count__59686_59978 = G__59992;
i__59687_59979 = G__59993;
continue;
}
} else {
var temp__5735__auto___59994__$1 = cljs.core.seq(seq__59682_59976);
if(temp__5735__auto___59994__$1){
var seq__59682_59995__$1 = temp__5735__auto___59994__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59682_59995__$1)){
var c__4550__auto___59996 = cljs.core.chunk_first(seq__59682_59995__$1);
var G__59997 = cljs.core.chunk_rest(seq__59682_59995__$1);
var G__59998 = c__4550__auto___59996;
var G__59999 = cljs.core.count(c__4550__auto___59996);
var G__60000 = (0);
seq__59682_59976 = G__59997;
chunk__59685_59977 = G__59998;
count__59686_59978 = G__59999;
i__59687_59979 = G__60000;
continue;
} else {
var node_60001 = cljs.core.first(seq__59682_59995__$1);
var path_match_60002 = shadow.cljs.devtools.client.browser.match_paths(node_60001.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60002)){
var new_link_60003 = (function (){var G__59710 = node_60001.cloneNode(true);
G__59710.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60002),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59710;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60002], 0));

goog.dom.insertSiblingAfter(new_link_60003,node_60001);

goog.dom.removeNode(node_60001);


var G__60004 = cljs.core.next(seq__59682_59995__$1);
var G__60005 = null;
var G__60006 = (0);
var G__60007 = (0);
seq__59682_59976 = G__60004;
chunk__59685_59977 = G__60005;
count__59686_59978 = G__60006;
i__59687_59979 = G__60007;
continue;
} else {
var G__60008 = cljs.core.next(seq__59682_59995__$1);
var G__60009 = null;
var G__60010 = (0);
var G__60011 = (0);
seq__59682_59976 = G__60008;
chunk__59685_59977 = G__60009;
count__59686_59978 = G__60010;
i__59687_59979 = G__60011;
continue;
}
}
} else {
}
}
break;
}


var G__60012 = cljs.core.next(seq__59599__$1);
var G__60013 = null;
var G__60014 = (0);
var G__60015 = (0);
seq__59599 = G__60012;
chunk__59601 = G__60013;
count__59602 = G__60014;
i__59603 = G__60015;
continue;
} else {
var G__60016 = cljs.core.next(seq__59599__$1);
var G__60017 = null;
var G__60018 = (0);
var G__60019 = (0);
seq__59599 = G__60016;
chunk__59601 = G__60017;
count__59602 = G__60018;
i__59603 = G__60019;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59723){
var map__59724 = p__59723;
var map__59724__$1 = (((((!((map__59724 == null))))?(((((map__59724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59724):map__59724);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59724__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__59724,map__59724__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__59724,map__59724__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59740,done){
var map__59741 = p__59740;
var map__59741__$1 = (((((!((map__59741 == null))))?(((((map__59741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59741):map__59741);
var msg = map__59741__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59741__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59741__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59741__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__59741,map__59741__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__59745){
var map__59749 = p__59745;
var map__59749__$1 = (((((!((map__59749 == null))))?(((((map__59749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59749):map__59749);
var src = map__59749__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59749__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__59741,map__59741__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__59741,map__59741__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e59756){var e = e59756;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__59741,map__59741__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__59762,done){
var map__59763 = p__59762;
var map__59763__$1 = (((((!((map__59763 == null))))?(((((map__59763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59763):map__59763);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__59763,map__59763__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__59763,map__59763__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__59769){
var map__59770 = p__59769;
var map__59770__$1 = (((((!((map__59770 == null))))?(((((map__59770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770):map__59770);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__59775,done){
var map__59776 = p__59775;
var map__59776__$1 = (((((!((map__59776 == null))))?(((((map__59776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59776):map__59776);
var msg = map__59776__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__59778_60032 = type;
var G__59778_60033__$1 = (((G__59778_60032 instanceof cljs.core.Keyword))?G__59778_60032.fqn:null);
switch (G__59778_60033__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__59783 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__59784 = ((function (G__59783){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__59783))
;
var G__59785 = "POST";
var G__59786 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__59787 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59783,G__59784,G__59785,G__59786,G__59787);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e59796){var e = e59796;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60048 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60048)){
var s_60049 = temp__5735__auto___60048;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_60049.onclose = ((function (s_60049,temp__5735__auto___60048){
return (function (e){
return null;
});})(s_60049,temp__5735__auto___60048))
;

s_60049.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
