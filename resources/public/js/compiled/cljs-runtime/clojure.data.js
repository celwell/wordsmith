goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__38954){
var vec__38955 = p__38954;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38955,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__38960 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38960,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38960,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38960,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__38971 = arguments.length;
switch (G__38971) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__38983_39144 = clojure.data.equality_partition;
var G__38984_39145 = "null";
var G__38985_39146 = ((function (G__38983_39144,G__38984_39145){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38983_39144,G__38984_39145))
;
goog.object.set(G__38983_39144,G__38984_39145,G__38985_39146);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__38986_39157 = clojure.data.equality_partition;
var G__38987_39158 = "string";
var G__38988_39159 = ((function (G__38986_39157,G__38987_39158){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38986_39157,G__38987_39158))
;
goog.object.set(G__38986_39157,G__38987_39158,G__38988_39159);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__38991_39162 = clojure.data.equality_partition;
var G__38992_39163 = "number";
var G__38993_39164 = ((function (G__38991_39162,G__38992_39163){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38991_39162,G__38992_39163))
;
goog.object.set(G__38991_39162,G__38992_39163,G__38993_39164);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__38997_39170 = clojure.data.equality_partition;
var G__38998_39171 = "array";
var G__38999_39172 = ((function (G__38997_39170,G__38998_39171){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__38997_39170,G__38998_39171))
;
goog.object.set(G__38997_39170,G__38998_39171,G__38999_39172);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39002_39178 = clojure.data.equality_partition;
var G__39004_39179 = "function";
var G__39005_39180 = ((function (G__39002_39178,G__39004_39179){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39002_39178,G__39004_39179))
;
goog.object.set(G__39002_39178,G__39004_39179,G__39005_39180);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39008_39183 = clojure.data.equality_partition;
var G__39009_39184 = "boolean";
var G__39010_39185 = ((function (G__39008_39183,G__39009_39184){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39008_39183,G__39009_39184))
;
goog.object.set(G__39008_39183,G__39009_39184,G__39010_39185);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39013_39193 = clojure.data.equality_partition;
var G__39014_39194 = "_";
var G__39015_39195 = ((function (G__39013_39193,G__39014_39194){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__39013_39193,G__39014_39194))
;
goog.object.set(G__39013_39193,G__39014_39194,G__39015_39195);
goog.object.set(clojure.data.Diff,"null",true);

var G__39033_39209 = clojure.data.diff_similar;
var G__39034_39210 = "null";
var G__39035_39211 = ((function (G__39033_39209,G__39034_39210){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39033_39209,G__39034_39210))
;
goog.object.set(G__39033_39209,G__39034_39210,G__39035_39211);

goog.object.set(clojure.data.Diff,"string",true);

var G__39038_39214 = clojure.data.diff_similar;
var G__39039_39215 = "string";
var G__39040_39216 = ((function (G__39038_39214,G__39039_39215){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39038_39214,G__39039_39215))
;
goog.object.set(G__39038_39214,G__39039_39215,G__39040_39216);

goog.object.set(clojure.data.Diff,"number",true);

var G__39043_39221 = clojure.data.diff_similar;
var G__39044_39222 = "number";
var G__39045_39223 = ((function (G__39043_39221,G__39044_39222){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39043_39221,G__39044_39222))
;
goog.object.set(G__39043_39221,G__39044_39222,G__39045_39223);

goog.object.set(clojure.data.Diff,"array",true);

var G__39051_39232 = clojure.data.diff_similar;
var G__39052_39233 = "array";
var G__39053_39234 = ((function (G__39051_39232,G__39052_39233){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__39051_39232,G__39052_39233))
;
goog.object.set(G__39051_39232,G__39052_39233,G__39053_39234);

goog.object.set(clojure.data.Diff,"function",true);

var G__39059_39241 = clojure.data.diff_similar;
var G__39060_39242 = "function";
var G__39061_39243 = ((function (G__39059_39241,G__39060_39242){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39059_39241,G__39060_39242))
;
goog.object.set(G__39059_39241,G__39060_39242,G__39061_39243);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39064_39247 = clojure.data.diff_similar;
var G__39065_39248 = "boolean";
var G__39066_39249 = ((function (G__39064_39247,G__39065_39248){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39064_39247,G__39065_39248))
;
goog.object.set(G__39064_39247,G__39065_39248,G__39066_39249);

goog.object.set(clojure.data.Diff,"_",true);

var G__39069_39257 = clojure.data.diff_similar;
var G__39070_39258 = "_";
var G__39071_39259 = ((function (G__39069_39257,G__39070_39258){
return (function (a,b){
var fexpr__39073 = (function (){var G__39074 = clojure.data.equality_partition(a);
var G__39074__$1 = (((G__39074 instanceof cljs.core.Keyword))?G__39074.fqn:null);
switch (G__39074__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39074__$1)].join('')));

}
})();
return (fexpr__39073.cljs$core$IFn$_invoke$arity$2 ? fexpr__39073.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__39073.call(null,a,b));
});})(G__39069_39257,G__39070_39258))
;
goog.object.set(G__39069_39257,G__39070_39258,G__39071_39259);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
