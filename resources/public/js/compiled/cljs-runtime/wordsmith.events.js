goog.provide('wordsmith.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wordsmith.db');
goog.require('clojure.string');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","initialize-db","wordsmith.events/initialize-db",-775332146),(function (_,___$1){
return wordsmith.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","set-word","wordsmith.events/set-word",-1152203500),(function (p__42541,p__42542){
var map__42543 = p__42541;
var map__42543__$1 = (((((!((map__42543 == null))))?(((((map__42543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42543):map__42543);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42543__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42544 = p__42542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42544,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42544,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word","word",-420123725),word),new cljs.core.Keyword(null,"error?","error?",-460689159),false)], null);
}));
wordsmith.events.word_already_exists = (function wordsmith$events$word_already_exists(db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10)) - (5)),new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-10))], null)),new cljs.core.Keyword(null,"error?","error?",-460689159),true);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","try-word","wordsmith.events/try-word",1630095468),(function (p__42548){
var map__42549 = p__42548;
var map__42549__$1 = (((((!((map__42549 == null))))?(((((map__42549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42549):map__42549);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"db","db",993250759));
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db)) == null)) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wordsmith.events","add-word","wordsmith.events/add-word",-358045874)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),wordsmith.events.word_already_exists(db)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","add-word","wordsmith.events/add-word",-358045874),(function (p__42551){
var map__42552 = p__42551;
var map__42552__$1 = (((((!((map__42552 == null))))?(((((map__42552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42552):map__42552);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"db","db",993250759));
var word = clojure.string.trim(new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.assoc,word,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(65),new cljs.core.Keyword(null,"y","y",-1757859776),(120),new cljs.core.Keyword(null,"vx","vx",-1685168462),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((4)),new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core.rand.cljs$core$IFn$_invoke$arity$1((-1))], null)),new cljs.core.Keyword(null,"word","word",-420123725),"")], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","window-resized","wordsmith.events/window-resized",-390773337),(function (p__42554){
var map__42555 = p__42554;
var map__42555__$1 = (((((!((map__42555 == null))))?(((((map__42555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42555):map__42555);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"width","width",-384071477)], null),window.innerWidth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"height","height",1025178622)], null),window.innerHeight)], null);
}));
wordsmith.events.velocity = (function wordsmith$events$velocity(p__42557){
var map__42558 = p__42557;
var map__42558__$1 = (((((!((map__42558 == null))))?(((((map__42558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42558):map__42558);
var word = map__42558__$1;
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42558__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42558__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(word,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,vx),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,vy);
});
wordsmith.events.gravity = (function wordsmith$events$gravity(p__42560,word){
var map__42561 = p__42560;
var map__42561__$1 = (((((!((map__42561 == null))))?(((((map__42561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42561):map__42561);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561__$1,new cljs.core.Keyword(null,"g","g",1738089905));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(word,new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._PLUS_,g);
});
wordsmith.events.friction = (function wordsmith$events$friction(p__42563,p__42564){
var map__42565 = p__42563;
var map__42565__$1 = (((((!((map__42565 == null))))?(((((map__42565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42565):map__42565);
var window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42565__$1,new cljs.core.Keyword(null,"window","window",724519534));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42565__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var map__42566 = p__42564;
var map__42566__$1 = (((((!((map__42566 == null))))?(((((map__42566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42566):map__42566);
var word = map__42566__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__42569 = window;
var map__42569__$1 = (((((!((map__42569 == null))))?(((((map__42569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42569):map__42569);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42569__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42569__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__42571 = word;
var G__42571__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,height))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__42571,new cljs.core.Keyword(null,"vx","vx",-1685168462),cljs.core._STAR_,k):G__42571);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,width)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__42571__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._STAR_,k);
} else {
return G__42571__$1;
}
});
wordsmith.events.border = (function wordsmith$events$border(p__42572,p__42573){
var map__42574 = p__42572;
var map__42574__$1 = (((((!((map__42574 == null))))?(((((map__42574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42574):map__42574);
var window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574__$1,new cljs.core.Keyword(null,"window","window",724519534));
var cr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574__$1,new cljs.core.Keyword(null,"cr","cr",-1019028853));
var map__42575 = p__42573;
var map__42575__$1 = (((((!((map__42575 == null))))?(((((map__42575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42575):map__42575);
var word = map__42575__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42575__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42575__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42575__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42575__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var map__42578 = window;
var map__42578__$1 = (((((!((map__42578 == null))))?(((((map__42578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42578):map__42578);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42578__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42578__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__42580 = word;
var G__42580__$1 = (((x > width))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__42580,new cljs.core.Keyword(null,"vx","vx",-1685168462),((vx * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),width], 0)):G__42580);
var G__42580__$2 = (((y > height))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__42580__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997),((vy * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),height], 0)):G__42580__$1);
var G__42580__$3 = (((x < (0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__42580__$2,new cljs.core.Keyword(null,"vx","vx",-1685168462),((vx * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(0)], 0)):G__42580__$2);
if((y < (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__42580__$3,new cljs.core.Keyword(null,"vy","vy",-2018509997),((vy * (-1)) * cr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0)], 0));
} else {
return G__42580__$3;
}
});
wordsmith.events.fmap = (function wordsmith$events$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(function (){var iter__4523__auto__ = (function wordsmith$events$fmap_$_iter__42581(s__42582){
return (new cljs.core.LazySeq(null,(function (){
var s__42582__$1 = s__42582;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42582__$1);
if(temp__5735__auto__){
var s__42582__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42582__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42582__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42584 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42583 = (0);
while(true){
if((i__42583 < size__4522__auto__)){
var vec__42585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42583);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42585,(1),null);
cljs.core.chunk_append(b__42584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__42613 = (i__42583 + (1));
i__42583 = G__42613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42584),wordsmith$events$fmap_$_iter__42581(cljs.core.chunk_rest(s__42582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42584),null);
}
} else {
var vec__42588 = cljs.core.first(s__42582__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42588,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),wordsmith$events$fmap_$_iter__42581(cljs.core.rest(s__42582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("wordsmith.events","anim-step","wordsmith.events/anim-step",-720585944),(function (db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001)], null),(function (p1__42591_SHARP_){
return wordsmith.events.fmap(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wordsmith.events.border,db),wordsmith.events.fmap(wordsmith.events.velocity,wordsmith.events.fmap(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wordsmith.events.friction,db),wordsmith.events.fmap(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(wordsmith.events.gravity,db),p1__42591_SHARP_))));
}));
}));

//# sourceMappingURL=wordsmith.events.js.map
