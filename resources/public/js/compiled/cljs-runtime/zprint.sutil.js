goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,cljs.core.next(sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__49201 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49201) : zthing_QMARK_.call(null,G__49201));
})())){
return i;
} else {
var G__49611 = cljs.core.next(sloc);
var G__49612 = (i + (1));
sloc = G__49611;
i = G__49612;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__49319 = arguments.length;
switch (G__49319) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
});

zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2;

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__49332,pair_seq,ns){
var map__49392 = p__49332;
var map__49392__$1 = (((((!((map__49392 == null))))?(((((map__49392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49392):map__49392);
var map_options = map__49392__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4120__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())){
var strip_ns = ((function (map__49392,map__49392__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_){
return (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});})(map__49392,map__49392__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_))
;
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__49464 = cljs.core.first(pair_seq__$1);
var seq__49465 = cljs.core.seq(vec__49464);
var first__49466 = cljs.core.first(seq__49465);
var seq__49465__$1 = cljs.core.next(seq__49465);
var k = first__49466;
var rest_of_pair = seq__49465__$1;
var pair = vec__49464;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",ns__$1].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__49665 = ns__$1;
var G__49666 = cljs.core.next(pair_seq__$1);
var G__49667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__49665;
pair_seq__$1 = G__49666;
out = G__49667;
continue;
} else {
return null;
}
} else {
var G__49668 = current_ns;
var G__49669 = cljs.core.next(pair_seq__$1);
var G__49670 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__49668;
pair_seq__$1 = G__49669;
out = G__49670;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__49671 = ns__$1;
var G__49673 = cljs.core.next(pair_seq__$1);
var G__49675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__49671;
pair_seq__$1 = G__49673;
out = G__49675;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__49477 = zprint.zfns.zstring;
var znumstr_orig_val__49478 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__49479 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__49480 = zprint.zfns.zsexpr;
var zseqnws_orig_val__49481 = zprint.zfns.zseqnws;
var zmap_right_orig_val__49482 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__49483 = zprint.zfns.zfocus_style;
var zfirst_orig_val__49484 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__49485 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__49486 = zprint.zfns.zsecond;
var zthird_orig_val__49487 = zprint.zfns.zthird;
var zfourth_orig_val__49488 = zprint.zfns.zfourth;
var znthnext_orig_val__49489 = zprint.zfns.znthnext;
var zcount_orig_val__49490 = zprint.zfns.zcount;
var zmap_orig_val__49491 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__49492 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__49493 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__49494 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__49495 = zprint.zfns.zfocus;
var zfind_path_orig_val__49496 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__49497 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__49498 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__49499 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__49500 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__49501 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__49502 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__49503 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__49504 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__49505 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__49506 = zprint.zfns.ztag;
var zlast_orig_val__49507 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__49508 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__49509 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__49510 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__49511 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__49512 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__49513 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__49514 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__49515 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__49516 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__49517 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__49518 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__49519 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__49520 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__49521 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__49522 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__49523 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__49524 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__49525 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__49526 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__49527 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__49528 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__49529 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__49530 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__49531 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__49532 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__49533 = zprint.zfns.zfind;
var ztake_append_orig_val__49534 = zprint.zfns.ztake_append;
var zstring_temp_val__49535 = zprint.sutil.sstring;
var znumstr_temp_val__49536 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__49537 = cljs.core.constantly(false);
var zsexpr_temp_val__49538 = cljs.core.identity;
var zseqnws_temp_val__49539 = zprint.sutil.sseqnws;
var zmap_right_temp_val__49540 = zprint.sutil.smap_right;
var zfocus_style_temp_val__49541 = zprint.sutil.sfocus_style;
var zfirst_temp_val__49542 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__49543 = zprint.sutil.sfirst;
var zsecond_temp_val__49544 = zprint.sutil.ssecond;
var zthird_temp_val__49545 = zprint.sutil.sthird;
var zfourth_temp_val__49546 = zprint.sutil.sfourth;
var znthnext_temp_val__49547 = zprint.sutil.snthnext;
var zcount_temp_val__49548 = zprint.sutil.scount;
var zmap_temp_val__49549 = zprint.sutil.smap;
var zmap_w_nl_temp_val__49550 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__49551 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__49552 = cljs.core.fn_QMARK_;
var zfocus_temp_val__49553 = zprint.sutil.sfocus;
var zfind_path_temp_val__49554 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__49555 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__49556 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__49557 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__49558 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__49559 = cljs.core.constantly(false);
var zset_QMARK__temp_val__49560 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__49561 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__49562 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__49563 = cljs.core.constantly(false);
var ztag_temp_val__49564 = cljs.core.constantly(null);
var zlast_temp_val__49565 = zprint.sutil.slast;
var zarray_QMARK__temp_val__49566 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__49567 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__49568 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__49569 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__49570 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__49571 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__49572 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__49573 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__49574 = cljs.core.constantly(false);
var zmap_all_temp_val__49575 = cljs.core.map;
var zfuture_QMARK__temp_val__49576 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__49577 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__49578 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__49579 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__49580 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__49581 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__49582 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__49583 = null;
var zdotdotdot_temp_val__49584 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__49585 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__49586 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__49587 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__49588 = cljs.core.constantly(false);
var zlift_ns_temp_val__49589 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__49590 = cljs.core.constantly(false);
var zfind_temp_val__49591 = zprint.sutil.sfind;
var ztake_append_temp_val__49592 = zprint.sutil.stake_append;
zprint.zfns.zstring = zstring_temp_val__49535;

zprint.zfns.znumstr = znumstr_temp_val__49536;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__49537;

zprint.zfns.zsexpr = zsexpr_temp_val__49538;

zprint.zfns.zseqnws = zseqnws_temp_val__49539;

zprint.zfns.zmap_right = zmap_right_temp_val__49540;

zprint.zfns.zfocus_style = zfocus_style_temp_val__49541;

zprint.zfns.zfirst = zfirst_temp_val__49542;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__49543;

zprint.zfns.zsecond = zsecond_temp_val__49544;

zprint.zfns.zthird = zthird_temp_val__49545;

zprint.zfns.zfourth = zfourth_temp_val__49546;

zprint.zfns.znthnext = znthnext_temp_val__49547;

zprint.zfns.zcount = zcount_temp_val__49548;

zprint.zfns.zmap = zmap_temp_val__49549;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__49550;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__49551;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__49552;

zprint.zfns.zfocus = zfocus_temp_val__49553;

zprint.zfns.zfind_path = zfind_path_temp_val__49554;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__49555;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__49556;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__49557;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__49558;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__49559;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__49560;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__49561;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__49562;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__49563;

zprint.zfns.ztag = ztag_temp_val__49564;

zprint.zfns.zlast = zlast_temp_val__49565;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__49566;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__49567;

zprint.zfns.zderef = zderef_temp_val__49568;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__49569;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__49570;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__49571;

zprint.zfns.zexpandarray = zexpandarray_temp_val__49572;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__49573;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__49574;

zprint.zfns.zmap_all = zmap_all_temp_val__49575;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__49576;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__49577;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__49578;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__49579;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__49580;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__49581;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__49582;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__49583;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__49584;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__49585;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__49586;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__49587;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__49588;

zprint.zfns.zlift_ns = zlift_ns_temp_val__49589;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__49590;

zprint.zfns.zfind = zfind_temp_val__49591;

zprint.zfns.ztake_append = ztake_append_temp_val__49592;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__49534;

zprint.zfns.zfind = zfind_orig_val__49533;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__49532;

zprint.zfns.zlift_ns = zlift_ns_orig_val__49531;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__49530;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__49529;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__49528;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__49527;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__49526;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__49525;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__49524;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__49523;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__49522;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__49521;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__49520;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__49519;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__49518;

zprint.zfns.zmap_all = zmap_all_orig_val__49517;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__49516;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__49515;

zprint.zfns.zexpandarray = zexpandarray_orig_val__49514;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__49513;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__49512;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__49511;

zprint.zfns.zderef = zderef_orig_val__49510;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__49509;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__49508;

zprint.zfns.zlast = zlast_orig_val__49507;

zprint.zfns.ztag = ztag_orig_val__49506;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__49505;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__49504;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__49503;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__49502;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__49501;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__49500;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__49499;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__49498;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__49497;

zprint.zfns.zfind_path = zfind_path_orig_val__49496;

zprint.zfns.zfocus = zfocus_orig_val__49495;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__49494;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__49493;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__49492;

zprint.zfns.zmap = zmap_orig_val__49491;

zprint.zfns.zcount = zcount_orig_val__49490;

zprint.zfns.znthnext = znthnext_orig_val__49489;

zprint.zfns.zfourth = zfourth_orig_val__49488;

zprint.zfns.zthird = zthird_orig_val__49487;

zprint.zfns.zsecond = zsecond_orig_val__49486;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__49485;

zprint.zfns.zfirst = zfirst_orig_val__49484;

zprint.zfns.zfocus_style = zfocus_style_orig_val__49483;

zprint.zfns.zmap_right = zmap_right_orig_val__49482;

zprint.zfns.zseqnws = zseqnws_orig_val__49481;

zprint.zfns.zsexpr = zsexpr_orig_val__49480;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__49479;

zprint.zfns.znumstr = znumstr_orig_val__49478;

zprint.zfns.zstring = zstring_orig_val__49477;
}});

//# sourceMappingURL=zprint.sutil.js.map
