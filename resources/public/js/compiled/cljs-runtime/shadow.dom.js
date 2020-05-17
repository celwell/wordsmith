goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__56821 = coll;
var G__56822 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__56821,G__56822) : shadow.dom.lazy_native_coll_seq.call(null,G__56821,G__56822));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__56846 = arguments.length;
switch (G__56846) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__56855 = arguments.length;
switch (G__56855) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__56862 = arguments.length;
switch (G__56862) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__56868 = arguments.length;
switch (G__56868) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__56874 = arguments.length;
switch (G__56874) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__56876 = document;
var G__56877 = shadow.dom.dom_node(el);
return goog.dom.contains(G__56876,G__56877);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__56879 = shadow.dom.dom_node(parent);
var G__56880 = shadow.dom.dom_node(el);
return goog.dom.contains(G__56879,G__56880);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__56882 = shadow.dom.dom_node(el);
var G__56883 = cls;
return goog.dom.classlist.add(G__56882,G__56883);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__56886 = shadow.dom.dom_node(el);
var G__56887 = cls;
return goog.dom.classlist.remove(G__56886,G__56887);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__56890 = arguments.length;
switch (G__56890) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__56892 = shadow.dom.dom_node(el);
var G__56893 = cls;
return goog.dom.classlist.toggle(G__56892,G__56893);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e56900){if((e56900 instanceof Object)){
var e = e56900;
return console.log("didnt support attachEvent",el,e);
} else {
throw e56900;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__56909 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__56910 = null;
var count__56911 = (0);
var i__56912 = (0);
while(true){
if((i__56912 < count__56911)){
var el = chunk__56910.cljs$core$IIndexed$_nth$arity$2(null,i__56912);
var handler_57666__$1 = ((function (seq__56909,chunk__56910,count__56911,i__56912,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56909,chunk__56910,count__56911,i__56912,el))
;
var G__56923_57669 = el;
var G__56924_57670 = cljs.core.name(ev);
var G__56925_57671 = handler_57666__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56923_57669,G__56924_57670,G__56925_57671) : shadow.dom.dom_listen.call(null,G__56923_57669,G__56924_57670,G__56925_57671));


var G__57672 = seq__56909;
var G__57674 = chunk__56910;
var G__57675 = count__56911;
var G__57676 = (i__56912 + (1));
seq__56909 = G__57672;
chunk__56910 = G__57674;
count__56911 = G__57675;
i__56912 = G__57676;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56909);
if(temp__5735__auto__){
var seq__56909__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56909__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56909__$1);
var G__57678 = cljs.core.chunk_rest(seq__56909__$1);
var G__57679 = c__4550__auto__;
var G__57680 = cljs.core.count(c__4550__auto__);
var G__57681 = (0);
seq__56909 = G__57678;
chunk__56910 = G__57679;
count__56911 = G__57680;
i__56912 = G__57681;
continue;
} else {
var el = cljs.core.first(seq__56909__$1);
var handler_57683__$1 = ((function (seq__56909,chunk__56910,count__56911,i__56912,el,seq__56909__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__56909,chunk__56910,count__56911,i__56912,el,seq__56909__$1,temp__5735__auto__))
;
var G__56929_57684 = el;
var G__56930_57685 = cljs.core.name(ev);
var G__56931_57686 = handler_57683__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56929_57684,G__56930_57685,G__56931_57686) : shadow.dom.dom_listen.call(null,G__56929_57684,G__56930_57685,G__56931_57686));


var G__57688 = cljs.core.next(seq__56909__$1);
var G__57689 = null;
var G__57690 = (0);
var G__57691 = (0);
seq__56909 = G__57688;
chunk__56910 = G__57689;
count__56911 = G__57690;
i__56912 = G__57691;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__56937 = arguments.length;
switch (G__56937) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__56941 = shadow.dom.dom_node(el);
var G__56942 = cljs.core.name(ev);
var G__56943 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__56941,G__56942,G__56943) : shadow.dom.dom_listen.call(null,G__56941,G__56942,G__56943));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__56946 = shadow.dom.dom_node(el);
var G__56947 = cljs.core.name(ev);
var G__56948 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__56946,G__56947,G__56948) : shadow.dom.dom_listen_remove.call(null,G__56946,G__56947,G__56948));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__56951 = cljs.core.seq(events);
var chunk__56952 = null;
var count__56953 = (0);
var i__56954 = (0);
while(true){
if((i__56954 < count__56953)){
var vec__56963 = chunk__56952.cljs$core$IIndexed$_nth$arity$2(null,i__56954);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__57699 = seq__56951;
var G__57700 = chunk__56952;
var G__57701 = count__56953;
var G__57702 = (i__56954 + (1));
seq__56951 = G__57699;
chunk__56952 = G__57700;
count__56953 = G__57701;
i__56954 = G__57702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56951);
if(temp__5735__auto__){
var seq__56951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56951__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56951__$1);
var G__57703 = cljs.core.chunk_rest(seq__56951__$1);
var G__57704 = c__4550__auto__;
var G__57705 = cljs.core.count(c__4550__auto__);
var G__57706 = (0);
seq__56951 = G__57703;
chunk__56952 = G__57704;
count__56953 = G__57705;
i__56954 = G__57706;
continue;
} else {
var vec__56967 = cljs.core.first(seq__56951__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__57709 = cljs.core.next(seq__56951__$1);
var G__57710 = null;
var G__57711 = (0);
var G__57712 = (0);
seq__56951 = G__57709;
chunk__56952 = G__57710;
count__56953 = G__57711;
i__56954 = G__57712;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__56972 = cljs.core.seq(styles);
var chunk__56973 = null;
var count__56974 = (0);
var i__56975 = (0);
while(true){
if((i__56975 < count__56974)){
var vec__56996 = chunk__56973.cljs$core$IIndexed$_nth$arity$2(null,i__56975);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56996,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56996,(1),null);
var G__56999_57715 = dom;
var G__57000_57716 = cljs.core.name(k);
var G__57001_57717 = (((v == null))?"":v);
goog.style.setStyle(G__56999_57715,G__57000_57716,G__57001_57717);


var G__57720 = seq__56972;
var G__57721 = chunk__56973;
var G__57722 = count__56974;
var G__57723 = (i__56975 + (1));
seq__56972 = G__57720;
chunk__56973 = G__57721;
count__56974 = G__57722;
i__56975 = G__57723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56972);
if(temp__5735__auto__){
var seq__56972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56972__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56972__$1);
var G__57725 = cljs.core.chunk_rest(seq__56972__$1);
var G__57726 = c__4550__auto__;
var G__57727 = cljs.core.count(c__4550__auto__);
var G__57728 = (0);
seq__56972 = G__57725;
chunk__56973 = G__57726;
count__56974 = G__57727;
i__56975 = G__57728;
continue;
} else {
var vec__57002 = cljs.core.first(seq__56972__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57002,(1),null);
var G__57007_57730 = dom;
var G__57008_57731 = cljs.core.name(k);
var G__57009_57732 = (((v == null))?"":v);
goog.style.setStyle(G__57007_57730,G__57008_57731,G__57009_57732);


var G__57735 = cljs.core.next(seq__56972__$1);
var G__57736 = null;
var G__57737 = (0);
var G__57738 = (0);
seq__56972 = G__57735;
chunk__56973 = G__57736;
count__56974 = G__57737;
i__56975 = G__57738;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57013_57742 = key;
var G__57013_57743__$1 = (((G__57013_57742 instanceof cljs.core.Keyword))?G__57013_57742.fqn:null);
switch (G__57013_57743__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_57749 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_57749,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_57749,"aria-");
}
})())){
el.setAttribute(ks_57749,value);
} else {
(el[ks_57749] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__57024 = shadow.dom.dom_node(el);
var G__57025 = cls;
return goog.dom.classlist.contains(G__57024,G__57025);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57035){
var map__57036 = p__57035;
var map__57036__$1 = (((((!((map__57036 == null))))?(((((map__57036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57036):map__57036);
var props = map__57036__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57036__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57040 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57040,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57040,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57040,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57043 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57043,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57043;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57045 = arguments.length;
switch (G__57045) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57046){
var vec__57047 = p__57046;
var seq__57048 = cljs.core.seq(vec__57047);
var first__57049 = cljs.core.first(seq__57048);
var seq__57048__$1 = cljs.core.next(seq__57048);
var nn = first__57049;
var first__57049__$1 = cljs.core.first(seq__57048__$1);
var seq__57048__$2 = cljs.core.next(seq__57048__$1);
var np = first__57049__$1;
var nc = seq__57048__$2;
var node = vec__57047;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57050 = nn;
var G__57051 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57050,G__57051) : create_fn.call(null,G__57050,G__57051));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57052 = nn;
var G__57053 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57052,G__57053) : create_fn.call(null,G__57052,G__57053));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57054 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57054,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57054,(1),null);
var seq__57057_57784 = cljs.core.seq(node_children);
var chunk__57058_57785 = null;
var count__57059_57786 = (0);
var i__57060_57787 = (0);
while(true){
if((i__57060_57787 < count__57059_57786)){
var child_struct_57789 = chunk__57058_57785.cljs$core$IIndexed$_nth$arity$2(null,i__57060_57787);
var children_57791 = shadow.dom.dom_node(child_struct_57789);
if(cljs.core.seq_QMARK_(children_57791)){
var seq__57080_57792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_57791));
var chunk__57082_57793 = null;
var count__57083_57794 = (0);
var i__57084_57795 = (0);
while(true){
if((i__57084_57795 < count__57083_57794)){
var child_57798 = chunk__57082_57793.cljs$core$IIndexed$_nth$arity$2(null,i__57084_57795);
if(cljs.core.truth_(child_57798)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57798);


var G__57799 = seq__57080_57792;
var G__57800 = chunk__57082_57793;
var G__57801 = count__57083_57794;
var G__57802 = (i__57084_57795 + (1));
seq__57080_57792 = G__57799;
chunk__57082_57793 = G__57800;
count__57083_57794 = G__57801;
i__57084_57795 = G__57802;
continue;
} else {
var G__57803 = seq__57080_57792;
var G__57804 = chunk__57082_57793;
var G__57805 = count__57083_57794;
var G__57806 = (i__57084_57795 + (1));
seq__57080_57792 = G__57803;
chunk__57082_57793 = G__57804;
count__57083_57794 = G__57805;
i__57084_57795 = G__57806;
continue;
}
} else {
var temp__5735__auto___57807 = cljs.core.seq(seq__57080_57792);
if(temp__5735__auto___57807){
var seq__57080_57809__$1 = temp__5735__auto___57807;
if(cljs.core.chunked_seq_QMARK_(seq__57080_57809__$1)){
var c__4550__auto___57811 = cljs.core.chunk_first(seq__57080_57809__$1);
var G__57812 = cljs.core.chunk_rest(seq__57080_57809__$1);
var G__57813 = c__4550__auto___57811;
var G__57814 = cljs.core.count(c__4550__auto___57811);
var G__57815 = (0);
seq__57080_57792 = G__57812;
chunk__57082_57793 = G__57813;
count__57083_57794 = G__57814;
i__57084_57795 = G__57815;
continue;
} else {
var child_57816 = cljs.core.first(seq__57080_57809__$1);
if(cljs.core.truth_(child_57816)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57816);


var G__57817 = cljs.core.next(seq__57080_57809__$1);
var G__57818 = null;
var G__57819 = (0);
var G__57820 = (0);
seq__57080_57792 = G__57817;
chunk__57082_57793 = G__57818;
count__57083_57794 = G__57819;
i__57084_57795 = G__57820;
continue;
} else {
var G__57822 = cljs.core.next(seq__57080_57809__$1);
var G__57823 = null;
var G__57824 = (0);
var G__57825 = (0);
seq__57080_57792 = G__57822;
chunk__57082_57793 = G__57823;
count__57083_57794 = G__57824;
i__57084_57795 = G__57825;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_57791);
}


var G__57826 = seq__57057_57784;
var G__57827 = chunk__57058_57785;
var G__57828 = count__57059_57786;
var G__57829 = (i__57060_57787 + (1));
seq__57057_57784 = G__57826;
chunk__57058_57785 = G__57827;
count__57059_57786 = G__57828;
i__57060_57787 = G__57829;
continue;
} else {
var temp__5735__auto___57830 = cljs.core.seq(seq__57057_57784);
if(temp__5735__auto___57830){
var seq__57057_57831__$1 = temp__5735__auto___57830;
if(cljs.core.chunked_seq_QMARK_(seq__57057_57831__$1)){
var c__4550__auto___57832 = cljs.core.chunk_first(seq__57057_57831__$1);
var G__57833 = cljs.core.chunk_rest(seq__57057_57831__$1);
var G__57834 = c__4550__auto___57832;
var G__57835 = cljs.core.count(c__4550__auto___57832);
var G__57836 = (0);
seq__57057_57784 = G__57833;
chunk__57058_57785 = G__57834;
count__57059_57786 = G__57835;
i__57060_57787 = G__57836;
continue;
} else {
var child_struct_57837 = cljs.core.first(seq__57057_57831__$1);
var children_57839 = shadow.dom.dom_node(child_struct_57837);
if(cljs.core.seq_QMARK_(children_57839)){
var seq__57093_57841 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_57839));
var chunk__57095_57842 = null;
var count__57096_57843 = (0);
var i__57097_57844 = (0);
while(true){
if((i__57097_57844 < count__57096_57843)){
var child_57849 = chunk__57095_57842.cljs$core$IIndexed$_nth$arity$2(null,i__57097_57844);
if(cljs.core.truth_(child_57849)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57849);


var G__57850 = seq__57093_57841;
var G__57851 = chunk__57095_57842;
var G__57852 = count__57096_57843;
var G__57853 = (i__57097_57844 + (1));
seq__57093_57841 = G__57850;
chunk__57095_57842 = G__57851;
count__57096_57843 = G__57852;
i__57097_57844 = G__57853;
continue;
} else {
var G__57854 = seq__57093_57841;
var G__57855 = chunk__57095_57842;
var G__57856 = count__57096_57843;
var G__57857 = (i__57097_57844 + (1));
seq__57093_57841 = G__57854;
chunk__57095_57842 = G__57855;
count__57096_57843 = G__57856;
i__57097_57844 = G__57857;
continue;
}
} else {
var temp__5735__auto___57858__$1 = cljs.core.seq(seq__57093_57841);
if(temp__5735__auto___57858__$1){
var seq__57093_57859__$1 = temp__5735__auto___57858__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57093_57859__$1)){
var c__4550__auto___57861 = cljs.core.chunk_first(seq__57093_57859__$1);
var G__57862 = cljs.core.chunk_rest(seq__57093_57859__$1);
var G__57863 = c__4550__auto___57861;
var G__57864 = cljs.core.count(c__4550__auto___57861);
var G__57865 = (0);
seq__57093_57841 = G__57862;
chunk__57095_57842 = G__57863;
count__57096_57843 = G__57864;
i__57097_57844 = G__57865;
continue;
} else {
var child_57866 = cljs.core.first(seq__57093_57859__$1);
if(cljs.core.truth_(child_57866)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_57866);


var G__57872 = cljs.core.next(seq__57093_57859__$1);
var G__57873 = null;
var G__57874 = (0);
var G__57875 = (0);
seq__57093_57841 = G__57872;
chunk__57095_57842 = G__57873;
count__57096_57843 = G__57874;
i__57097_57844 = G__57875;
continue;
} else {
var G__57878 = cljs.core.next(seq__57093_57859__$1);
var G__57879 = null;
var G__57880 = (0);
var G__57881 = (0);
seq__57093_57841 = G__57878;
chunk__57095_57842 = G__57879;
count__57096_57843 = G__57880;
i__57097_57844 = G__57881;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_57839);
}


var G__57882 = cljs.core.next(seq__57057_57831__$1);
var G__57883 = null;
var G__57884 = (0);
var G__57885 = (0);
seq__57057_57784 = G__57882;
chunk__57058_57785 = G__57883;
count__57059_57786 = G__57884;
i__57060_57787 = G__57885;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__57111 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57111);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57115 = cljs.core.seq(node);
var chunk__57116 = null;
var count__57117 = (0);
var i__57118 = (0);
while(true){
if((i__57118 < count__57117)){
var n = chunk__57116.cljs$core$IIndexed$_nth$arity$2(null,i__57118);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57891 = seq__57115;
var G__57892 = chunk__57116;
var G__57893 = count__57117;
var G__57894 = (i__57118 + (1));
seq__57115 = G__57891;
chunk__57116 = G__57892;
count__57117 = G__57893;
i__57118 = G__57894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57115);
if(temp__5735__auto__){
var seq__57115__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57115__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57115__$1);
var G__57895 = cljs.core.chunk_rest(seq__57115__$1);
var G__57896 = c__4550__auto__;
var G__57897 = cljs.core.count(c__4550__auto__);
var G__57898 = (0);
seq__57115 = G__57895;
chunk__57116 = G__57896;
count__57117 = G__57897;
i__57118 = G__57898;
continue;
} else {
var n = cljs.core.first(seq__57115__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__57899 = cljs.core.next(seq__57115__$1);
var G__57900 = null;
var G__57901 = (0);
var G__57902 = (0);
seq__57115 = G__57899;
chunk__57116 = G__57900;
count__57117 = G__57901;
i__57118 = G__57902;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__57124 = shadow.dom.dom_node(new$);
var G__57125 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__57124,G__57125);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57129 = arguments.length;
switch (G__57129) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__57134 = arguments.length;
switch (G__57134) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__57142 = arguments.length;
switch (G__57142) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57922 = arguments.length;
var i__4731__auto___57926 = (0);
while(true){
if((i__4731__auto___57926 < len__4730__auto___57922)){
args__4736__auto__.push((arguments[i__4731__auto___57926]));

var G__57927 = (i__4731__auto___57926 + (1));
i__4731__auto___57926 = G__57927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__57158_57929 = cljs.core.seq(nodes);
var chunk__57159_57930 = null;
var count__57160_57931 = (0);
var i__57161_57932 = (0);
while(true){
if((i__57161_57932 < count__57160_57931)){
var node_57933 = chunk__57159_57930.cljs$core$IIndexed$_nth$arity$2(null,i__57161_57932);
fragment.appendChild(shadow.dom._to_dom(node_57933));


var G__57935 = seq__57158_57929;
var G__57936 = chunk__57159_57930;
var G__57937 = count__57160_57931;
var G__57938 = (i__57161_57932 + (1));
seq__57158_57929 = G__57935;
chunk__57159_57930 = G__57936;
count__57160_57931 = G__57937;
i__57161_57932 = G__57938;
continue;
} else {
var temp__5735__auto___57939 = cljs.core.seq(seq__57158_57929);
if(temp__5735__auto___57939){
var seq__57158_57940__$1 = temp__5735__auto___57939;
if(cljs.core.chunked_seq_QMARK_(seq__57158_57940__$1)){
var c__4550__auto___57941 = cljs.core.chunk_first(seq__57158_57940__$1);
var G__57942 = cljs.core.chunk_rest(seq__57158_57940__$1);
var G__57943 = c__4550__auto___57941;
var G__57944 = cljs.core.count(c__4550__auto___57941);
var G__57945 = (0);
seq__57158_57929 = G__57942;
chunk__57159_57930 = G__57943;
count__57160_57931 = G__57944;
i__57161_57932 = G__57945;
continue;
} else {
var node_57948 = cljs.core.first(seq__57158_57940__$1);
fragment.appendChild(shadow.dom._to_dom(node_57948));


var G__57949 = cljs.core.next(seq__57158_57940__$1);
var G__57950 = null;
var G__57951 = (0);
var G__57952 = (0);
seq__57158_57929 = G__57949;
chunk__57159_57930 = G__57950;
count__57160_57931 = G__57951;
i__57161_57932 = G__57952;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq57153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57153));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__57165_57958 = cljs.core.seq(scripts);
var chunk__57166_57959 = null;
var count__57167_57960 = (0);
var i__57168_57961 = (0);
while(true){
if((i__57168_57961 < count__57167_57960)){
var vec__57180_57962 = chunk__57166_57959.cljs$core$IIndexed$_nth$arity$2(null,i__57168_57961);
var script_tag_57963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57180_57962,(0),null);
var script_body_57964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57180_57962,(1),null);
eval(script_body_57964);


var G__57971 = seq__57165_57958;
var G__57972 = chunk__57166_57959;
var G__57973 = count__57167_57960;
var G__57974 = (i__57168_57961 + (1));
seq__57165_57958 = G__57971;
chunk__57166_57959 = G__57972;
count__57167_57960 = G__57973;
i__57168_57961 = G__57974;
continue;
} else {
var temp__5735__auto___57976 = cljs.core.seq(seq__57165_57958);
if(temp__5735__auto___57976){
var seq__57165_57977__$1 = temp__5735__auto___57976;
if(cljs.core.chunked_seq_QMARK_(seq__57165_57977__$1)){
var c__4550__auto___57978 = cljs.core.chunk_first(seq__57165_57977__$1);
var G__57979 = cljs.core.chunk_rest(seq__57165_57977__$1);
var G__57980 = c__4550__auto___57978;
var G__57981 = cljs.core.count(c__4550__auto___57978);
var G__57982 = (0);
seq__57165_57958 = G__57979;
chunk__57166_57959 = G__57980;
count__57167_57960 = G__57981;
i__57168_57961 = G__57982;
continue;
} else {
var vec__57185_57983 = cljs.core.first(seq__57165_57977__$1);
var script_tag_57984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57185_57983,(0),null);
var script_body_57985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57185_57983,(1),null);
eval(script_body_57985);


var G__57986 = cljs.core.next(seq__57165_57977__$1);
var G__57987 = null;
var G__57988 = (0);
var G__57989 = (0);
seq__57165_57958 = G__57986;
chunk__57166_57959 = G__57987;
count__57167_57960 = G__57988;
i__57168_57961 = G__57989;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__57191){
var vec__57192 = p__57191;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57192,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57192,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__57202 = shadow.dom.dom_node(el);
var G__57203 = cls;
return goog.dom.getAncestorByClass(G__57202,G__57203);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__57211 = arguments.length;
switch (G__57211) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__57213 = shadow.dom.dom_node(el);
var G__57214 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__57213,G__57214);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__57217 = shadow.dom.dom_node(el);
var G__57218 = cljs.core.name(tag);
var G__57219 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__57217,G__57218,G__57219);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__57222 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__57222);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__57225 = shadow.dom.dom_node(dom);
var G__57226 = value;
return goog.dom.forms.setValue(G__57225,G__57226);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__57236 = cljs.core.seq(style_keys);
var chunk__57237 = null;
var count__57238 = (0);
var i__57239 = (0);
while(true){
if((i__57239 < count__57238)){
var it = chunk__57237.cljs$core$IIndexed$_nth$arity$2(null,i__57239);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58002 = seq__57236;
var G__58003 = chunk__57237;
var G__58004 = count__57238;
var G__58005 = (i__57239 + (1));
seq__57236 = G__58002;
chunk__57237 = G__58003;
count__57238 = G__58004;
i__57239 = G__58005;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57236);
if(temp__5735__auto__){
var seq__57236__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57236__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57236__$1);
var G__58008 = cljs.core.chunk_rest(seq__57236__$1);
var G__58009 = c__4550__auto__;
var G__58010 = cljs.core.count(c__4550__auto__);
var G__58011 = (0);
seq__57236 = G__58008;
chunk__57237 = G__58009;
count__57238 = G__58010;
i__57239 = G__58011;
continue;
} else {
var it = cljs.core.first(seq__57236__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58013 = cljs.core.next(seq__57236__$1);
var G__58014 = null;
var G__58015 = (0);
var G__58016 = (0);
seq__57236 = G__58013;
chunk__57237 = G__58014;
count__57238 = G__58015;
i__57239 = G__58016;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k57250,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__57266 = k57250;
var G__57266__$1 = (((G__57266 instanceof cljs.core.Keyword))?G__57266.fqn:null);
switch (G__57266__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57250,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__57276){
var vec__57279 = p__57276;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57279,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57279,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57249){
var self__ = this;
var G__57249__$1 = this;
return (new cljs.core.RecordIter((0),G__57249__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__57298 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__57298(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57251,other57252){
var self__ = this;
var this57251__$1 = this;
return (((!((other57252 == null)))) && ((this57251__$1.constructor === other57252.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57251__$1.x,other57252.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57251__$1.y,other57252.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57251__$1.__extmap,other57252.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__57249){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__57315 = cljs.core.keyword_identical_QMARK_;
var expr__57316 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__57321 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__57322 = expr__57316;
return (pred__57315.cljs$core$IFn$_invoke$arity$2 ? pred__57315.cljs$core$IFn$_invoke$arity$2(G__57321,G__57322) : pred__57315.call(null,G__57321,G__57322));
})())){
return (new shadow.dom.Coordinate(G__57249,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57323 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__57324 = expr__57316;
return (pred__57315.cljs$core$IFn$_invoke$arity$2 ? pred__57315.cljs$core$IFn$_invoke$arity$2(G__57323,G__57324) : pred__57315.call(null,G__57323,G__57324));
})())){
return (new shadow.dom.Coordinate(self__.x,G__57249,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__57249),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__57249){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__57249,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__57254){
var extmap__4424__auto__ = (function (){var G__57337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57254,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__57254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57337);
} else {
return G__57337;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__57254),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__57254),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__57341 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__57341);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__57343 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__57343);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__57345 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__57345);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k57348,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__57358 = k57348;
var G__57358__$1 = (((G__57358 instanceof cljs.core.Keyword))?G__57358.fqn:null);
switch (G__57358__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57348,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__57360){
var vec__57361 = p__57360;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57361,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57361,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57347){
var self__ = this;
var G__57347__$1 = this;
return (new cljs.core.RecordIter((0),G__57347__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__57366 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__57366(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57349,other57350){
var self__ = this;
var this57349__$1 = this;
return (((!((other57350 == null)))) && ((this57349__$1.constructor === other57350.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57349__$1.w,other57350.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57349__$1.h,other57350.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57349__$1.__extmap,other57350.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__57347){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__57373 = cljs.core.keyword_identical_QMARK_;
var expr__57374 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__57377 = new cljs.core.Keyword(null,"w","w",354169001);
var G__57378 = expr__57374;
return (pred__57373.cljs$core$IFn$_invoke$arity$2 ? pred__57373.cljs$core$IFn$_invoke$arity$2(G__57377,G__57378) : pred__57373.call(null,G__57377,G__57378));
})())){
return (new shadow.dom.Size(G__57347,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57379 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__57380 = expr__57374;
return (pred__57373.cljs$core$IFn$_invoke$arity$2 ? pred__57373.cljs$core$IFn$_invoke$arity$2(G__57379,G__57380) : pred__57373.call(null,G__57379,G__57380));
})())){
return (new shadow.dom.Size(self__.w,G__57347,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__57347),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__57347){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__57347,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__57354){
var extmap__4424__auto__ = (function (){var G__57388 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57354,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__57354)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57388);
} else {
return G__57388;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__57354),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__57354),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__57400 = shadow.dom.dom_node(el);
return goog.style.getSize(G__57400);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__58083 = (i + (1));
var G__58084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58083;
ret = G__58084;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57426){
var vec__57427 = p__57426;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57427,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__57432 = arguments.length;
switch (G__57432) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__57442_58092 = new_node;
var G__57443_58093 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__57442_58092,G__57443_58093);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__57448_58094 = new_node;
var G__57449_58095 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__57448_58094,G__57449_58095);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58096 = ps;
var G__58097 = (i + (1));
el__$1 = G__58096;
i = G__58097;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__57453 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__57453);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__57457 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__57457);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__57459 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__57459);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__57461 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57461,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57461,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57461,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__57465_58108 = cljs.core.seq(props);
var chunk__57466_58109 = null;
var count__57468_58110 = (0);
var i__57469_58111 = (0);
while(true){
if((i__57469_58111 < count__57468_58110)){
var vec__57479_58112 = chunk__57466_58109.cljs$core$IIndexed$_nth$arity$2(null,i__57469_58111);
var k_58113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57479_58112,(0),null);
var v_58114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57479_58112,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58113);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58113),v_58114);


var G__58115 = seq__57465_58108;
var G__58116 = chunk__57466_58109;
var G__58117 = count__57468_58110;
var G__58118 = (i__57469_58111 + (1));
seq__57465_58108 = G__58115;
chunk__57466_58109 = G__58116;
count__57468_58110 = G__58117;
i__57469_58111 = G__58118;
continue;
} else {
var temp__5735__auto___58119 = cljs.core.seq(seq__57465_58108);
if(temp__5735__auto___58119){
var seq__57465_58120__$1 = temp__5735__auto___58119;
if(cljs.core.chunked_seq_QMARK_(seq__57465_58120__$1)){
var c__4550__auto___58121 = cljs.core.chunk_first(seq__57465_58120__$1);
var G__58122 = cljs.core.chunk_rest(seq__57465_58120__$1);
var G__58123 = c__4550__auto___58121;
var G__58124 = cljs.core.count(c__4550__auto___58121);
var G__58125 = (0);
seq__57465_58108 = G__58122;
chunk__57466_58109 = G__58123;
count__57468_58110 = G__58124;
i__57469_58111 = G__58125;
continue;
} else {
var vec__57491_58126 = cljs.core.first(seq__57465_58120__$1);
var k_58127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57491_58126,(0),null);
var v_58128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57491_58126,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58127);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58127),v_58128);


var G__58129 = cljs.core.next(seq__57465_58120__$1);
var G__58130 = null;
var G__58131 = (0);
var G__58132 = (0);
seq__57465_58108 = G__58129;
chunk__57466_58109 = G__58130;
count__57468_58110 = G__58131;
i__57469_58111 = G__58132;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__57499 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57499,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57499,(1),null);
var seq__57502_58137 = cljs.core.seq(node_children);
var chunk__57504_58138 = null;
var count__57505_58139 = (0);
var i__57506_58140 = (0);
while(true){
if((i__57506_58140 < count__57505_58139)){
var child_struct_58141 = chunk__57504_58138.cljs$core$IIndexed$_nth$arity$2(null,i__57506_58140);
if((!((child_struct_58141 == null)))){
if(typeof child_struct_58141 === 'string'){
var text_58143 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58143),child_struct_58141].join(''));
} else {
var children_58144 = shadow.dom.svg_node(child_struct_58141);
if(cljs.core.seq_QMARK_(children_58144)){
var seq__57543_58145 = cljs.core.seq(children_58144);
var chunk__57545_58146 = null;
var count__57546_58147 = (0);
var i__57547_58148 = (0);
while(true){
if((i__57547_58148 < count__57546_58147)){
var child_58149 = chunk__57545_58146.cljs$core$IIndexed$_nth$arity$2(null,i__57547_58148);
if(cljs.core.truth_(child_58149)){
node.appendChild(child_58149);


var G__58150 = seq__57543_58145;
var G__58151 = chunk__57545_58146;
var G__58152 = count__57546_58147;
var G__58153 = (i__57547_58148 + (1));
seq__57543_58145 = G__58150;
chunk__57545_58146 = G__58151;
count__57546_58147 = G__58152;
i__57547_58148 = G__58153;
continue;
} else {
var G__58154 = seq__57543_58145;
var G__58155 = chunk__57545_58146;
var G__58156 = count__57546_58147;
var G__58157 = (i__57547_58148 + (1));
seq__57543_58145 = G__58154;
chunk__57545_58146 = G__58155;
count__57546_58147 = G__58156;
i__57547_58148 = G__58157;
continue;
}
} else {
var temp__5735__auto___58158 = cljs.core.seq(seq__57543_58145);
if(temp__5735__auto___58158){
var seq__57543_58159__$1 = temp__5735__auto___58158;
if(cljs.core.chunked_seq_QMARK_(seq__57543_58159__$1)){
var c__4550__auto___58160 = cljs.core.chunk_first(seq__57543_58159__$1);
var G__58161 = cljs.core.chunk_rest(seq__57543_58159__$1);
var G__58162 = c__4550__auto___58160;
var G__58163 = cljs.core.count(c__4550__auto___58160);
var G__58164 = (0);
seq__57543_58145 = G__58161;
chunk__57545_58146 = G__58162;
count__57546_58147 = G__58163;
i__57547_58148 = G__58164;
continue;
} else {
var child_58165 = cljs.core.first(seq__57543_58159__$1);
if(cljs.core.truth_(child_58165)){
node.appendChild(child_58165);


var G__58166 = cljs.core.next(seq__57543_58159__$1);
var G__58167 = null;
var G__58168 = (0);
var G__58169 = (0);
seq__57543_58145 = G__58166;
chunk__57545_58146 = G__58167;
count__57546_58147 = G__58168;
i__57547_58148 = G__58169;
continue;
} else {
var G__58170 = cljs.core.next(seq__57543_58159__$1);
var G__58171 = null;
var G__58172 = (0);
var G__58173 = (0);
seq__57543_58145 = G__58170;
chunk__57545_58146 = G__58171;
count__57546_58147 = G__58172;
i__57547_58148 = G__58173;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58144);
}
}


var G__58174 = seq__57502_58137;
var G__58175 = chunk__57504_58138;
var G__58176 = count__57505_58139;
var G__58177 = (i__57506_58140 + (1));
seq__57502_58137 = G__58174;
chunk__57504_58138 = G__58175;
count__57505_58139 = G__58176;
i__57506_58140 = G__58177;
continue;
} else {
var G__58178 = seq__57502_58137;
var G__58179 = chunk__57504_58138;
var G__58180 = count__57505_58139;
var G__58181 = (i__57506_58140 + (1));
seq__57502_58137 = G__58178;
chunk__57504_58138 = G__58179;
count__57505_58139 = G__58180;
i__57506_58140 = G__58181;
continue;
}
} else {
var temp__5735__auto___58182 = cljs.core.seq(seq__57502_58137);
if(temp__5735__auto___58182){
var seq__57502_58183__$1 = temp__5735__auto___58182;
if(cljs.core.chunked_seq_QMARK_(seq__57502_58183__$1)){
var c__4550__auto___58184 = cljs.core.chunk_first(seq__57502_58183__$1);
var G__58185 = cljs.core.chunk_rest(seq__57502_58183__$1);
var G__58186 = c__4550__auto___58184;
var G__58187 = cljs.core.count(c__4550__auto___58184);
var G__58188 = (0);
seq__57502_58137 = G__58185;
chunk__57504_58138 = G__58186;
count__57505_58139 = G__58187;
i__57506_58140 = G__58188;
continue;
} else {
var child_struct_58189 = cljs.core.first(seq__57502_58183__$1);
if((!((child_struct_58189 == null)))){
if(typeof child_struct_58189 === 'string'){
var text_58190 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58190),child_struct_58189].join(''));
} else {
var children_58191 = shadow.dom.svg_node(child_struct_58189);
if(cljs.core.seq_QMARK_(children_58191)){
var seq__57566_58192 = cljs.core.seq(children_58191);
var chunk__57568_58193 = null;
var count__57569_58194 = (0);
var i__57570_58195 = (0);
while(true){
if((i__57570_58195 < count__57569_58194)){
var child_58199 = chunk__57568_58193.cljs$core$IIndexed$_nth$arity$2(null,i__57570_58195);
if(cljs.core.truth_(child_58199)){
node.appendChild(child_58199);


var G__58200 = seq__57566_58192;
var G__58201 = chunk__57568_58193;
var G__58202 = count__57569_58194;
var G__58203 = (i__57570_58195 + (1));
seq__57566_58192 = G__58200;
chunk__57568_58193 = G__58201;
count__57569_58194 = G__58202;
i__57570_58195 = G__58203;
continue;
} else {
var G__58204 = seq__57566_58192;
var G__58205 = chunk__57568_58193;
var G__58206 = count__57569_58194;
var G__58207 = (i__57570_58195 + (1));
seq__57566_58192 = G__58204;
chunk__57568_58193 = G__58205;
count__57569_58194 = G__58206;
i__57570_58195 = G__58207;
continue;
}
} else {
var temp__5735__auto___58208__$1 = cljs.core.seq(seq__57566_58192);
if(temp__5735__auto___58208__$1){
var seq__57566_58209__$1 = temp__5735__auto___58208__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57566_58209__$1)){
var c__4550__auto___58210 = cljs.core.chunk_first(seq__57566_58209__$1);
var G__58211 = cljs.core.chunk_rest(seq__57566_58209__$1);
var G__58212 = c__4550__auto___58210;
var G__58213 = cljs.core.count(c__4550__auto___58210);
var G__58214 = (0);
seq__57566_58192 = G__58211;
chunk__57568_58193 = G__58212;
count__57569_58194 = G__58213;
i__57570_58195 = G__58214;
continue;
} else {
var child_58215 = cljs.core.first(seq__57566_58209__$1);
if(cljs.core.truth_(child_58215)){
node.appendChild(child_58215);


var G__58216 = cljs.core.next(seq__57566_58209__$1);
var G__58217 = null;
var G__58218 = (0);
var G__58219 = (0);
seq__57566_58192 = G__58216;
chunk__57568_58193 = G__58217;
count__57569_58194 = G__58218;
i__57570_58195 = G__58219;
continue;
} else {
var G__58220 = cljs.core.next(seq__57566_58209__$1);
var G__58221 = null;
var G__58222 = (0);
var G__58223 = (0);
seq__57566_58192 = G__58220;
chunk__57568_58193 = G__58221;
count__57569_58194 = G__58222;
i__57570_58195 = G__58223;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58191);
}
}


var G__58228 = cljs.core.next(seq__57502_58183__$1);
var G__58229 = null;
var G__58230 = (0);
var G__58231 = (0);
seq__57502_58137 = G__58228;
chunk__57504_58138 = G__58229;
count__57505_58139 = G__58230;
i__57506_58140 = G__58231;
continue;
} else {
var G__58232 = cljs.core.next(seq__57502_58183__$1);
var G__58233 = null;
var G__58234 = (0);
var G__58235 = (0);
seq__57502_58137 = G__58232;
chunk__57504_58138 = G__58233;
count__57505_58139 = G__58234;
i__57506_58140 = G__58235;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__57579_58236 = shadow.dom._to_svg;
var G__57580_58237 = "string";
var G__57581_58238 = ((function (G__57579_58236,G__57580_58237){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__57579_58236,G__57580_58237))
;
goog.object.set(G__57579_58236,G__57580_58237,G__57581_58238);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__57584_58239 = shadow.dom._to_svg;
var G__57585_58240 = "null";
var G__57586_58241 = ((function (G__57584_58239,G__57585_58240){
return (function (_){
return null;
});})(G__57584_58239,G__57585_58240))
;
goog.object.set(G__57584_58239,G__57585_58240,G__57586_58241);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58242 = arguments.length;
var i__4731__auto___58243 = (0);
while(true){
if((i__4731__auto___58243 < len__4730__auto___58242)){
args__4736__auto__.push((arguments[i__4731__auto___58243]));

var G__58248 = (i__4731__auto___58243 + (1));
i__4731__auto___58243 = G__58248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq57588){
var G__57589 = cljs.core.first(seq57588);
var seq57588__$1 = cljs.core.next(seq57588);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57589,seq57588__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__57597 = arguments.length;
switch (G__57597) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__57605_58256 = shadow.dom.dom_node(el);
var G__57606_58257 = cljs.core.name(event);
var G__57607_58258 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57605_58256,G__57606_58257,G__57607_58258) : shadow.dom.dom_listen.call(null,G__57605_58256,G__57606_58257,G__57607_58258));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__55202__auto___58261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___58261,buf,chan,event_fn){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___58261,buf,chan,event_fn){
return (function (state_57615){
var state_val_57616 = (state_57615[(1)]);
if((state_val_57616 === (1))){
var state_57615__$1 = state_57615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57615__$1,(2),once_or_cleanup);
} else {
if((state_val_57616 === (2))){
var inst_57612 = (state_57615[(2)]);
var inst_57613 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_57615__$1 = (function (){var statearr_57623 = state_57615;
(statearr_57623[(7)] = inst_57612);

return statearr_57623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57615__$1,inst_57613);
} else {
return null;
}
}
});})(c__55202__auto___58261,buf,chan,event_fn))
;
return ((function (switch__55026__auto__,c__55202__auto___58261,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__55027__auto__ = null;
var shadow$dom$state_machine__55027__auto____0 = (function (){
var statearr_57625 = [null,null,null,null,null,null,null,null];
(statearr_57625[(0)] = shadow$dom$state_machine__55027__auto__);

(statearr_57625[(1)] = (1));

return statearr_57625;
});
var shadow$dom$state_machine__55027__auto____1 = (function (state_57615){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_57615);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e57626){if((e57626 instanceof Object)){
var ex__55030__auto__ = e57626;
var statearr_57627_58266 = state_57615;
(statearr_57627_58266[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58267 = state_57615;
state_57615 = G__58267;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
shadow$dom$state_machine__55027__auto__ = function(state_57615){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55027__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55027__auto____1.call(this,state_57615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55027__auto____0;
shadow$dom$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55027__auto____1;
return shadow$dom$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___58261,buf,chan,event_fn))
})();
var state__55204__auto__ = (function (){var statearr_57630 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_57630[(6)] = c__55202__auto___58261);

return statearr_57630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___58261,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
