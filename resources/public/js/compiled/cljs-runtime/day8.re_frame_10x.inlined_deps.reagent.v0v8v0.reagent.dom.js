goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__46239 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__46240 = true;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__46240;

try{var G__46241 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__46242 = container;
var G__46243 = ((function (G__46241,G__46242,_STAR_always_update_STAR__orig_val__46239,_STAR_always_update_STAR__temp_val__46240){
return (function (){
var _STAR_always_update_STAR__orig_val__46244 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__46245 = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__46245;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__46244;
}});})(G__46241,G__46242,_STAR_always_update_STAR__orig_val__46239,_STAR_always_update_STAR__temp_val__46240))
;
return module$node_modules$react_dom$index.render(G__46241,G__46242,G__46243);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__46239;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$render(var_args){
var G__46247 = arguments.length;
switch (G__46247) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp(f,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var seq__46252_46261 = cljs.core.seq(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots)));
var chunk__46253_46262 = null;
var count__46254_46263 = (0);
var i__46255_46264 = (0);
while(true){
if((i__46255_46264 < count__46254_46263)){
var v_46265 = chunk__46253_46262.cljs$core$IIndexed$_nth$arity$2(null,i__46255_46264);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component,v_46265);


var G__46266 = seq__46252_46261;
var G__46267 = chunk__46253_46262;
var G__46268 = count__46254_46263;
var G__46269 = (i__46255_46264 + (1));
seq__46252_46261 = G__46266;
chunk__46253_46262 = G__46267;
count__46254_46263 = G__46268;
i__46255_46264 = G__46269;
continue;
} else {
var temp__5735__auto___46270 = cljs.core.seq(seq__46252_46261);
if(temp__5735__auto___46270){
var seq__46252_46271__$1 = temp__5735__auto___46270;
if(cljs.core.chunked_seq_QMARK_(seq__46252_46271__$1)){
var c__4550__auto___46272 = cljs.core.chunk_first(seq__46252_46271__$1);
var G__46273 = cljs.core.chunk_rest(seq__46252_46271__$1);
var G__46274 = c__4550__auto___46272;
var G__46275 = cljs.core.count(c__4550__auto___46272);
var G__46276 = (0);
seq__46252_46261 = G__46273;
chunk__46253_46262 = G__46274;
count__46254_46263 = G__46275;
i__46255_46264 = G__46276;
continue;
} else {
var v_46277 = cljs.core.first(seq__46252_46271__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component,v_46277);


var G__46280 = cljs.core.next(seq__46252_46271__$1);
var G__46281 = null;
var G__46282 = (0);
var G__46283 = (0);
seq__46252_46261 = G__46280;
chunk__46253_46262 = G__46281;
count__46254_46263 = G__46282;
i__46255_46264 = G__46283;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.js.map
