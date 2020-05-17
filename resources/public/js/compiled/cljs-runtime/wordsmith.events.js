goog.provide('wordsmith.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wordsmith.db');
goog.require('day8.re_frame.tracing');
goog.require('clojure.string');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","initialize-db","wordsmith.events/initialize-db",-775332146),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__60829__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__60830__auto__ = wordsmith.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__60830__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__60830__auto__;
}catch (e60921){var e = e60921;
throw e;
}}):(function (_,___$1){
return wordsmith.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","set-word","wordsmith.events/set-word",-1152203500),(function (p__60922,p__60923){
var map__60924 = p__60922;
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60925 = p__60923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60925,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60925,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word","word",-420123725),word),new cljs.core.Keyword(null,"error?","error?",-460689159),false)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","try-word","wordsmith.events/try-word",1630095468),(function (p__60933){
var map__60934 = p__60933;
var map__60934__$1 = (((((!((map__60934 == null))))?(((((map__60934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60934):map__60934);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"db","db",993250759));
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db)) == null)) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","add-word","wordsmith.events/add-word",-358045874)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.assoc,new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10)) - (5)),new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-10))], null)], 0))),new cljs.core.Keyword(null,"error?","error?",-460689159),true)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","add-word","wordsmith.events/add-word",-358045874),(function (p__60940){
var map__60941 = p__60940;
var map__60941__$1 = (((((!((map__60941 == null))))?(((((map__60941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60941):map__60941);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"db","db",993250759));
var word = clojure.string.trim(new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.assoc,word,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(65),new cljs.core.Keyword(null,"y","y",-1757859776),(120),new cljs.core.Keyword(null,"vx","vx",-1685168462),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((4)),new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null)),new cljs.core.Keyword(null,"word","word",-420123725),"")], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","window-resized","wordsmith.events/window-resized",-390773337),(function (p__60947){
var map__60948 = p__60947;
var map__60948__$1 = (((((!((map__60948 == null))))?(((((map__60948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60948):map__60948);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"width","width",-384071477)], null),window.innerWidth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"height","height",1025178622)], null),window.innerHeight)], null);
}));
wordsmith.events.velocity = (function wordsmith$events$velocity(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(v,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(v)));
});
wordsmith.events.gravity = (function wordsmith$events$gravity(p__60950,m,k,v){
var map__60951 = p__60950;
var map__60951__$1 = (((((!((map__60951 == null))))?(((((map__60951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60951):map__60951);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"g","g",1738089905));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.update.cljs$core$IFn$_invoke$arity$4(v,new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._PLUS_,g));
});
wordsmith.events.friction = (function wordsmith$events$friction(p__60953,m,wk,p__60954){
var map__60955 = p__60953;
var map__60955__$1 = (((((!((map__60955 == null))))?(((((map__60955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60955):map__60955);
var window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60955__$1,new cljs.core.Keyword(null,"window","window",724519534));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60955__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var map__60956 = p__60954;
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var v = map__60956__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,wk,(function (){var G__60959 = v;
var G__60959__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(window)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60959,new cljs.core.Keyword(null,"vx","vx",-1685168462),cljs.core._STAR_,k):G__60959);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(window))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60959__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._STAR_,k);
} else {
return G__60959__$1;
}
})());
});
wordsmith.events.border = (function wordsmith$events$border(p__60960,m,k,p__60961){
var map__60962 = p__60960;
var map__60962__$1 = (((((!((map__60962 == null))))?(((((map__60962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60962):map__60962);
var window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword(null,"window","window",724519534));
var cr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword(null,"cr","cr",-1019028853));
var map__60963 = p__60961;
var map__60963__$1 = (((((!((map__60963 == null))))?(((((map__60963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60963):map__60963);
var v = map__60963__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__60970 = window;
var map__60970__$1 = (((((!((map__60970 == null))))?(((((map__60970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60970):map__60970);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__60976 = v;
var G__60976__$1 = (((x > width))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__60976,new cljs.core.Keyword(null,"vx","vx",-1685168462),((vx * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),width], 0)):G__60976);
var G__60976__$2 = (((y > height))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__60976__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997),((vy * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),height], 0)):G__60976__$1);
var G__60976__$3 = (((x < (0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__60976__$2,new cljs.core.Keyword(null,"vx","vx",-1685168462),((vx * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(0)], 0)):G__60976__$2);
if((y < (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__60976__$3,new cljs.core.Keyword(null,"vy","vy",-2018509997),((vy * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0)], 0));
} else {
return G__60976__$3;
}
})());
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","anim-step","wordsmith.events/anim-step",-720585944),(function (p__60981){
var map__60982 = p__60981;
var map__60982__$1 = (((((!((map__60982 == null))))?(((((map__60982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60982):map__60982);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"db","db",993250759));
var words = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wordsmith.events.border,db),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce_kv(wordsmith.events.velocity,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wordsmith.events.friction,db),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wordsmith.events.gravity,db),cljs.core.PersistentArrayMap.EMPTY,words)))))], null);
}));

//# sourceMappingURL=wordsmith.events.js.map
