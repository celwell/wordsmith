goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__50891 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50892 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50892;

try{var G__50893 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__50894 = container;
var G__50895 = ((function (G__50893,G__50894,_STAR_always_update_STAR__orig_val__50891,_STAR_always_update_STAR__temp_val__50892){
return (function (){
var _STAR_always_update_STAR__orig_val__50896 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50897 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50897;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50896;
}});})(G__50893,G__50894,_STAR_always_update_STAR__orig_val__50891,_STAR_always_update_STAR__temp_val__50892))
;
return module$node_modules$react_dom$index.render(G__50893,G__50894,G__50895);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50891;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__50904 = arguments.length;
switch (G__50904) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__50918_50946 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__50919_50947 = null;
var count__50920_50948 = (0);
var i__50921_50949 = (0);
while(true){
if((i__50921_50949 < count__50920_50948)){
var v_50950 = chunk__50919_50947.cljs$core$IIndexed$_nth$arity$2(null,i__50921_50949);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_50950);


var G__50951 = seq__50918_50946;
var G__50952 = chunk__50919_50947;
var G__50953 = count__50920_50948;
var G__50954 = (i__50921_50949 + (1));
seq__50918_50946 = G__50951;
chunk__50919_50947 = G__50952;
count__50920_50948 = G__50953;
i__50921_50949 = G__50954;
continue;
} else {
var temp__5735__auto___50955 = cljs.core.seq(seq__50918_50946);
if(temp__5735__auto___50955){
var seq__50918_50958__$1 = temp__5735__auto___50955;
if(cljs.core.chunked_seq_QMARK_(seq__50918_50958__$1)){
var c__4550__auto___50959 = cljs.core.chunk_first(seq__50918_50958__$1);
var G__50960 = cljs.core.chunk_rest(seq__50918_50958__$1);
var G__50961 = c__4550__auto___50959;
var G__50962 = cljs.core.count(c__4550__auto___50959);
var G__50963 = (0);
seq__50918_50946 = G__50960;
chunk__50919_50947 = G__50961;
count__50920_50948 = G__50962;
i__50921_50949 = G__50963;
continue;
} else {
var v_50964 = cljs.core.first(seq__50918_50958__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_50964);


var G__50965 = cljs.core.next(seq__50918_50958__$1);
var G__50966 = null;
var G__50967 = (0);
var G__50968 = (0);
seq__50918_50946 = G__50965;
chunk__50919_50947 = G__50966;
count__50920_50948 = G__50967;
i__50921_50949 = G__50968;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
