goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__45227__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__45227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45229__i = 0, G__45229__a = new Array(arguments.length -  0);
while (G__45229__i < G__45229__a.length) {G__45229__a[G__45229__i] = arguments[G__45229__i + 0]; ++G__45229__i;}
  args = new cljs.core.IndexedSeq(G__45229__a,0,null);
} 
return G__45227__delegate.call(this,args);};
G__45227.cljs$lang$maxFixedArity = 0;
G__45227.cljs$lang$applyTo = (function (arglist__45230){
var args = cljs.core.seq(arglist__45230);
return G__45227__delegate(args);
});
G__45227.cljs$core$IFn$_invoke$arity$variadic = G__45227__delegate;
return G__45227;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45231__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__45231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45232__i = 0, G__45232__a = new Array(arguments.length -  0);
while (G__45232__i < G__45232__a.length) {G__45232__a[G__45232__i] = arguments[G__45232__i + 0]; ++G__45232__i;}
  args = new cljs.core.IndexedSeq(G__45232__a,0,null);
} 
return G__45231__delegate.call(this,args);};
G__45231.cljs$lang$maxFixedArity = 0;
G__45231.cljs$lang$applyTo = (function (arglist__45233){
var args = cljs.core.seq(arglist__45233);
return G__45231__delegate(args);
});
G__45231.cljs$core$IFn$_invoke$arity$variadic = G__45231__delegate;
return G__45231;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.js.map
