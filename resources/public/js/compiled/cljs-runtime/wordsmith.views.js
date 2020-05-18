goog.provide('wordsmith.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wordsmith.subs');
goog.require('wordsmith.events');
var module$node_modules$react_konva$lib$ReactKonva=shadow.js.require("module$node_modules$react_konva$lib$ReactKonva", {});
wordsmith.views.canvas_STAR_ = (function wordsmith$views$canvas_STAR_(){
var words = (function (){var G__42592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.subs","words","wordsmith.subs/words",-795180703)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42592) : re_frame.core.subscribe.call(null,G__42592));
})();
var window = (function (){var G__42593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.subs","window","wordsmith.subs/window",1066268342)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42593) : re_frame.core.subscribe.call(null,G__42593));
})();
return ((function (words,window){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Stage,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"stage",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(window)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(window))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Layer,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (words,window){
return (function wordsmith$views$canvas_STAR__$_iter__42594(s__42595){
return (new cljs.core.LazySeq(null,((function (words,window){
return (function (){
var s__42595__$1 = s__42595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42595__$1);
if(temp__5735__auto__){
var s__42595__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42595__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42595__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42597 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42596 = (0);
while(true){
if((i__42596 < size__4522__auto__)){
var vec__42598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42596);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42598,(0),null);
var map__42601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42598,(1),null);
var map__42601__$1 = (((((!((map__42601 == null))))?(((((map__42601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42601):map__42601);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
cljs.core.chunk_append(b__42597,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),word,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (28)),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"courier new",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(28)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__42614 = (i__42596 + (1));
i__42596 = G__42614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42597),wordsmith$views$canvas_STAR__$_iter__42594(cljs.core.chunk_rest(s__42595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42597),null);
}
} else {
var vec__42603 = cljs.core.first(s__42595__$2);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42603,(0),null);
var map__42606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42603,(1),null);
var map__42606__$1 = (((((!((map__42606 == null))))?(((((map__42606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42606):map__42606);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42606__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42606__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42606__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42606__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_konva$lib$ReactKonva.Text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),word,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (28)),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"courier new",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(28)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wordsmith$views$canvas_STAR__$_iter__42594(cljs.core.rest(s__42595__$2)));
}
} else {
return null;
}
break;
}
});})(words,window))
,null,null));
});})(words,window))
;
return iter__4523__auto__(cljs.core.deref(words));
})())], null)], null);
});
;})(words,window))
});
wordsmith.views.anim_loop = (function wordsmith$views$anim_loop(){
var G__42608_42615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","anim-step","wordsmith.events/anim-step",-720585944)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42608_42615) : re_frame.core.dispatch.call(null,G__42608_42615));

return requestAnimationFrame(wordsmith.views.anim_loop);
});
wordsmith.views.canvas = cljs.core.with_meta(wordsmith.views.canvas_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return requestAnimationFrame(wordsmith.views.anim_loop);
})], null));
wordsmith.views.main_panel = (function wordsmith$views$main_panel(){
var word = (function (){var G__42609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.subs","word","wordsmith.subs/word",194301675)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42609) : re_frame.core.subscribe.call(null,G__42609));
})();
var error_QMARK_ = (function (){var G__42610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.subs","error?","wordsmith.subs/error?",-886434495)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42610) : re_frame.core.subscribe.call(null,G__42610));
})();
return ((function (word,error_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wordsmith.views.canvas], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"How many words can you think of?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(error_QMARK_))?"error":null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(word),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"spellcheck","spellcheck",-508643726),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (word,error_QMARK_){
return (function (e){
var G__42611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","set-word","wordsmith.events/set-word",-1152203500),e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42611) : re_frame.core.dispatch.call(null,G__42611));
});})(word,error_QMARK_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (word,error_QMARK_){
return (function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key," ")))){
e.preventDefault();

var G__42612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","try-word","wordsmith.events/try-word",1630095468)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42612) : re_frame.core.dispatch.call(null,G__42612));
} else {
return null;
}
});})(word,error_QMARK_))
], null)], null)], null);
});
;})(word,error_QMARK_))
});

//# sourceMappingURL=wordsmith.views.js.map
