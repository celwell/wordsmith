goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__52183 = arguments.length;
switch (G__52183) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__52203 = cljs.core.seq(Object.keys(localStorage));
var chunk__52204 = null;
var count__52205 = (0);
var i__52206 = (0);
while(true){
if((i__52206 < count__52205)){
var k = chunk__52204.cljs$core$IIndexed$_nth$arity$2(null,i__52206);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52277 = seq__52203;
var G__52278 = chunk__52204;
var G__52279 = count__52205;
var G__52280 = (i__52206 + (1));
seq__52203 = G__52277;
chunk__52204 = G__52278;
count__52205 = G__52279;
i__52206 = G__52280;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52203);
if(temp__5735__auto__){
var seq__52203__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52203__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52203__$1);
var G__52287 = cljs.core.chunk_rest(seq__52203__$1);
var G__52288 = c__4550__auto__;
var G__52289 = cljs.core.count(c__4550__auto__);
var G__52290 = (0);
seq__52203 = G__52287;
chunk__52204 = G__52288;
count__52205 = G__52289;
i__52206 = G__52290;
continue;
} else {
var k = cljs.core.first(seq__52203__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52295 = cljs.core.next(seq__52203__$1);
var G__52296 = null;
var G__52297 = (0);
var G__52298 = (0);
seq__52203 = G__52295;
chunk__52204 = G__52296;
count__52205 = G__52297;
i__52206 = G__52298;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
