goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__55260 = arguments.length;
switch (G__55260) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55261 = (function (f,blockable,meta55262){
this.f = f;
this.blockable = blockable;
this.meta55262 = meta55262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55263,meta55262__$1){
var self__ = this;
var _55263__$1 = this;
return (new cljs.core.async.t_cljs$core$async55261(self__.f,self__.blockable,meta55262__$1));
});

cljs.core.async.t_cljs$core$async55261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55263){
var self__ = this;
var _55263__$1 = this;
return self__.meta55262;
});

cljs.core.async.t_cljs$core$async55261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async55261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async55261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async55261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta55262","meta55262",1884459452,null)], null);
});

cljs.core.async.t_cljs$core$async55261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55261";

cljs.core.async.t_cljs$core$async55261.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async55261");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55261.
 */
cljs.core.async.__GT_t_cljs$core$async55261 = (function cljs$core$async$__GT_t_cljs$core$async55261(f__$1,blockable__$1,meta55262){
return (new cljs.core.async.t_cljs$core$async55261(f__$1,blockable__$1,meta55262));
});

}

return (new cljs.core.async.t_cljs$core$async55261(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__55266 = arguments.length;
switch (G__55266) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__55268 = arguments.length;
switch (G__55268) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__55270 = arguments.length;
switch (G__55270) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_56700 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56700) : fn1.call(null,val_56700));
} else {
cljs.core.async.impl.dispatch.run(((function (val_56700,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56700) : fn1.call(null,val_56700));
});})(val_56700,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__55272 = arguments.length;
switch (G__55272) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___56708 = n;
var x_56709 = (0);
while(true){
if((x_56709 < n__4607__auto___56708)){
(a[x_56709] = x_56709);

var G__56710 = (x_56709 + (1));
x_56709 = G__56710;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55273 = (function (flag,meta55274){
this.flag = flag;
this.meta55274 = meta55274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_55275,meta55274__$1){
var self__ = this;
var _55275__$1 = this;
return (new cljs.core.async.t_cljs$core$async55273(self__.flag,meta55274__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async55273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_55275){
var self__ = this;
var _55275__$1 = this;
return self__.meta55274;
});})(flag))
;

cljs.core.async.t_cljs$core$async55273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async55273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async55273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async55273.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta55274","meta55274",692208686,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async55273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55273";

cljs.core.async.t_cljs$core$async55273.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async55273");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55273.
 */
cljs.core.async.__GT_t_cljs$core$async55273 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async55273(flag__$1,meta55274){
return (new cljs.core.async.t_cljs$core$async55273(flag__$1,meta55274));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async55273(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55276 = (function (flag,cb,meta55277){
this.flag = flag;
this.cb = cb;
this.meta55277 = meta55277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55278,meta55277__$1){
var self__ = this;
var _55278__$1 = this;
return (new cljs.core.async.t_cljs$core$async55276(self__.flag,self__.cb,meta55277__$1));
});

cljs.core.async.t_cljs$core$async55276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55278){
var self__ = this;
var _55278__$1 = this;
return self__.meta55277;
});

cljs.core.async.t_cljs$core$async55276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async55276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async55276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async55276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta55277","meta55277",-675994822,null)], null);
});

cljs.core.async.t_cljs$core$async55276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55276";

cljs.core.async.t_cljs$core$async55276.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async55276");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55276.
 */
cljs.core.async.__GT_t_cljs$core$async55276 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async55276(flag__$1,cb__$1,meta55277){
return (new cljs.core.async.t_cljs$core$async55276(flag__$1,cb__$1,meta55277));
});

}

return (new cljs.core.async.t_cljs$core$async55276(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55279_SHARP_){
var G__55281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55279_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55281) : fret.call(null,G__55281));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55280_SHARP_){
var G__55282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55280_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55282) : fret.call(null,G__55282));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56743 = (i + (1));
i = G__56743;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56749 = arguments.length;
var i__4731__auto___56750 = (0);
while(true){
if((i__4731__auto___56750 < len__4730__auto___56749)){
args__4736__auto__.push((arguments[i__4731__auto___56750]));

var G__56751 = (i__4731__auto___56750 + (1));
i__4731__auto___56750 = G__56751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__55285){
var map__55286 = p__55285;
var map__55286__$1 = (((((!((map__55286 == null))))?(((((map__55286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55286):map__55286);
var opts = map__55286__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq55283){
var G__55284 = cljs.core.first(seq55283);
var seq55283__$1 = cljs.core.next(seq55283);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55284,seq55283__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__55289 = arguments.length;
switch (G__55289) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__55202__auto___56765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___56765){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___56765){
return (function (state_55313){
var state_val_55314 = (state_55313[(1)]);
if((state_val_55314 === (7))){
var inst_55309 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
var statearr_55315_56766 = state_55313__$1;
(statearr_55315_56766[(2)] = inst_55309);

(statearr_55315_56766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (1))){
var state_55313__$1 = state_55313;
var statearr_55316_56767 = state_55313__$1;
(statearr_55316_56767[(2)] = null);

(statearr_55316_56767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (4))){
var inst_55292 = (state_55313[(7)]);
var inst_55292__$1 = (state_55313[(2)]);
var inst_55293 = (inst_55292__$1 == null);
var state_55313__$1 = (function (){var statearr_55317 = state_55313;
(statearr_55317[(7)] = inst_55292__$1);

return statearr_55317;
})();
if(cljs.core.truth_(inst_55293)){
var statearr_55318_56770 = state_55313__$1;
(statearr_55318_56770[(1)] = (5));

} else {
var statearr_55319_56772 = state_55313__$1;
(statearr_55319_56772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (13))){
var state_55313__$1 = state_55313;
var statearr_55320_56773 = state_55313__$1;
(statearr_55320_56773[(2)] = null);

(statearr_55320_56773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (6))){
var inst_55292 = (state_55313[(7)]);
var state_55313__$1 = state_55313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55313__$1,(11),to,inst_55292);
} else {
if((state_val_55314 === (3))){
var inst_55311 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55313__$1,inst_55311);
} else {
if((state_val_55314 === (12))){
var state_55313__$1 = state_55313;
var statearr_55321_56779 = state_55313__$1;
(statearr_55321_56779[(2)] = null);

(statearr_55321_56779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (2))){
var state_55313__$1 = state_55313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55313__$1,(4),from);
} else {
if((state_val_55314 === (11))){
var inst_55302 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
if(cljs.core.truth_(inst_55302)){
var statearr_55322_56780 = state_55313__$1;
(statearr_55322_56780[(1)] = (12));

} else {
var statearr_55323_56781 = state_55313__$1;
(statearr_55323_56781[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (9))){
var state_55313__$1 = state_55313;
var statearr_55324_56783 = state_55313__$1;
(statearr_55324_56783[(2)] = null);

(statearr_55324_56783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (5))){
var state_55313__$1 = state_55313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55325_56787 = state_55313__$1;
(statearr_55325_56787[(1)] = (8));

} else {
var statearr_55326_56788 = state_55313__$1;
(statearr_55326_56788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (14))){
var inst_55307 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
var statearr_55327_56789 = state_55313__$1;
(statearr_55327_56789[(2)] = inst_55307);

(statearr_55327_56789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (10))){
var inst_55299 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
var statearr_55328_56790 = state_55313__$1;
(statearr_55328_56790[(2)] = inst_55299);

(statearr_55328_56790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (8))){
var inst_55296 = cljs.core.async.close_BANG_(to);
var state_55313__$1 = state_55313;
var statearr_55329_56791 = state_55313__$1;
(statearr_55329_56791[(2)] = inst_55296);

(statearr_55329_56791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___56765))
;
return ((function (switch__55026__auto__,c__55202__auto___56765){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_55330 = [null,null,null,null,null,null,null,null];
(statearr_55330[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_55330[(1)] = (1));

return statearr_55330;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_55313){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55313);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55331){if((e55331 instanceof Object)){
var ex__55030__auto__ = e55331;
var statearr_55332_56795 = state_55313;
(statearr_55332_56795[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56798 = state_55313;
state_55313 = G__56798;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_55313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_55313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___56765))
})();
var state__55204__auto__ = (function (){var statearr_55333 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55333[(6)] = c__55202__auto___56765);

return statearr_55333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___56765))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__55334){
var vec__55335 = p__55334;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(1),null);
var job = vec__55335;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__55202__auto___56812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___56812,res,vec__55335,v,p,job,jobs,results){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___56812,res,vec__55335,v,p,job,jobs,results){
return (function (state_55342){
var state_val_55343 = (state_55342[(1)]);
if((state_val_55343 === (1))){
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55342__$1,(2),res,v);
} else {
if((state_val_55343 === (2))){
var inst_55339 = (state_55342[(2)]);
var inst_55340 = cljs.core.async.close_BANG_(res);
var state_55342__$1 = (function (){var statearr_55344 = state_55342;
(statearr_55344[(7)] = inst_55339);

return statearr_55344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55342__$1,inst_55340);
} else {
return null;
}
}
});})(c__55202__auto___56812,res,vec__55335,v,p,job,jobs,results))
;
return ((function (switch__55026__auto__,c__55202__auto___56812,res,vec__55335,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0 = (function (){
var statearr_55345 = [null,null,null,null,null,null,null,null];
(statearr_55345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__);

(statearr_55345[(1)] = (1));

return statearr_55345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1 = (function (state_55342){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55342);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55346){if((e55346 instanceof Object)){
var ex__55030__auto__ = e55346;
var statearr_55347_56813 = state_55342;
(statearr_55347_56813[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56814 = state_55342;
state_55342 = G__56814;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = function(state_55342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1.call(this,state_55342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___56812,res,vec__55335,v,p,job,jobs,results))
})();
var state__55204__auto__ = (function (){var statearr_55348 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55348[(6)] = c__55202__auto___56812);

return statearr_55348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___56812,res,vec__55335,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__55349){
var vec__55350 = p__55349;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55350,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55350,(1),null);
var job = vec__55350;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___56815 = n;
var __56816 = (0);
while(true){
if((__56816 < n__4607__auto___56815)){
var G__55353_56817 = type;
var G__55353_56818__$1 = (((G__55353_56817 instanceof cljs.core.Keyword))?G__55353_56817.fqn:null);
switch (G__55353_56818__$1) {
case "compute":
var c__55202__auto___56820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56816,c__55202__auto___56820,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (__56816,c__55202__auto___56820,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async){
return (function (state_55366){
var state_val_55367 = (state_55366[(1)]);
if((state_val_55367 === (1))){
var state_55366__$1 = state_55366;
var statearr_55368_56827 = state_55366__$1;
(statearr_55368_56827[(2)] = null);

(statearr_55368_56827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55367 === (2))){
var state_55366__$1 = state_55366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55366__$1,(4),jobs);
} else {
if((state_val_55367 === (3))){
var inst_55364 = (state_55366[(2)]);
var state_55366__$1 = state_55366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55366__$1,inst_55364);
} else {
if((state_val_55367 === (4))){
var inst_55356 = (state_55366[(2)]);
var inst_55357 = process(inst_55356);
var state_55366__$1 = state_55366;
if(cljs.core.truth_(inst_55357)){
var statearr_55369_56829 = state_55366__$1;
(statearr_55369_56829[(1)] = (5));

} else {
var statearr_55370_56830 = state_55366__$1;
(statearr_55370_56830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55367 === (5))){
var state_55366__$1 = state_55366;
var statearr_55371_56832 = state_55366__$1;
(statearr_55371_56832[(2)] = null);

(statearr_55371_56832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55367 === (6))){
var state_55366__$1 = state_55366;
var statearr_55372_56833 = state_55366__$1;
(statearr_55372_56833[(2)] = null);

(statearr_55372_56833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55367 === (7))){
var inst_55362 = (state_55366[(2)]);
var state_55366__$1 = state_55366;
var statearr_55373_56835 = state_55366__$1;
(statearr_55373_56835[(2)] = inst_55362);

(statearr_55373_56835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__56816,c__55202__auto___56820,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async))
;
return ((function (__56816,switch__55026__auto__,c__55202__auto___56820,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0 = (function (){
var statearr_55374 = [null,null,null,null,null,null,null];
(statearr_55374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__);

(statearr_55374[(1)] = (1));

return statearr_55374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1 = (function (state_55366){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55366);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55375){if((e55375 instanceof Object)){
var ex__55030__auto__ = e55375;
var statearr_55376_56838 = state_55366;
(statearr_55376_56838[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56840 = state_55366;
state_55366 = G__56840;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = function(state_55366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1.call(this,state_55366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__;
})()
;})(__56816,switch__55026__auto__,c__55202__auto___56820,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async))
})();
var state__55204__auto__ = (function (){var statearr_55377 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55377[(6)] = c__55202__auto___56820);

return statearr_55377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(__56816,c__55202__auto___56820,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async))
);


break;
case "async":
var c__55202__auto___56842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56816,c__55202__auto___56842,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (__56816,c__55202__auto___56842,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async){
return (function (state_55390){
var state_val_55391 = (state_55390[(1)]);
if((state_val_55391 === (1))){
var state_55390__$1 = state_55390;
var statearr_55392_56845 = state_55390__$1;
(statearr_55392_56845[(2)] = null);

(statearr_55392_56845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (2))){
var state_55390__$1 = state_55390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55390__$1,(4),jobs);
} else {
if((state_val_55391 === (3))){
var inst_55388 = (state_55390[(2)]);
var state_55390__$1 = state_55390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55390__$1,inst_55388);
} else {
if((state_val_55391 === (4))){
var inst_55380 = (state_55390[(2)]);
var inst_55381 = async(inst_55380);
var state_55390__$1 = state_55390;
if(cljs.core.truth_(inst_55381)){
var statearr_55393_56849 = state_55390__$1;
(statearr_55393_56849[(1)] = (5));

} else {
var statearr_55394_56851 = state_55390__$1;
(statearr_55394_56851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (5))){
var state_55390__$1 = state_55390;
var statearr_55395_56852 = state_55390__$1;
(statearr_55395_56852[(2)] = null);

(statearr_55395_56852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (6))){
var state_55390__$1 = state_55390;
var statearr_55396_56854 = state_55390__$1;
(statearr_55396_56854[(2)] = null);

(statearr_55396_56854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (7))){
var inst_55386 = (state_55390[(2)]);
var state_55390__$1 = state_55390;
var statearr_55397_56856 = state_55390__$1;
(statearr_55397_56856[(2)] = inst_55386);

(statearr_55397_56856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__56816,c__55202__auto___56842,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async))
;
return ((function (__56816,switch__55026__auto__,c__55202__auto___56842,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0 = (function (){
var statearr_55398 = [null,null,null,null,null,null,null];
(statearr_55398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__);

(statearr_55398[(1)] = (1));

return statearr_55398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1 = (function (state_55390){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55390);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55399){if((e55399 instanceof Object)){
var ex__55030__auto__ = e55399;
var statearr_55400_56857 = state_55390;
(statearr_55400_56857[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56858 = state_55390;
state_55390 = G__56858;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = function(state_55390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1.call(this,state_55390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__;
})()
;})(__56816,switch__55026__auto__,c__55202__auto___56842,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async))
})();
var state__55204__auto__ = (function (){var statearr_55401 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55401[(6)] = c__55202__auto___56842);

return statearr_55401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(__56816,c__55202__auto___56842,G__55353_56817,G__55353_56818__$1,n__4607__auto___56815,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55353_56818__$1)].join('')));

}

var G__56859 = (__56816 + (1));
__56816 = G__56859;
continue;
} else {
}
break;
}

var c__55202__auto___56861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___56861,jobs,results,process,async){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___56861,jobs,results,process,async){
return (function (state_55423){
var state_val_55424 = (state_55423[(1)]);
if((state_val_55424 === (7))){
var inst_55419 = (state_55423[(2)]);
var state_55423__$1 = state_55423;
var statearr_55425_56863 = state_55423__$1;
(statearr_55425_56863[(2)] = inst_55419);

(statearr_55425_56863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55424 === (1))){
var state_55423__$1 = state_55423;
var statearr_55426_56864 = state_55423__$1;
(statearr_55426_56864[(2)] = null);

(statearr_55426_56864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55424 === (4))){
var inst_55404 = (state_55423[(7)]);
var inst_55404__$1 = (state_55423[(2)]);
var inst_55405 = (inst_55404__$1 == null);
var state_55423__$1 = (function (){var statearr_55427 = state_55423;
(statearr_55427[(7)] = inst_55404__$1);

return statearr_55427;
})();
if(cljs.core.truth_(inst_55405)){
var statearr_55428_56865 = state_55423__$1;
(statearr_55428_56865[(1)] = (5));

} else {
var statearr_55429_56866 = state_55423__$1;
(statearr_55429_56866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55424 === (6))){
var inst_55404 = (state_55423[(7)]);
var inst_55409 = (state_55423[(8)]);
var inst_55409__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55411 = [inst_55404,inst_55409__$1];
var inst_55412 = (new cljs.core.PersistentVector(null,2,(5),inst_55410,inst_55411,null));
var state_55423__$1 = (function (){var statearr_55430 = state_55423;
(statearr_55430[(8)] = inst_55409__$1);

return statearr_55430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55423__$1,(8),jobs,inst_55412);
} else {
if((state_val_55424 === (3))){
var inst_55421 = (state_55423[(2)]);
var state_55423__$1 = state_55423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55423__$1,inst_55421);
} else {
if((state_val_55424 === (2))){
var state_55423__$1 = state_55423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55423__$1,(4),from);
} else {
if((state_val_55424 === (9))){
var inst_55416 = (state_55423[(2)]);
var state_55423__$1 = (function (){var statearr_55431 = state_55423;
(statearr_55431[(9)] = inst_55416);

return statearr_55431;
})();
var statearr_55432_56869 = state_55423__$1;
(statearr_55432_56869[(2)] = null);

(statearr_55432_56869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55424 === (5))){
var inst_55407 = cljs.core.async.close_BANG_(jobs);
var state_55423__$1 = state_55423;
var statearr_55433_56870 = state_55423__$1;
(statearr_55433_56870[(2)] = inst_55407);

(statearr_55433_56870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55424 === (8))){
var inst_55409 = (state_55423[(8)]);
var inst_55414 = (state_55423[(2)]);
var state_55423__$1 = (function (){var statearr_55434 = state_55423;
(statearr_55434[(10)] = inst_55414);

return statearr_55434;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55423__$1,(9),results,inst_55409);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___56861,jobs,results,process,async))
;
return ((function (switch__55026__auto__,c__55202__auto___56861,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0 = (function (){
var statearr_55435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__);

(statearr_55435[(1)] = (1));

return statearr_55435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1 = (function (state_55423){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55423);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55436){if((e55436 instanceof Object)){
var ex__55030__auto__ = e55436;
var statearr_55437_56871 = state_55423;
(statearr_55437_56871[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56872 = state_55423;
state_55423 = G__56872;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = function(state_55423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1.call(this,state_55423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___56861,jobs,results,process,async))
})();
var state__55204__auto__ = (function (){var statearr_55438 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55438[(6)] = c__55202__auto___56861);

return statearr_55438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___56861,jobs,results,process,async))
);


var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__,jobs,results,process,async){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__,jobs,results,process,async){
return (function (state_55476){
var state_val_55477 = (state_55476[(1)]);
if((state_val_55477 === (7))){
var inst_55472 = (state_55476[(2)]);
var state_55476__$1 = state_55476;
var statearr_55478_56875 = state_55476__$1;
(statearr_55478_56875[(2)] = inst_55472);

(statearr_55478_56875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (20))){
var state_55476__$1 = state_55476;
var statearr_55479_56878 = state_55476__$1;
(statearr_55479_56878[(2)] = null);

(statearr_55479_56878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (1))){
var state_55476__$1 = state_55476;
var statearr_55480_56881 = state_55476__$1;
(statearr_55480_56881[(2)] = null);

(statearr_55480_56881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (4))){
var inst_55441 = (state_55476[(7)]);
var inst_55441__$1 = (state_55476[(2)]);
var inst_55442 = (inst_55441__$1 == null);
var state_55476__$1 = (function (){var statearr_55481 = state_55476;
(statearr_55481[(7)] = inst_55441__$1);

return statearr_55481;
})();
if(cljs.core.truth_(inst_55442)){
var statearr_55482_56884 = state_55476__$1;
(statearr_55482_56884[(1)] = (5));

} else {
var statearr_55483_56885 = state_55476__$1;
(statearr_55483_56885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (15))){
var inst_55454 = (state_55476[(8)]);
var state_55476__$1 = state_55476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55476__$1,(18),to,inst_55454);
} else {
if((state_val_55477 === (21))){
var inst_55467 = (state_55476[(2)]);
var state_55476__$1 = state_55476;
var statearr_55484_56889 = state_55476__$1;
(statearr_55484_56889[(2)] = inst_55467);

(statearr_55484_56889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (13))){
var inst_55469 = (state_55476[(2)]);
var state_55476__$1 = (function (){var statearr_55485 = state_55476;
(statearr_55485[(9)] = inst_55469);

return statearr_55485;
})();
var statearr_55486_56891 = state_55476__$1;
(statearr_55486_56891[(2)] = null);

(statearr_55486_56891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (6))){
var inst_55441 = (state_55476[(7)]);
var state_55476__$1 = state_55476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55476__$1,(11),inst_55441);
} else {
if((state_val_55477 === (17))){
var inst_55462 = (state_55476[(2)]);
var state_55476__$1 = state_55476;
if(cljs.core.truth_(inst_55462)){
var statearr_55487_56894 = state_55476__$1;
(statearr_55487_56894[(1)] = (19));

} else {
var statearr_55488_56895 = state_55476__$1;
(statearr_55488_56895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (3))){
var inst_55474 = (state_55476[(2)]);
var state_55476__$1 = state_55476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55476__$1,inst_55474);
} else {
if((state_val_55477 === (12))){
var inst_55451 = (state_55476[(10)]);
var state_55476__$1 = state_55476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55476__$1,(14),inst_55451);
} else {
if((state_val_55477 === (2))){
var state_55476__$1 = state_55476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55476__$1,(4),results);
} else {
if((state_val_55477 === (19))){
var state_55476__$1 = state_55476;
var statearr_55489_56896 = state_55476__$1;
(statearr_55489_56896[(2)] = null);

(statearr_55489_56896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (11))){
var inst_55451 = (state_55476[(2)]);
var state_55476__$1 = (function (){var statearr_55490 = state_55476;
(statearr_55490[(10)] = inst_55451);

return statearr_55490;
})();
var statearr_55491_56897 = state_55476__$1;
(statearr_55491_56897[(2)] = null);

(statearr_55491_56897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (9))){
var state_55476__$1 = state_55476;
var statearr_55492_56898 = state_55476__$1;
(statearr_55492_56898[(2)] = null);

(statearr_55492_56898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (5))){
var state_55476__$1 = state_55476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55493_56899 = state_55476__$1;
(statearr_55493_56899[(1)] = (8));

} else {
var statearr_55494_56901 = state_55476__$1;
(statearr_55494_56901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (14))){
var inst_55456 = (state_55476[(11)]);
var inst_55454 = (state_55476[(8)]);
var inst_55454__$1 = (state_55476[(2)]);
var inst_55455 = (inst_55454__$1 == null);
var inst_55456__$1 = cljs.core.not(inst_55455);
var state_55476__$1 = (function (){var statearr_55495 = state_55476;
(statearr_55495[(11)] = inst_55456__$1);

(statearr_55495[(8)] = inst_55454__$1);

return statearr_55495;
})();
if(inst_55456__$1){
var statearr_55496_56902 = state_55476__$1;
(statearr_55496_56902[(1)] = (15));

} else {
var statearr_55497_56903 = state_55476__$1;
(statearr_55497_56903[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (16))){
var inst_55456 = (state_55476[(11)]);
var state_55476__$1 = state_55476;
var statearr_55498_56904 = state_55476__$1;
(statearr_55498_56904[(2)] = inst_55456);

(statearr_55498_56904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (10))){
var inst_55448 = (state_55476[(2)]);
var state_55476__$1 = state_55476;
var statearr_55499_56905 = state_55476__$1;
(statearr_55499_56905[(2)] = inst_55448);

(statearr_55499_56905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (18))){
var inst_55459 = (state_55476[(2)]);
var state_55476__$1 = state_55476;
var statearr_55500_56906 = state_55476__$1;
(statearr_55500_56906[(2)] = inst_55459);

(statearr_55500_56906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55477 === (8))){
var inst_55445 = cljs.core.async.close_BANG_(to);
var state_55476__$1 = state_55476;
var statearr_55501_56907 = state_55476__$1;
(statearr_55501_56907[(2)] = inst_55445);

(statearr_55501_56907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto__,jobs,results,process,async))
;
return ((function (switch__55026__auto__,c__55202__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0 = (function (){
var statearr_55502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__);

(statearr_55502[(1)] = (1));

return statearr_55502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1 = (function (state_55476){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55476);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55503){if((e55503 instanceof Object)){
var ex__55030__auto__ = e55503;
var statearr_55504_56908 = state_55476;
(statearr_55504_56908[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56913 = state_55476;
state_55476 = G__56913;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__ = function(state_55476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1.call(this,state_55476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55027__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__,jobs,results,process,async))
})();
var state__55204__auto__ = (function (){var statearr_55505 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55505[(6)] = c__55202__auto__);

return statearr_55505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__,jobs,results,process,async))
);

return c__55202__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__55507 = arguments.length;
switch (G__55507) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__55509 = arguments.length;
switch (G__55509) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__55511 = arguments.length;
switch (G__55511) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__55202__auto___56926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___56926,tc,fc){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___56926,tc,fc){
return (function (state_55537){
var state_val_55538 = (state_55537[(1)]);
if((state_val_55538 === (7))){
var inst_55533 = (state_55537[(2)]);
var state_55537__$1 = state_55537;
var statearr_55539_56927 = state_55537__$1;
(statearr_55539_56927[(2)] = inst_55533);

(statearr_55539_56927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (1))){
var state_55537__$1 = state_55537;
var statearr_55540_56928 = state_55537__$1;
(statearr_55540_56928[(2)] = null);

(statearr_55540_56928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (4))){
var inst_55514 = (state_55537[(7)]);
var inst_55514__$1 = (state_55537[(2)]);
var inst_55515 = (inst_55514__$1 == null);
var state_55537__$1 = (function (){var statearr_55541 = state_55537;
(statearr_55541[(7)] = inst_55514__$1);

return statearr_55541;
})();
if(cljs.core.truth_(inst_55515)){
var statearr_55542_56932 = state_55537__$1;
(statearr_55542_56932[(1)] = (5));

} else {
var statearr_55543_56933 = state_55537__$1;
(statearr_55543_56933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (13))){
var state_55537__$1 = state_55537;
var statearr_55544_56934 = state_55537__$1;
(statearr_55544_56934[(2)] = null);

(statearr_55544_56934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (6))){
var inst_55514 = (state_55537[(7)]);
var inst_55520 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55514) : p.call(null,inst_55514));
var state_55537__$1 = state_55537;
if(cljs.core.truth_(inst_55520)){
var statearr_55545_56936 = state_55537__$1;
(statearr_55545_56936[(1)] = (9));

} else {
var statearr_55546_56938 = state_55537__$1;
(statearr_55546_56938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (3))){
var inst_55535 = (state_55537[(2)]);
var state_55537__$1 = state_55537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55537__$1,inst_55535);
} else {
if((state_val_55538 === (12))){
var state_55537__$1 = state_55537;
var statearr_55547_56939 = state_55537__$1;
(statearr_55547_56939[(2)] = null);

(statearr_55547_56939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (2))){
var state_55537__$1 = state_55537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55537__$1,(4),ch);
} else {
if((state_val_55538 === (11))){
var inst_55514 = (state_55537[(7)]);
var inst_55524 = (state_55537[(2)]);
var state_55537__$1 = state_55537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55537__$1,(8),inst_55524,inst_55514);
} else {
if((state_val_55538 === (9))){
var state_55537__$1 = state_55537;
var statearr_55548_56940 = state_55537__$1;
(statearr_55548_56940[(2)] = tc);

(statearr_55548_56940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (5))){
var inst_55517 = cljs.core.async.close_BANG_(tc);
var inst_55518 = cljs.core.async.close_BANG_(fc);
var state_55537__$1 = (function (){var statearr_55549 = state_55537;
(statearr_55549[(8)] = inst_55517);

return statearr_55549;
})();
var statearr_55550_56944 = state_55537__$1;
(statearr_55550_56944[(2)] = inst_55518);

(statearr_55550_56944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (14))){
var inst_55531 = (state_55537[(2)]);
var state_55537__$1 = state_55537;
var statearr_55551_56945 = state_55537__$1;
(statearr_55551_56945[(2)] = inst_55531);

(statearr_55551_56945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (10))){
var state_55537__$1 = state_55537;
var statearr_55552_56949 = state_55537__$1;
(statearr_55552_56949[(2)] = fc);

(statearr_55552_56949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55538 === (8))){
var inst_55526 = (state_55537[(2)]);
var state_55537__$1 = state_55537;
if(cljs.core.truth_(inst_55526)){
var statearr_55553_56950 = state_55537__$1;
(statearr_55553_56950[(1)] = (12));

} else {
var statearr_55554_56955 = state_55537__$1;
(statearr_55554_56955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___56926,tc,fc))
;
return ((function (switch__55026__auto__,c__55202__auto___56926,tc,fc){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_55555 = [null,null,null,null,null,null,null,null,null];
(statearr_55555[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_55555[(1)] = (1));

return statearr_55555;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_55537){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55537);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55556){if((e55556 instanceof Object)){
var ex__55030__auto__ = e55556;
var statearr_55557_56962 = state_55537;
(statearr_55557_56962[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56966 = state_55537;
state_55537 = G__56966;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_55537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_55537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___56926,tc,fc))
})();
var state__55204__auto__ = (function (){var statearr_55558 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55558[(6)] = c__55202__auto___56926);

return statearr_55558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___56926,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__){
return (function (state_55579){
var state_val_55580 = (state_55579[(1)]);
if((state_val_55580 === (7))){
var inst_55575 = (state_55579[(2)]);
var state_55579__$1 = state_55579;
var statearr_55581_56970 = state_55579__$1;
(statearr_55581_56970[(2)] = inst_55575);

(statearr_55581_56970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (1))){
var inst_55559 = init;
var state_55579__$1 = (function (){var statearr_55582 = state_55579;
(statearr_55582[(7)] = inst_55559);

return statearr_55582;
})();
var statearr_55583_56971 = state_55579__$1;
(statearr_55583_56971[(2)] = null);

(statearr_55583_56971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (4))){
var inst_55562 = (state_55579[(8)]);
var inst_55562__$1 = (state_55579[(2)]);
var inst_55563 = (inst_55562__$1 == null);
var state_55579__$1 = (function (){var statearr_55584 = state_55579;
(statearr_55584[(8)] = inst_55562__$1);

return statearr_55584;
})();
if(cljs.core.truth_(inst_55563)){
var statearr_55585_56976 = state_55579__$1;
(statearr_55585_56976[(1)] = (5));

} else {
var statearr_55586_56977 = state_55579__$1;
(statearr_55586_56977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (6))){
var inst_55562 = (state_55579[(8)]);
var inst_55566 = (state_55579[(9)]);
var inst_55559 = (state_55579[(7)]);
var inst_55566__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55559,inst_55562) : f.call(null,inst_55559,inst_55562));
var inst_55567 = cljs.core.reduced_QMARK_(inst_55566__$1);
var state_55579__$1 = (function (){var statearr_55587 = state_55579;
(statearr_55587[(9)] = inst_55566__$1);

return statearr_55587;
})();
if(inst_55567){
var statearr_55588_56984 = state_55579__$1;
(statearr_55588_56984[(1)] = (8));

} else {
var statearr_55589_56985 = state_55579__$1;
(statearr_55589_56985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (3))){
var inst_55577 = (state_55579[(2)]);
var state_55579__$1 = state_55579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55579__$1,inst_55577);
} else {
if((state_val_55580 === (2))){
var state_55579__$1 = state_55579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55579__$1,(4),ch);
} else {
if((state_val_55580 === (9))){
var inst_55566 = (state_55579[(9)]);
var inst_55559 = inst_55566;
var state_55579__$1 = (function (){var statearr_55590 = state_55579;
(statearr_55590[(7)] = inst_55559);

return statearr_55590;
})();
var statearr_55591_56986 = state_55579__$1;
(statearr_55591_56986[(2)] = null);

(statearr_55591_56986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (5))){
var inst_55559 = (state_55579[(7)]);
var state_55579__$1 = state_55579;
var statearr_55592_56990 = state_55579__$1;
(statearr_55592_56990[(2)] = inst_55559);

(statearr_55592_56990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (10))){
var inst_55573 = (state_55579[(2)]);
var state_55579__$1 = state_55579;
var statearr_55593_56994 = state_55579__$1;
(statearr_55593_56994[(2)] = inst_55573);

(statearr_55593_56994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55580 === (8))){
var inst_55566 = (state_55579[(9)]);
var inst_55569 = cljs.core.deref(inst_55566);
var state_55579__$1 = state_55579;
var statearr_55594_56995 = state_55579__$1;
(statearr_55594_56995[(2)] = inst_55569);

(statearr_55594_56995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto__))
;
return ((function (switch__55026__auto__,c__55202__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__55027__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55027__auto____0 = (function (){
var statearr_55595 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55595[(0)] = cljs$core$async$reduce_$_state_machine__55027__auto__);

(statearr_55595[(1)] = (1));

return statearr_55595;
});
var cljs$core$async$reduce_$_state_machine__55027__auto____1 = (function (state_55579){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55579);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55596){if((e55596 instanceof Object)){
var ex__55030__auto__ = e55596;
var statearr_55597_57006 = state_55579;
(statearr_55597_57006[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57011 = state_55579;
state_55579 = G__57011;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55027__auto__ = function(state_55579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55027__auto____1.call(this,state_55579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55027__auto____0;
cljs$core$async$reduce_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55027__auto____1;
return cljs$core$async$reduce_$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__))
})();
var state__55204__auto__ = (function (){var statearr_55598 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55598[(6)] = c__55202__auto__);

return statearr_55598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__))
);

return c__55202__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__,f__$1){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__,f__$1){
return (function (state_55604){
var state_val_55605 = (state_55604[(1)]);
if((state_val_55605 === (1))){
var inst_55599 = cljs.core.async.reduce(f__$1,init,ch);
var state_55604__$1 = state_55604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55604__$1,(2),inst_55599);
} else {
if((state_val_55605 === (2))){
var inst_55601 = (state_55604[(2)]);
var inst_55602 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55601) : f__$1.call(null,inst_55601));
var state_55604__$1 = state_55604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55604__$1,inst_55602);
} else {
return null;
}
}
});})(c__55202__auto__,f__$1))
;
return ((function (switch__55026__auto__,c__55202__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__55027__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55027__auto____0 = (function (){
var statearr_55606 = [null,null,null,null,null,null,null];
(statearr_55606[(0)] = cljs$core$async$transduce_$_state_machine__55027__auto__);

(statearr_55606[(1)] = (1));

return statearr_55606;
});
var cljs$core$async$transduce_$_state_machine__55027__auto____1 = (function (state_55604){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55604);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55607){if((e55607 instanceof Object)){
var ex__55030__auto__ = e55607;
var statearr_55608_57015 = state_55604;
(statearr_55608_57015[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57016 = state_55604;
state_55604 = G__57016;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55027__auto__ = function(state_55604){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55027__auto____1.call(this,state_55604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55027__auto____0;
cljs$core$async$transduce_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55027__auto____1;
return cljs$core$async$transduce_$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__,f__$1))
})();
var state__55204__auto__ = (function (){var statearr_55609 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55609[(6)] = c__55202__auto__);

return statearr_55609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__,f__$1))
);

return c__55202__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__55611 = arguments.length;
switch (G__55611) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__){
return (function (state_55636){
var state_val_55637 = (state_55636[(1)]);
if((state_val_55637 === (7))){
var inst_55618 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
var statearr_55638_57019 = state_55636__$1;
(statearr_55638_57019[(2)] = inst_55618);

(statearr_55638_57019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (1))){
var inst_55612 = cljs.core.seq(coll);
var inst_55613 = inst_55612;
var state_55636__$1 = (function (){var statearr_55639 = state_55636;
(statearr_55639[(7)] = inst_55613);

return statearr_55639;
})();
var statearr_55640_57020 = state_55636__$1;
(statearr_55640_57020[(2)] = null);

(statearr_55640_57020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (4))){
var inst_55613 = (state_55636[(7)]);
var inst_55616 = cljs.core.first(inst_55613);
var state_55636__$1 = state_55636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55636__$1,(7),ch,inst_55616);
} else {
if((state_val_55637 === (13))){
var inst_55630 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
var statearr_55641_57021 = state_55636__$1;
(statearr_55641_57021[(2)] = inst_55630);

(statearr_55641_57021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (6))){
var inst_55621 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
if(cljs.core.truth_(inst_55621)){
var statearr_55642_57022 = state_55636__$1;
(statearr_55642_57022[(1)] = (8));

} else {
var statearr_55643_57023 = state_55636__$1;
(statearr_55643_57023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (3))){
var inst_55634 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55636__$1,inst_55634);
} else {
if((state_val_55637 === (12))){
var state_55636__$1 = state_55636;
var statearr_55644_57026 = state_55636__$1;
(statearr_55644_57026[(2)] = null);

(statearr_55644_57026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (2))){
var inst_55613 = (state_55636[(7)]);
var state_55636__$1 = state_55636;
if(cljs.core.truth_(inst_55613)){
var statearr_55645_57027 = state_55636__$1;
(statearr_55645_57027[(1)] = (4));

} else {
var statearr_55646_57028 = state_55636__$1;
(statearr_55646_57028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (11))){
var inst_55627 = cljs.core.async.close_BANG_(ch);
var state_55636__$1 = state_55636;
var statearr_55647_57029 = state_55636__$1;
(statearr_55647_57029[(2)] = inst_55627);

(statearr_55647_57029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (9))){
var state_55636__$1 = state_55636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55648_57030 = state_55636__$1;
(statearr_55648_57030[(1)] = (11));

} else {
var statearr_55649_57031 = state_55636__$1;
(statearr_55649_57031[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (5))){
var inst_55613 = (state_55636[(7)]);
var state_55636__$1 = state_55636;
var statearr_55650_57032 = state_55636__$1;
(statearr_55650_57032[(2)] = inst_55613);

(statearr_55650_57032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (10))){
var inst_55632 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
var statearr_55651_57033 = state_55636__$1;
(statearr_55651_57033[(2)] = inst_55632);

(statearr_55651_57033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (8))){
var inst_55613 = (state_55636[(7)]);
var inst_55623 = cljs.core.next(inst_55613);
var inst_55613__$1 = inst_55623;
var state_55636__$1 = (function (){var statearr_55652 = state_55636;
(statearr_55652[(7)] = inst_55613__$1);

return statearr_55652;
})();
var statearr_55653_57034 = state_55636__$1;
(statearr_55653_57034[(2)] = null);

(statearr_55653_57034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto__))
;
return ((function (switch__55026__auto__,c__55202__auto__){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_55654 = [null,null,null,null,null,null,null,null];
(statearr_55654[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_55654[(1)] = (1));

return statearr_55654;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_55636){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55636);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55655){if((e55655 instanceof Object)){
var ex__55030__auto__ = e55655;
var statearr_55656_57037 = state_55636;
(statearr_55656_57037[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57039 = state_55636;
state_55636 = G__57039;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_55636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_55636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__))
})();
var state__55204__auto__ = (function (){var statearr_55657 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55657[(6)] = c__55202__auto__);

return statearr_55657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__))
);

return c__55202__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55658 = (function (ch,cs,meta55659){
this.ch = ch;
this.cs = cs;
this.meta55659 = meta55659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_55660,meta55659__$1){
var self__ = this;
var _55660__$1 = this;
return (new cljs.core.async.t_cljs$core$async55658(self__.ch,self__.cs,meta55659__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_55660){
var self__ = this;
var _55660__$1 = this;
return self__.meta55659;
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55659","meta55659",-2060003725,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async55658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55658";

cljs.core.async.t_cljs$core$async55658.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async55658");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55658.
 */
cljs.core.async.__GT_t_cljs$core$async55658 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async55658(ch__$1,cs__$1,meta55659){
return (new cljs.core.async.t_cljs$core$async55658(ch__$1,cs__$1,meta55659));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async55658(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__55202__auto___57075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57075,cs,m,dchan,dctr,done){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57075,cs,m,dchan,dctr,done){
return (function (state_55795){
var state_val_55796 = (state_55795[(1)]);
if((state_val_55796 === (7))){
var inst_55791 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55797_57077 = state_55795__$1;
(statearr_55797_57077[(2)] = inst_55791);

(statearr_55797_57077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (20))){
var inst_55694 = (state_55795[(7)]);
var inst_55706 = cljs.core.first(inst_55694);
var inst_55707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55706,(0),null);
var inst_55708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55706,(1),null);
var state_55795__$1 = (function (){var statearr_55798 = state_55795;
(statearr_55798[(8)] = inst_55707);

return statearr_55798;
})();
if(cljs.core.truth_(inst_55708)){
var statearr_55799_57078 = state_55795__$1;
(statearr_55799_57078[(1)] = (22));

} else {
var statearr_55800_57079 = state_55795__$1;
(statearr_55800_57079[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (27))){
var inst_55738 = (state_55795[(9)]);
var inst_55663 = (state_55795[(10)]);
var inst_55736 = (state_55795[(11)]);
var inst_55743 = (state_55795[(12)]);
var inst_55743__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55736,inst_55738);
var inst_55744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55743__$1,inst_55663,done);
var state_55795__$1 = (function (){var statearr_55801 = state_55795;
(statearr_55801[(12)] = inst_55743__$1);

return statearr_55801;
})();
if(cljs.core.truth_(inst_55744)){
var statearr_55802_57086 = state_55795__$1;
(statearr_55802_57086[(1)] = (30));

} else {
var statearr_55803_57087 = state_55795__$1;
(statearr_55803_57087[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (1))){
var state_55795__$1 = state_55795;
var statearr_55804_57088 = state_55795__$1;
(statearr_55804_57088[(2)] = null);

(statearr_55804_57088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (24))){
var inst_55694 = (state_55795[(7)]);
var inst_55713 = (state_55795[(2)]);
var inst_55714 = cljs.core.next(inst_55694);
var inst_55672 = inst_55714;
var inst_55673 = null;
var inst_55674 = (0);
var inst_55675 = (0);
var state_55795__$1 = (function (){var statearr_55805 = state_55795;
(statearr_55805[(13)] = inst_55675);

(statearr_55805[(14)] = inst_55674);

(statearr_55805[(15)] = inst_55672);

(statearr_55805[(16)] = inst_55713);

(statearr_55805[(17)] = inst_55673);

return statearr_55805;
})();
var statearr_55806_57089 = state_55795__$1;
(statearr_55806_57089[(2)] = null);

(statearr_55806_57089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (39))){
var state_55795__$1 = state_55795;
var statearr_55810_57090 = state_55795__$1;
(statearr_55810_57090[(2)] = null);

(statearr_55810_57090[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (4))){
var inst_55663 = (state_55795[(10)]);
var inst_55663__$1 = (state_55795[(2)]);
var inst_55664 = (inst_55663__$1 == null);
var state_55795__$1 = (function (){var statearr_55811 = state_55795;
(statearr_55811[(10)] = inst_55663__$1);

return statearr_55811;
})();
if(cljs.core.truth_(inst_55664)){
var statearr_55812_57091 = state_55795__$1;
(statearr_55812_57091[(1)] = (5));

} else {
var statearr_55813_57092 = state_55795__$1;
(statearr_55813_57092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (15))){
var inst_55675 = (state_55795[(13)]);
var inst_55674 = (state_55795[(14)]);
var inst_55672 = (state_55795[(15)]);
var inst_55673 = (state_55795[(17)]);
var inst_55690 = (state_55795[(2)]);
var inst_55691 = (inst_55675 + (1));
var tmp55807 = inst_55674;
var tmp55808 = inst_55672;
var tmp55809 = inst_55673;
var inst_55672__$1 = tmp55808;
var inst_55673__$1 = tmp55809;
var inst_55674__$1 = tmp55807;
var inst_55675__$1 = inst_55691;
var state_55795__$1 = (function (){var statearr_55814 = state_55795;
(statearr_55814[(13)] = inst_55675__$1);

(statearr_55814[(14)] = inst_55674__$1);

(statearr_55814[(18)] = inst_55690);

(statearr_55814[(15)] = inst_55672__$1);

(statearr_55814[(17)] = inst_55673__$1);

return statearr_55814;
})();
var statearr_55815_57099 = state_55795__$1;
(statearr_55815_57099[(2)] = null);

(statearr_55815_57099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (21))){
var inst_55717 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55819_57100 = state_55795__$1;
(statearr_55819_57100[(2)] = inst_55717);

(statearr_55819_57100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (31))){
var inst_55743 = (state_55795[(12)]);
var inst_55747 = done(null);
var inst_55748 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55743);
var state_55795__$1 = (function (){var statearr_55820 = state_55795;
(statearr_55820[(19)] = inst_55747);

return statearr_55820;
})();
var statearr_55821_57101 = state_55795__$1;
(statearr_55821_57101[(2)] = inst_55748);

(statearr_55821_57101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (32))){
var inst_55737 = (state_55795[(20)]);
var inst_55735 = (state_55795[(21)]);
var inst_55738 = (state_55795[(9)]);
var inst_55736 = (state_55795[(11)]);
var inst_55750 = (state_55795[(2)]);
var inst_55751 = (inst_55738 + (1));
var tmp55816 = inst_55737;
var tmp55817 = inst_55735;
var tmp55818 = inst_55736;
var inst_55735__$1 = tmp55817;
var inst_55736__$1 = tmp55818;
var inst_55737__$1 = tmp55816;
var inst_55738__$1 = inst_55751;
var state_55795__$1 = (function (){var statearr_55822 = state_55795;
(statearr_55822[(20)] = inst_55737__$1);

(statearr_55822[(22)] = inst_55750);

(statearr_55822[(21)] = inst_55735__$1);

(statearr_55822[(9)] = inst_55738__$1);

(statearr_55822[(11)] = inst_55736__$1);

return statearr_55822;
})();
var statearr_55823_57102 = state_55795__$1;
(statearr_55823_57102[(2)] = null);

(statearr_55823_57102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (40))){
var inst_55763 = (state_55795[(23)]);
var inst_55767 = done(null);
var inst_55768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55763);
var state_55795__$1 = (function (){var statearr_55824 = state_55795;
(statearr_55824[(24)] = inst_55767);

return statearr_55824;
})();
var statearr_55825_57103 = state_55795__$1;
(statearr_55825_57103[(2)] = inst_55768);

(statearr_55825_57103[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (33))){
var inst_55754 = (state_55795[(25)]);
var inst_55756 = cljs.core.chunked_seq_QMARK_(inst_55754);
var state_55795__$1 = state_55795;
if(inst_55756){
var statearr_55826_57104 = state_55795__$1;
(statearr_55826_57104[(1)] = (36));

} else {
var statearr_55827_57105 = state_55795__$1;
(statearr_55827_57105[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (13))){
var inst_55684 = (state_55795[(26)]);
var inst_55687 = cljs.core.async.close_BANG_(inst_55684);
var state_55795__$1 = state_55795;
var statearr_55828_57106 = state_55795__$1;
(statearr_55828_57106[(2)] = inst_55687);

(statearr_55828_57106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (22))){
var inst_55707 = (state_55795[(8)]);
var inst_55710 = cljs.core.async.close_BANG_(inst_55707);
var state_55795__$1 = state_55795;
var statearr_55829_57107 = state_55795__$1;
(statearr_55829_57107[(2)] = inst_55710);

(statearr_55829_57107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (36))){
var inst_55754 = (state_55795[(25)]);
var inst_55758 = cljs.core.chunk_first(inst_55754);
var inst_55759 = cljs.core.chunk_rest(inst_55754);
var inst_55760 = cljs.core.count(inst_55758);
var inst_55735 = inst_55759;
var inst_55736 = inst_55758;
var inst_55737 = inst_55760;
var inst_55738 = (0);
var state_55795__$1 = (function (){var statearr_55830 = state_55795;
(statearr_55830[(20)] = inst_55737);

(statearr_55830[(21)] = inst_55735);

(statearr_55830[(9)] = inst_55738);

(statearr_55830[(11)] = inst_55736);

return statearr_55830;
})();
var statearr_55831_57108 = state_55795__$1;
(statearr_55831_57108[(2)] = null);

(statearr_55831_57108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (41))){
var inst_55754 = (state_55795[(25)]);
var inst_55770 = (state_55795[(2)]);
var inst_55771 = cljs.core.next(inst_55754);
var inst_55735 = inst_55771;
var inst_55736 = null;
var inst_55737 = (0);
var inst_55738 = (0);
var state_55795__$1 = (function (){var statearr_55832 = state_55795;
(statearr_55832[(20)] = inst_55737);

(statearr_55832[(27)] = inst_55770);

(statearr_55832[(21)] = inst_55735);

(statearr_55832[(9)] = inst_55738);

(statearr_55832[(11)] = inst_55736);

return statearr_55832;
})();
var statearr_55833_57109 = state_55795__$1;
(statearr_55833_57109[(2)] = null);

(statearr_55833_57109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (43))){
var state_55795__$1 = state_55795;
var statearr_55834_57110 = state_55795__$1;
(statearr_55834_57110[(2)] = null);

(statearr_55834_57110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (29))){
var inst_55779 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55835_57112 = state_55795__$1;
(statearr_55835_57112[(2)] = inst_55779);

(statearr_55835_57112[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (44))){
var inst_55788 = (state_55795[(2)]);
var state_55795__$1 = (function (){var statearr_55836 = state_55795;
(statearr_55836[(28)] = inst_55788);

return statearr_55836;
})();
var statearr_55837_57113 = state_55795__$1;
(statearr_55837_57113[(2)] = null);

(statearr_55837_57113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (6))){
var inst_55727 = (state_55795[(29)]);
var inst_55726 = cljs.core.deref(cs);
var inst_55727__$1 = cljs.core.keys(inst_55726);
var inst_55728 = cljs.core.count(inst_55727__$1);
var inst_55729 = cljs.core.reset_BANG_(dctr,inst_55728);
var inst_55734 = cljs.core.seq(inst_55727__$1);
var inst_55735 = inst_55734;
var inst_55736 = null;
var inst_55737 = (0);
var inst_55738 = (0);
var state_55795__$1 = (function (){var statearr_55838 = state_55795;
(statearr_55838[(29)] = inst_55727__$1);

(statearr_55838[(20)] = inst_55737);

(statearr_55838[(30)] = inst_55729);

(statearr_55838[(21)] = inst_55735);

(statearr_55838[(9)] = inst_55738);

(statearr_55838[(11)] = inst_55736);

return statearr_55838;
})();
var statearr_55839_57119 = state_55795__$1;
(statearr_55839_57119[(2)] = null);

(statearr_55839_57119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (28))){
var inst_55754 = (state_55795[(25)]);
var inst_55735 = (state_55795[(21)]);
var inst_55754__$1 = cljs.core.seq(inst_55735);
var state_55795__$1 = (function (){var statearr_55840 = state_55795;
(statearr_55840[(25)] = inst_55754__$1);

return statearr_55840;
})();
if(inst_55754__$1){
var statearr_55841_57120 = state_55795__$1;
(statearr_55841_57120[(1)] = (33));

} else {
var statearr_55842_57121 = state_55795__$1;
(statearr_55842_57121[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (25))){
var inst_55737 = (state_55795[(20)]);
var inst_55738 = (state_55795[(9)]);
var inst_55740 = (inst_55738 < inst_55737);
var inst_55741 = inst_55740;
var state_55795__$1 = state_55795;
if(cljs.core.truth_(inst_55741)){
var statearr_55843_57122 = state_55795__$1;
(statearr_55843_57122[(1)] = (27));

} else {
var statearr_55844_57123 = state_55795__$1;
(statearr_55844_57123[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (34))){
var state_55795__$1 = state_55795;
var statearr_55845_57126 = state_55795__$1;
(statearr_55845_57126[(2)] = null);

(statearr_55845_57126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (17))){
var state_55795__$1 = state_55795;
var statearr_55846_57127 = state_55795__$1;
(statearr_55846_57127[(2)] = null);

(statearr_55846_57127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (3))){
var inst_55793 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55795__$1,inst_55793);
} else {
if((state_val_55796 === (12))){
var inst_55722 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55847_57130 = state_55795__$1;
(statearr_55847_57130[(2)] = inst_55722);

(statearr_55847_57130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (2))){
var state_55795__$1 = state_55795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55795__$1,(4),ch);
} else {
if((state_val_55796 === (23))){
var state_55795__$1 = state_55795;
var statearr_55848_57131 = state_55795__$1;
(statearr_55848_57131[(2)] = null);

(statearr_55848_57131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (35))){
var inst_55777 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55849_57133 = state_55795__$1;
(statearr_55849_57133[(2)] = inst_55777);

(statearr_55849_57133[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (19))){
var inst_55694 = (state_55795[(7)]);
var inst_55698 = cljs.core.chunk_first(inst_55694);
var inst_55699 = cljs.core.chunk_rest(inst_55694);
var inst_55700 = cljs.core.count(inst_55698);
var inst_55672 = inst_55699;
var inst_55673 = inst_55698;
var inst_55674 = inst_55700;
var inst_55675 = (0);
var state_55795__$1 = (function (){var statearr_55850 = state_55795;
(statearr_55850[(13)] = inst_55675);

(statearr_55850[(14)] = inst_55674);

(statearr_55850[(15)] = inst_55672);

(statearr_55850[(17)] = inst_55673);

return statearr_55850;
})();
var statearr_55851_57135 = state_55795__$1;
(statearr_55851_57135[(2)] = null);

(statearr_55851_57135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (11))){
var inst_55672 = (state_55795[(15)]);
var inst_55694 = (state_55795[(7)]);
var inst_55694__$1 = cljs.core.seq(inst_55672);
var state_55795__$1 = (function (){var statearr_55852 = state_55795;
(statearr_55852[(7)] = inst_55694__$1);

return statearr_55852;
})();
if(inst_55694__$1){
var statearr_55853_57136 = state_55795__$1;
(statearr_55853_57136[(1)] = (16));

} else {
var statearr_55854_57137 = state_55795__$1;
(statearr_55854_57137[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (9))){
var inst_55724 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55855_57138 = state_55795__$1;
(statearr_55855_57138[(2)] = inst_55724);

(statearr_55855_57138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (5))){
var inst_55670 = cljs.core.deref(cs);
var inst_55671 = cljs.core.seq(inst_55670);
var inst_55672 = inst_55671;
var inst_55673 = null;
var inst_55674 = (0);
var inst_55675 = (0);
var state_55795__$1 = (function (){var statearr_55856 = state_55795;
(statearr_55856[(13)] = inst_55675);

(statearr_55856[(14)] = inst_55674);

(statearr_55856[(15)] = inst_55672);

(statearr_55856[(17)] = inst_55673);

return statearr_55856;
})();
var statearr_55857_57139 = state_55795__$1;
(statearr_55857_57139[(2)] = null);

(statearr_55857_57139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (14))){
var state_55795__$1 = state_55795;
var statearr_55858_57141 = state_55795__$1;
(statearr_55858_57141[(2)] = null);

(statearr_55858_57141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (45))){
var inst_55785 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55859_57143 = state_55795__$1;
(statearr_55859_57143[(2)] = inst_55785);

(statearr_55859_57143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (26))){
var inst_55727 = (state_55795[(29)]);
var inst_55781 = (state_55795[(2)]);
var inst_55782 = cljs.core.seq(inst_55727);
var state_55795__$1 = (function (){var statearr_55860 = state_55795;
(statearr_55860[(31)] = inst_55781);

return statearr_55860;
})();
if(inst_55782){
var statearr_55861_57144 = state_55795__$1;
(statearr_55861_57144[(1)] = (42));

} else {
var statearr_55862_57145 = state_55795__$1;
(statearr_55862_57145[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (16))){
var inst_55694 = (state_55795[(7)]);
var inst_55696 = cljs.core.chunked_seq_QMARK_(inst_55694);
var state_55795__$1 = state_55795;
if(inst_55696){
var statearr_55863_57146 = state_55795__$1;
(statearr_55863_57146[(1)] = (19));

} else {
var statearr_55864_57147 = state_55795__$1;
(statearr_55864_57147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (38))){
var inst_55774 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55865_57148 = state_55795__$1;
(statearr_55865_57148[(2)] = inst_55774);

(statearr_55865_57148[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (30))){
var state_55795__$1 = state_55795;
var statearr_55866_57149 = state_55795__$1;
(statearr_55866_57149[(2)] = null);

(statearr_55866_57149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (10))){
var inst_55675 = (state_55795[(13)]);
var inst_55673 = (state_55795[(17)]);
var inst_55683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_55673,inst_55675);
var inst_55684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55683,(0),null);
var inst_55685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55683,(1),null);
var state_55795__$1 = (function (){var statearr_55867 = state_55795;
(statearr_55867[(26)] = inst_55684);

return statearr_55867;
})();
if(cljs.core.truth_(inst_55685)){
var statearr_55868_57150 = state_55795__$1;
(statearr_55868_57150[(1)] = (13));

} else {
var statearr_55869_57151 = state_55795__$1;
(statearr_55869_57151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (18))){
var inst_55720 = (state_55795[(2)]);
var state_55795__$1 = state_55795;
var statearr_55870_57152 = state_55795__$1;
(statearr_55870_57152[(2)] = inst_55720);

(statearr_55870_57152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (42))){
var state_55795__$1 = state_55795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55795__$1,(45),dchan);
} else {
if((state_val_55796 === (37))){
var inst_55754 = (state_55795[(25)]);
var inst_55763 = (state_55795[(23)]);
var inst_55663 = (state_55795[(10)]);
var inst_55763__$1 = cljs.core.first(inst_55754);
var inst_55764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55763__$1,inst_55663,done);
var state_55795__$1 = (function (){var statearr_55871 = state_55795;
(statearr_55871[(23)] = inst_55763__$1);

return statearr_55871;
})();
if(cljs.core.truth_(inst_55764)){
var statearr_55872_57154 = state_55795__$1;
(statearr_55872_57154[(1)] = (39));

} else {
var statearr_55873_57155 = state_55795__$1;
(statearr_55873_57155[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55796 === (8))){
var inst_55675 = (state_55795[(13)]);
var inst_55674 = (state_55795[(14)]);
var inst_55677 = (inst_55675 < inst_55674);
var inst_55678 = inst_55677;
var state_55795__$1 = state_55795;
if(cljs.core.truth_(inst_55678)){
var statearr_55874_57156 = state_55795__$1;
(statearr_55874_57156[(1)] = (10));

} else {
var statearr_55875_57157 = state_55795__$1;
(statearr_55875_57157[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57075,cs,m,dchan,dctr,done))
;
return ((function (switch__55026__auto__,c__55202__auto___57075,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__55027__auto__ = null;
var cljs$core$async$mult_$_state_machine__55027__auto____0 = (function (){
var statearr_55876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55876[(0)] = cljs$core$async$mult_$_state_machine__55027__auto__);

(statearr_55876[(1)] = (1));

return statearr_55876;
});
var cljs$core$async$mult_$_state_machine__55027__auto____1 = (function (state_55795){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55795);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e55877){if((e55877 instanceof Object)){
var ex__55030__auto__ = e55877;
var statearr_55878_57162 = state_55795;
(statearr_55878_57162[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57163 = state_55795;
state_55795 = G__57163;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55027__auto__ = function(state_55795){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55027__auto____1.call(this,state_55795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55027__auto____0;
cljs$core$async$mult_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55027__auto____1;
return cljs$core$async$mult_$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57075,cs,m,dchan,dctr,done))
})();
var state__55204__auto__ = (function (){var statearr_55879 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_55879[(6)] = c__55202__auto___57075);

return statearr_55879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57075,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__55881 = arguments.length;
switch (G__55881) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57196 = arguments.length;
var i__4731__auto___57197 = (0);
while(true){
if((i__4731__auto___57197 < len__4730__auto___57196)){
args__4736__auto__.push((arguments[i__4731__auto___57197]));

var G__57198 = (i__4731__auto___57197 + (1));
i__4731__auto___57197 = G__57198;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55886){
var map__55887 = p__55886;
var map__55887__$1 = (((((!((map__55887 == null))))?(((((map__55887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55887):map__55887);
var opts = map__55887__$1;
var statearr_55889_57200 = state;
(statearr_55889_57200[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__55887,map__55887__$1,opts){
return (function (val){
var statearr_55890_57201 = state;
(statearr_55890_57201[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__55887,map__55887__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_55891_57206 = state;
(statearr_55891_57206[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55882){
var G__55883 = cljs.core.first(seq55882);
var seq55882__$1 = cljs.core.next(seq55882);
var G__55884 = cljs.core.first(seq55882__$1);
var seq55882__$2 = cljs.core.next(seq55882__$1);
var G__55885 = cljs.core.first(seq55882__$2);
var seq55882__$3 = cljs.core.next(seq55882__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55883,G__55884,G__55885,seq55882__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55892 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55893){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55893 = meta55893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55894,meta55893__$1){
var self__ = this;
var _55894__$1 = this;
return (new cljs.core.async.t_cljs$core$async55892(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55893__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55894){
var self__ = this;
var _55894__$1 = this;
return self__.meta55893;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55893","meta55893",537128847,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55892";

cljs.core.async.t_cljs$core$async55892.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async55892");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55892.
 */
cljs.core.async.__GT_t_cljs$core$async55892 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async55892(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55893){
return (new cljs.core.async.t_cljs$core$async55892(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55893));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async55892(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55202__auto___57253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57253,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57253,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55996){
var state_val_55997 = (state_55996[(1)]);
if((state_val_55997 === (7))){
var inst_55911 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_55998_57256 = state_55996__$1;
(statearr_55998_57256[(2)] = inst_55911);

(statearr_55998_57256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (20))){
var inst_55923 = (state_55996[(7)]);
var state_55996__$1 = state_55996;
var statearr_55999_57257 = state_55996__$1;
(statearr_55999_57257[(2)] = inst_55923);

(statearr_55999_57257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (27))){
var state_55996__$1 = state_55996;
var statearr_56000_57258 = state_55996__$1;
(statearr_56000_57258[(2)] = null);

(statearr_56000_57258[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (1))){
var inst_55898 = (state_55996[(8)]);
var inst_55898__$1 = calc_state();
var inst_55900 = (inst_55898__$1 == null);
var inst_55901 = cljs.core.not(inst_55900);
var state_55996__$1 = (function (){var statearr_56001 = state_55996;
(statearr_56001[(8)] = inst_55898__$1);

return statearr_56001;
})();
if(inst_55901){
var statearr_56002_57263 = state_55996__$1;
(statearr_56002_57263[(1)] = (2));

} else {
var statearr_56003_57264 = state_55996__$1;
(statearr_56003_57264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (24))){
var inst_55947 = (state_55996[(9)]);
var inst_55970 = (state_55996[(10)]);
var inst_55956 = (state_55996[(11)]);
var inst_55970__$1 = (inst_55947.cljs$core$IFn$_invoke$arity$1 ? inst_55947.cljs$core$IFn$_invoke$arity$1(inst_55956) : inst_55947.call(null,inst_55956));
var state_55996__$1 = (function (){var statearr_56004 = state_55996;
(statearr_56004[(10)] = inst_55970__$1);

return statearr_56004;
})();
if(cljs.core.truth_(inst_55970__$1)){
var statearr_56005_57267 = state_55996__$1;
(statearr_56005_57267[(1)] = (29));

} else {
var statearr_56006_57268 = state_55996__$1;
(statearr_56006_57268[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (4))){
var inst_55914 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55914)){
var statearr_56007_57271 = state_55996__$1;
(statearr_56007_57271[(1)] = (8));

} else {
var statearr_56008_57272 = state_55996__$1;
(statearr_56008_57272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (15))){
var inst_55941 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55941)){
var statearr_56009_57275 = state_55996__$1;
(statearr_56009_57275[(1)] = (19));

} else {
var statearr_56010_57278 = state_55996__$1;
(statearr_56010_57278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (21))){
var inst_55946 = (state_55996[(12)]);
var inst_55946__$1 = (state_55996[(2)]);
var inst_55947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55946__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55946__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55946__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55996__$1 = (function (){var statearr_56011 = state_55996;
(statearr_56011[(9)] = inst_55947);

(statearr_56011[(12)] = inst_55946__$1);

(statearr_56011[(13)] = inst_55948);

return statearr_56011;
})();
return cljs.core.async.ioc_alts_BANG_(state_55996__$1,(22),inst_55949);
} else {
if((state_val_55997 === (31))){
var inst_55978 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55978)){
var statearr_56012_57283 = state_55996__$1;
(statearr_56012_57283[(1)] = (32));

} else {
var statearr_56013_57284 = state_55996__$1;
(statearr_56013_57284[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (32))){
var inst_55955 = (state_55996[(14)]);
var state_55996__$1 = state_55996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55996__$1,(35),out,inst_55955);
} else {
if((state_val_55997 === (33))){
var inst_55946 = (state_55996[(12)]);
var inst_55923 = inst_55946;
var state_55996__$1 = (function (){var statearr_56014 = state_55996;
(statearr_56014[(7)] = inst_55923);

return statearr_56014;
})();
var statearr_56015_57289 = state_55996__$1;
(statearr_56015_57289[(2)] = null);

(statearr_56015_57289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (13))){
var inst_55923 = (state_55996[(7)]);
var inst_55930 = inst_55923.cljs$lang$protocol_mask$partition0$;
var inst_55931 = (inst_55930 & (64));
var inst_55932 = inst_55923.cljs$core$ISeq$;
var inst_55933 = (cljs.core.PROTOCOL_SENTINEL === inst_55932);
var inst_55934 = ((inst_55931) || (inst_55933));
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55934)){
var statearr_56016_57290 = state_55996__$1;
(statearr_56016_57290[(1)] = (16));

} else {
var statearr_56017_57292 = state_55996__$1;
(statearr_56017_57292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (22))){
var inst_55955 = (state_55996[(14)]);
var inst_55956 = (state_55996[(11)]);
var inst_55954 = (state_55996[(2)]);
var inst_55955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55954,(0),null);
var inst_55956__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55954,(1),null);
var inst_55957 = (inst_55955__$1 == null);
var inst_55958 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55956__$1,change);
var inst_55959 = ((inst_55957) || (inst_55958));
var state_55996__$1 = (function (){var statearr_56018 = state_55996;
(statearr_56018[(14)] = inst_55955__$1);

(statearr_56018[(11)] = inst_55956__$1);

return statearr_56018;
})();
if(cljs.core.truth_(inst_55959)){
var statearr_56019_57297 = state_55996__$1;
(statearr_56019_57297[(1)] = (23));

} else {
var statearr_56020_57299 = state_55996__$1;
(statearr_56020_57299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (36))){
var inst_55946 = (state_55996[(12)]);
var inst_55923 = inst_55946;
var state_55996__$1 = (function (){var statearr_56021 = state_55996;
(statearr_56021[(7)] = inst_55923);

return statearr_56021;
})();
var statearr_56022_57301 = state_55996__$1;
(statearr_56022_57301[(2)] = null);

(statearr_56022_57301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (29))){
var inst_55970 = (state_55996[(10)]);
var state_55996__$1 = state_55996;
var statearr_56023_57303 = state_55996__$1;
(statearr_56023_57303[(2)] = inst_55970);

(statearr_56023_57303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (6))){
var state_55996__$1 = state_55996;
var statearr_56024_57307 = state_55996__$1;
(statearr_56024_57307[(2)] = false);

(statearr_56024_57307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (28))){
var inst_55966 = (state_55996[(2)]);
var inst_55967 = calc_state();
var inst_55923 = inst_55967;
var state_55996__$1 = (function (){var statearr_56025 = state_55996;
(statearr_56025[(15)] = inst_55966);

(statearr_56025[(7)] = inst_55923);

return statearr_56025;
})();
var statearr_56026_57308 = state_55996__$1;
(statearr_56026_57308[(2)] = null);

(statearr_56026_57308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (25))){
var inst_55992 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56027_57310 = state_55996__$1;
(statearr_56027_57310[(2)] = inst_55992);

(statearr_56027_57310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (34))){
var inst_55990 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56028_57312 = state_55996__$1;
(statearr_56028_57312[(2)] = inst_55990);

(statearr_56028_57312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (17))){
var state_55996__$1 = state_55996;
var statearr_56029_57314 = state_55996__$1;
(statearr_56029_57314[(2)] = false);

(statearr_56029_57314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (3))){
var state_55996__$1 = state_55996;
var statearr_56030_57320 = state_55996__$1;
(statearr_56030_57320[(2)] = false);

(statearr_56030_57320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (12))){
var inst_55994 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55996__$1,inst_55994);
} else {
if((state_val_55997 === (2))){
var inst_55898 = (state_55996[(8)]);
var inst_55903 = inst_55898.cljs$lang$protocol_mask$partition0$;
var inst_55904 = (inst_55903 & (64));
var inst_55905 = inst_55898.cljs$core$ISeq$;
var inst_55906 = (cljs.core.PROTOCOL_SENTINEL === inst_55905);
var inst_55907 = ((inst_55904) || (inst_55906));
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55907)){
var statearr_56031_57325 = state_55996__$1;
(statearr_56031_57325[(1)] = (5));

} else {
var statearr_56032_57326 = state_55996__$1;
(statearr_56032_57326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (23))){
var inst_55955 = (state_55996[(14)]);
var inst_55961 = (inst_55955 == null);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55961)){
var statearr_56033_57327 = state_55996__$1;
(statearr_56033_57327[(1)] = (26));

} else {
var statearr_56034_57328 = state_55996__$1;
(statearr_56034_57328[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (35))){
var inst_55981 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55981)){
var statearr_56035_57329 = state_55996__$1;
(statearr_56035_57329[(1)] = (36));

} else {
var statearr_56036_57330 = state_55996__$1;
(statearr_56036_57330[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (19))){
var inst_55923 = (state_55996[(7)]);
var inst_55943 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55923);
var state_55996__$1 = state_55996;
var statearr_56037_57331 = state_55996__$1;
(statearr_56037_57331[(2)] = inst_55943);

(statearr_56037_57331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (11))){
var inst_55923 = (state_55996[(7)]);
var inst_55927 = (inst_55923 == null);
var inst_55928 = cljs.core.not(inst_55927);
var state_55996__$1 = state_55996;
if(inst_55928){
var statearr_56038_57332 = state_55996__$1;
(statearr_56038_57332[(1)] = (13));

} else {
var statearr_56039_57333 = state_55996__$1;
(statearr_56039_57333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (9))){
var inst_55898 = (state_55996[(8)]);
var state_55996__$1 = state_55996;
var statearr_56040_57334 = state_55996__$1;
(statearr_56040_57334[(2)] = inst_55898);

(statearr_56040_57334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (5))){
var state_55996__$1 = state_55996;
var statearr_56041_57335 = state_55996__$1;
(statearr_56041_57335[(2)] = true);

(statearr_56041_57335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (14))){
var state_55996__$1 = state_55996;
var statearr_56042_57336 = state_55996__$1;
(statearr_56042_57336[(2)] = false);

(statearr_56042_57336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (26))){
var inst_55956 = (state_55996[(11)]);
var inst_55963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55956);
var state_55996__$1 = state_55996;
var statearr_56043_57338 = state_55996__$1;
(statearr_56043_57338[(2)] = inst_55963);

(statearr_56043_57338[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (16))){
var state_55996__$1 = state_55996;
var statearr_56044_57339 = state_55996__$1;
(statearr_56044_57339[(2)] = true);

(statearr_56044_57339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (38))){
var inst_55986 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56045_57340 = state_55996__$1;
(statearr_56045_57340[(2)] = inst_55986);

(statearr_56045_57340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (30))){
var inst_55947 = (state_55996[(9)]);
var inst_55956 = (state_55996[(11)]);
var inst_55948 = (state_55996[(13)]);
var inst_55973 = cljs.core.empty_QMARK_(inst_55947);
var inst_55974 = (inst_55948.cljs$core$IFn$_invoke$arity$1 ? inst_55948.cljs$core$IFn$_invoke$arity$1(inst_55956) : inst_55948.call(null,inst_55956));
var inst_55975 = cljs.core.not(inst_55974);
var inst_55976 = ((inst_55973) && (inst_55975));
var state_55996__$1 = state_55996;
var statearr_56046_57342 = state_55996__$1;
(statearr_56046_57342[(2)] = inst_55976);

(statearr_56046_57342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (10))){
var inst_55898 = (state_55996[(8)]);
var inst_55919 = (state_55996[(2)]);
var inst_55920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55919,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55919,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55919,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55923 = inst_55898;
var state_55996__$1 = (function (){var statearr_56047 = state_55996;
(statearr_56047[(16)] = inst_55921);

(statearr_56047[(7)] = inst_55923);

(statearr_56047[(17)] = inst_55920);

(statearr_56047[(18)] = inst_55922);

return statearr_56047;
})();
var statearr_56048_57344 = state_55996__$1;
(statearr_56048_57344[(2)] = null);

(statearr_56048_57344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (18))){
var inst_55938 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56049_57346 = state_55996__$1;
(statearr_56049_57346[(2)] = inst_55938);

(statearr_56049_57346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (37))){
var state_55996__$1 = state_55996;
var statearr_56050_57353 = state_55996__$1;
(statearr_56050_57353[(2)] = null);

(statearr_56050_57353[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (8))){
var inst_55898 = (state_55996[(8)]);
var inst_55916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55898);
var state_55996__$1 = state_55996;
var statearr_56051_57355 = state_55996__$1;
(statearr_56051_57355[(2)] = inst_55916);

(statearr_56051_57355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57253,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__55026__auto__,c__55202__auto___57253,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__55027__auto__ = null;
var cljs$core$async$mix_$_state_machine__55027__auto____0 = (function (){
var statearr_56052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56052[(0)] = cljs$core$async$mix_$_state_machine__55027__auto__);

(statearr_56052[(1)] = (1));

return statearr_56052;
});
var cljs$core$async$mix_$_state_machine__55027__auto____1 = (function (state_55996){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_55996);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56053){if((e56053 instanceof Object)){
var ex__55030__auto__ = e56053;
var statearr_56054_57359 = state_55996;
(statearr_56054_57359[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57364 = state_55996;
state_55996 = G__57364;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55027__auto__ = function(state_55996){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55027__auto____1.call(this,state_55996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55027__auto____0;
cljs$core$async$mix_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55027__auto____1;
return cljs$core$async$mix_$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57253,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__55204__auto__ = (function (){var statearr_56055 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56055[(6)] = c__55202__auto___57253);

return statearr_56055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57253,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__56057 = arguments.length;
switch (G__56057) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__56060 = arguments.length;
switch (G__56060) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__56058_SHARP_){
if(cljs.core.truth_((p1__56058_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56058_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56058_SHARP_.call(null,topic)))){
return p1__56058_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56058_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56062 = meta56062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_56063,meta56062__$1){
var self__ = this;
var _56063__$1 = this;
return (new cljs.core.async.t_cljs$core$async56061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56062__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_56063){
var self__ = this;
var _56063__$1 = this;
return self__.meta56062;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56062","meta56062",1776658638,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async56061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56061";

cljs.core.async.t_cljs$core$async56061.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async56061");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56061.
 */
cljs.core.async.__GT_t_cljs$core$async56061 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async56061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56062){
return (new cljs.core.async.t_cljs$core$async56061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56062));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async56061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55202__auto___57387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57387,mults,ensure_mult,p){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57387,mults,ensure_mult,p){
return (function (state_56135){
var state_val_56136 = (state_56135[(1)]);
if((state_val_56136 === (7))){
var inst_56131 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56137_57389 = state_56135__$1;
(statearr_56137_57389[(2)] = inst_56131);

(statearr_56137_57389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (20))){
var state_56135__$1 = state_56135;
var statearr_56138_57390 = state_56135__$1;
(statearr_56138_57390[(2)] = null);

(statearr_56138_57390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (1))){
var state_56135__$1 = state_56135;
var statearr_56139_57391 = state_56135__$1;
(statearr_56139_57391[(2)] = null);

(statearr_56139_57391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (24))){
var inst_56114 = (state_56135[(7)]);
var inst_56123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_56114);
var state_56135__$1 = state_56135;
var statearr_56140_57392 = state_56135__$1;
(statearr_56140_57392[(2)] = inst_56123);

(statearr_56140_57392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (4))){
var inst_56066 = (state_56135[(8)]);
var inst_56066__$1 = (state_56135[(2)]);
var inst_56067 = (inst_56066__$1 == null);
var state_56135__$1 = (function (){var statearr_56141 = state_56135;
(statearr_56141[(8)] = inst_56066__$1);

return statearr_56141;
})();
if(cljs.core.truth_(inst_56067)){
var statearr_56142_57401 = state_56135__$1;
(statearr_56142_57401[(1)] = (5));

} else {
var statearr_56143_57402 = state_56135__$1;
(statearr_56143_57402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (15))){
var inst_56108 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56144_57406 = state_56135__$1;
(statearr_56144_57406[(2)] = inst_56108);

(statearr_56144_57406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (21))){
var inst_56128 = (state_56135[(2)]);
var state_56135__$1 = (function (){var statearr_56145 = state_56135;
(statearr_56145[(9)] = inst_56128);

return statearr_56145;
})();
var statearr_56146_57410 = state_56135__$1;
(statearr_56146_57410[(2)] = null);

(statearr_56146_57410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (13))){
var inst_56090 = (state_56135[(10)]);
var inst_56092 = cljs.core.chunked_seq_QMARK_(inst_56090);
var state_56135__$1 = state_56135;
if(inst_56092){
var statearr_56147_57414 = state_56135__$1;
(statearr_56147_57414[(1)] = (16));

} else {
var statearr_56148_57415 = state_56135__$1;
(statearr_56148_57415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (22))){
var inst_56120 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
if(cljs.core.truth_(inst_56120)){
var statearr_56149_57416 = state_56135__$1;
(statearr_56149_57416[(1)] = (23));

} else {
var statearr_56150_57417 = state_56135__$1;
(statearr_56150_57417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (6))){
var inst_56114 = (state_56135[(7)]);
var inst_56066 = (state_56135[(8)]);
var inst_56116 = (state_56135[(11)]);
var inst_56114__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56066) : topic_fn.call(null,inst_56066));
var inst_56115 = cljs.core.deref(mults);
var inst_56116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56115,inst_56114__$1);
var state_56135__$1 = (function (){var statearr_56151 = state_56135;
(statearr_56151[(7)] = inst_56114__$1);

(statearr_56151[(11)] = inst_56116__$1);

return statearr_56151;
})();
if(cljs.core.truth_(inst_56116__$1)){
var statearr_56152_57422 = state_56135__$1;
(statearr_56152_57422[(1)] = (19));

} else {
var statearr_56153_57423 = state_56135__$1;
(statearr_56153_57423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (25))){
var inst_56125 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56154_57424 = state_56135__$1;
(statearr_56154_57424[(2)] = inst_56125);

(statearr_56154_57424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (17))){
var inst_56090 = (state_56135[(10)]);
var inst_56099 = cljs.core.first(inst_56090);
var inst_56100 = cljs.core.async.muxch_STAR_(inst_56099);
var inst_56101 = cljs.core.async.close_BANG_(inst_56100);
var inst_56102 = cljs.core.next(inst_56090);
var inst_56076 = inst_56102;
var inst_56077 = null;
var inst_56078 = (0);
var inst_56079 = (0);
var state_56135__$1 = (function (){var statearr_56155 = state_56135;
(statearr_56155[(12)] = inst_56076);

(statearr_56155[(13)] = inst_56079);

(statearr_56155[(14)] = inst_56101);

(statearr_56155[(15)] = inst_56077);

(statearr_56155[(16)] = inst_56078);

return statearr_56155;
})();
var statearr_56156_57431 = state_56135__$1;
(statearr_56156_57431[(2)] = null);

(statearr_56156_57431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (3))){
var inst_56133 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56135__$1,inst_56133);
} else {
if((state_val_56136 === (12))){
var inst_56110 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56157_57433 = state_56135__$1;
(statearr_56157_57433[(2)] = inst_56110);

(statearr_56157_57433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (2))){
var state_56135__$1 = state_56135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56135__$1,(4),ch);
} else {
if((state_val_56136 === (23))){
var state_56135__$1 = state_56135;
var statearr_56158_57434 = state_56135__$1;
(statearr_56158_57434[(2)] = null);

(statearr_56158_57434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (19))){
var inst_56066 = (state_56135[(8)]);
var inst_56116 = (state_56135[(11)]);
var inst_56118 = cljs.core.async.muxch_STAR_(inst_56116);
var state_56135__$1 = state_56135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56135__$1,(22),inst_56118,inst_56066);
} else {
if((state_val_56136 === (11))){
var inst_56090 = (state_56135[(10)]);
var inst_56076 = (state_56135[(12)]);
var inst_56090__$1 = cljs.core.seq(inst_56076);
var state_56135__$1 = (function (){var statearr_56159 = state_56135;
(statearr_56159[(10)] = inst_56090__$1);

return statearr_56159;
})();
if(inst_56090__$1){
var statearr_56160_57435 = state_56135__$1;
(statearr_56160_57435[(1)] = (13));

} else {
var statearr_56161_57436 = state_56135__$1;
(statearr_56161_57436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (9))){
var inst_56112 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56162_57438 = state_56135__$1;
(statearr_56162_57438[(2)] = inst_56112);

(statearr_56162_57438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (5))){
var inst_56073 = cljs.core.deref(mults);
var inst_56074 = cljs.core.vals(inst_56073);
var inst_56075 = cljs.core.seq(inst_56074);
var inst_56076 = inst_56075;
var inst_56077 = null;
var inst_56078 = (0);
var inst_56079 = (0);
var state_56135__$1 = (function (){var statearr_56163 = state_56135;
(statearr_56163[(12)] = inst_56076);

(statearr_56163[(13)] = inst_56079);

(statearr_56163[(15)] = inst_56077);

(statearr_56163[(16)] = inst_56078);

return statearr_56163;
})();
var statearr_56164_57441 = state_56135__$1;
(statearr_56164_57441[(2)] = null);

(statearr_56164_57441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (14))){
var state_56135__$1 = state_56135;
var statearr_56168_57444 = state_56135__$1;
(statearr_56168_57444[(2)] = null);

(statearr_56168_57444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (16))){
var inst_56090 = (state_56135[(10)]);
var inst_56094 = cljs.core.chunk_first(inst_56090);
var inst_56095 = cljs.core.chunk_rest(inst_56090);
var inst_56096 = cljs.core.count(inst_56094);
var inst_56076 = inst_56095;
var inst_56077 = inst_56094;
var inst_56078 = inst_56096;
var inst_56079 = (0);
var state_56135__$1 = (function (){var statearr_56169 = state_56135;
(statearr_56169[(12)] = inst_56076);

(statearr_56169[(13)] = inst_56079);

(statearr_56169[(15)] = inst_56077);

(statearr_56169[(16)] = inst_56078);

return statearr_56169;
})();
var statearr_56170_57450 = state_56135__$1;
(statearr_56170_57450[(2)] = null);

(statearr_56170_57450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (10))){
var inst_56076 = (state_56135[(12)]);
var inst_56079 = (state_56135[(13)]);
var inst_56077 = (state_56135[(15)]);
var inst_56078 = (state_56135[(16)]);
var inst_56084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56077,inst_56079);
var inst_56085 = cljs.core.async.muxch_STAR_(inst_56084);
var inst_56086 = cljs.core.async.close_BANG_(inst_56085);
var inst_56087 = (inst_56079 + (1));
var tmp56165 = inst_56076;
var tmp56166 = inst_56077;
var tmp56167 = inst_56078;
var inst_56076__$1 = tmp56165;
var inst_56077__$1 = tmp56166;
var inst_56078__$1 = tmp56167;
var inst_56079__$1 = inst_56087;
var state_56135__$1 = (function (){var statearr_56171 = state_56135;
(statearr_56171[(12)] = inst_56076__$1);

(statearr_56171[(17)] = inst_56086);

(statearr_56171[(13)] = inst_56079__$1);

(statearr_56171[(15)] = inst_56077__$1);

(statearr_56171[(16)] = inst_56078__$1);

return statearr_56171;
})();
var statearr_56172_57451 = state_56135__$1;
(statearr_56172_57451[(2)] = null);

(statearr_56172_57451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (18))){
var inst_56105 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56173_57452 = state_56135__$1;
(statearr_56173_57452[(2)] = inst_56105);

(statearr_56173_57452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (8))){
var inst_56079 = (state_56135[(13)]);
var inst_56078 = (state_56135[(16)]);
var inst_56081 = (inst_56079 < inst_56078);
var inst_56082 = inst_56081;
var state_56135__$1 = state_56135;
if(cljs.core.truth_(inst_56082)){
var statearr_56174_57454 = state_56135__$1;
(statearr_56174_57454[(1)] = (10));

} else {
var statearr_56175_57455 = state_56135__$1;
(statearr_56175_57455[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57387,mults,ensure_mult,p))
;
return ((function (switch__55026__auto__,c__55202__auto___57387,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56176[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56176[(1)] = (1));

return statearr_56176;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56135){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56135);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56177){if((e56177 instanceof Object)){
var ex__55030__auto__ = e56177;
var statearr_56178_57456 = state_56135;
(statearr_56178_57456[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57458 = state_56135;
state_56135 = G__57458;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57387,mults,ensure_mult,p))
})();
var state__55204__auto__ = (function (){var statearr_56179 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56179[(6)] = c__55202__auto___57387);

return statearr_56179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57387,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__56181 = arguments.length;
switch (G__56181) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__56183 = arguments.length;
switch (G__56183) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__56185 = arguments.length;
switch (G__56185) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__55202__auto___57473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_56224){
var state_val_56225 = (state_56224[(1)]);
if((state_val_56225 === (7))){
var state_56224__$1 = state_56224;
var statearr_56226_57477 = state_56224__$1;
(statearr_56226_57477[(2)] = null);

(statearr_56226_57477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (1))){
var state_56224__$1 = state_56224;
var statearr_56227_57478 = state_56224__$1;
(statearr_56227_57478[(2)] = null);

(statearr_56227_57478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (4))){
var inst_56188 = (state_56224[(7)]);
var inst_56190 = (inst_56188 < cnt);
var state_56224__$1 = state_56224;
if(cljs.core.truth_(inst_56190)){
var statearr_56228_57482 = state_56224__$1;
(statearr_56228_57482[(1)] = (6));

} else {
var statearr_56229_57484 = state_56224__$1;
(statearr_56229_57484[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (15))){
var inst_56220 = (state_56224[(2)]);
var state_56224__$1 = state_56224;
var statearr_56230_57487 = state_56224__$1;
(statearr_56230_57487[(2)] = inst_56220);

(statearr_56230_57487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (13))){
var inst_56213 = cljs.core.async.close_BANG_(out);
var state_56224__$1 = state_56224;
var statearr_56231_57488 = state_56224__$1;
(statearr_56231_57488[(2)] = inst_56213);

(statearr_56231_57488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (6))){
var state_56224__$1 = state_56224;
var statearr_56232_57489 = state_56224__$1;
(statearr_56232_57489[(2)] = null);

(statearr_56232_57489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (3))){
var inst_56222 = (state_56224[(2)]);
var state_56224__$1 = state_56224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56224__$1,inst_56222);
} else {
if((state_val_56225 === (12))){
var inst_56210 = (state_56224[(8)]);
var inst_56210__$1 = (state_56224[(2)]);
var inst_56211 = cljs.core.some(cljs.core.nil_QMARK_,inst_56210__$1);
var state_56224__$1 = (function (){var statearr_56233 = state_56224;
(statearr_56233[(8)] = inst_56210__$1);

return statearr_56233;
})();
if(cljs.core.truth_(inst_56211)){
var statearr_56234_57494 = state_56224__$1;
(statearr_56234_57494[(1)] = (13));

} else {
var statearr_56235_57495 = state_56224__$1;
(statearr_56235_57495[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (2))){
var inst_56187 = cljs.core.reset_BANG_(dctr,cnt);
var inst_56188 = (0);
var state_56224__$1 = (function (){var statearr_56236 = state_56224;
(statearr_56236[(9)] = inst_56187);

(statearr_56236[(7)] = inst_56188);

return statearr_56236;
})();
var statearr_56237_57497 = state_56224__$1;
(statearr_56237_57497[(2)] = null);

(statearr_56237_57497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (11))){
var inst_56188 = (state_56224[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_56224,(10),Object,null,(9));
var inst_56197 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_56188) : chs__$1.call(null,inst_56188));
var inst_56198 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_56188) : done.call(null,inst_56188));
var inst_56199 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56197,inst_56198);
var state_56224__$1 = state_56224;
var statearr_56238_57498 = state_56224__$1;
(statearr_56238_57498[(2)] = inst_56199);


cljs.core.async.impl.ioc_helpers.process_exception(state_56224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (9))){
var inst_56188 = (state_56224[(7)]);
var inst_56201 = (state_56224[(2)]);
var inst_56202 = (inst_56188 + (1));
var inst_56188__$1 = inst_56202;
var state_56224__$1 = (function (){var statearr_56239 = state_56224;
(statearr_56239[(10)] = inst_56201);

(statearr_56239[(7)] = inst_56188__$1);

return statearr_56239;
})();
var statearr_56240_57508 = state_56224__$1;
(statearr_56240_57508[(2)] = null);

(statearr_56240_57508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (5))){
var inst_56208 = (state_56224[(2)]);
var state_56224__$1 = (function (){var statearr_56241 = state_56224;
(statearr_56241[(11)] = inst_56208);

return statearr_56241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56224__$1,(12),dchan);
} else {
if((state_val_56225 === (14))){
var inst_56210 = (state_56224[(8)]);
var inst_56215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_56210);
var state_56224__$1 = state_56224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56224__$1,(16),out,inst_56215);
} else {
if((state_val_56225 === (16))){
var inst_56217 = (state_56224[(2)]);
var state_56224__$1 = (function (){var statearr_56242 = state_56224;
(statearr_56242[(12)] = inst_56217);

return statearr_56242;
})();
var statearr_56243_57515 = state_56224__$1;
(statearr_56243_57515[(2)] = null);

(statearr_56243_57515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (10))){
var inst_56192 = (state_56224[(2)]);
var inst_56193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_56224__$1 = (function (){var statearr_56244 = state_56224;
(statearr_56244[(13)] = inst_56192);

return statearr_56244;
})();
var statearr_56245_57516 = state_56224__$1;
(statearr_56245_57516[(2)] = inst_56193);


cljs.core.async.impl.ioc_helpers.process_exception(state_56224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56225 === (8))){
var inst_56206 = (state_56224[(2)]);
var state_56224__$1 = state_56224;
var statearr_56246_57517 = state_56224__$1;
(statearr_56246_57517[(2)] = inst_56206);

(statearr_56246_57517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57473,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__55026__auto__,c__55202__auto___57473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56247[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56247[(1)] = (1));

return statearr_56247;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56224){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56224);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56248){if((e56248 instanceof Object)){
var ex__55030__auto__ = e56248;
var statearr_56249_57522 = state_56224;
(statearr_56249_57522[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57523 = state_56224;
state_56224 = G__57523;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57473,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__55204__auto__ = (function (){var statearr_56250 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56250[(6)] = c__55202__auto___57473);

return statearr_56250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57473,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__56253 = arguments.length;
switch (G__56253) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55202__auto___57537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57537,out){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57537,out){
return (function (state_56285){
var state_val_56286 = (state_56285[(1)]);
if((state_val_56286 === (7))){
var inst_56264 = (state_56285[(7)]);
var inst_56265 = (state_56285[(8)]);
var inst_56264__$1 = (state_56285[(2)]);
var inst_56265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56264__$1,(0),null);
var inst_56266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56264__$1,(1),null);
var inst_56267 = (inst_56265__$1 == null);
var state_56285__$1 = (function (){var statearr_56287 = state_56285;
(statearr_56287[(9)] = inst_56266);

(statearr_56287[(7)] = inst_56264__$1);

(statearr_56287[(8)] = inst_56265__$1);

return statearr_56287;
})();
if(cljs.core.truth_(inst_56267)){
var statearr_56288_57541 = state_56285__$1;
(statearr_56288_57541[(1)] = (8));

} else {
var statearr_56289_57550 = state_56285__$1;
(statearr_56289_57550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (1))){
var inst_56254 = cljs.core.vec(chs);
var inst_56255 = inst_56254;
var state_56285__$1 = (function (){var statearr_56290 = state_56285;
(statearr_56290[(10)] = inst_56255);

return statearr_56290;
})();
var statearr_56291_57552 = state_56285__$1;
(statearr_56291_57552[(2)] = null);

(statearr_56291_57552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (4))){
var inst_56255 = (state_56285[(10)]);
var state_56285__$1 = state_56285;
return cljs.core.async.ioc_alts_BANG_(state_56285__$1,(7),inst_56255);
} else {
if((state_val_56286 === (6))){
var inst_56281 = (state_56285[(2)]);
var state_56285__$1 = state_56285;
var statearr_56292_57556 = state_56285__$1;
(statearr_56292_57556[(2)] = inst_56281);

(statearr_56292_57556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (3))){
var inst_56283 = (state_56285[(2)]);
var state_56285__$1 = state_56285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56285__$1,inst_56283);
} else {
if((state_val_56286 === (2))){
var inst_56255 = (state_56285[(10)]);
var inst_56257 = cljs.core.count(inst_56255);
var inst_56258 = (inst_56257 > (0));
var state_56285__$1 = state_56285;
if(cljs.core.truth_(inst_56258)){
var statearr_56294_57559 = state_56285__$1;
(statearr_56294_57559[(1)] = (4));

} else {
var statearr_56295_57561 = state_56285__$1;
(statearr_56295_57561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (11))){
var inst_56255 = (state_56285[(10)]);
var inst_56274 = (state_56285[(2)]);
var tmp56293 = inst_56255;
var inst_56255__$1 = tmp56293;
var state_56285__$1 = (function (){var statearr_56296 = state_56285;
(statearr_56296[(10)] = inst_56255__$1);

(statearr_56296[(11)] = inst_56274);

return statearr_56296;
})();
var statearr_56297_57565 = state_56285__$1;
(statearr_56297_57565[(2)] = null);

(statearr_56297_57565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (9))){
var inst_56265 = (state_56285[(8)]);
var state_56285__$1 = state_56285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56285__$1,(11),out,inst_56265);
} else {
if((state_val_56286 === (5))){
var inst_56279 = cljs.core.async.close_BANG_(out);
var state_56285__$1 = state_56285;
var statearr_56298_57573 = state_56285__$1;
(statearr_56298_57573[(2)] = inst_56279);

(statearr_56298_57573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (10))){
var inst_56277 = (state_56285[(2)]);
var state_56285__$1 = state_56285;
var statearr_56299_57574 = state_56285__$1;
(statearr_56299_57574[(2)] = inst_56277);

(statearr_56299_57574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56286 === (8))){
var inst_56255 = (state_56285[(10)]);
var inst_56266 = (state_56285[(9)]);
var inst_56264 = (state_56285[(7)]);
var inst_56265 = (state_56285[(8)]);
var inst_56269 = (function (){var cs = inst_56255;
var vec__56260 = inst_56264;
var v = inst_56265;
var c = inst_56266;
return ((function (cs,vec__56260,v,c,inst_56255,inst_56266,inst_56264,inst_56265,state_val_56286,c__55202__auto___57537,out){
return (function (p1__56251_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__56251_SHARP_);
});
;})(cs,vec__56260,v,c,inst_56255,inst_56266,inst_56264,inst_56265,state_val_56286,c__55202__auto___57537,out))
})();
var inst_56270 = cljs.core.filterv(inst_56269,inst_56255);
var inst_56255__$1 = inst_56270;
var state_56285__$1 = (function (){var statearr_56300 = state_56285;
(statearr_56300[(10)] = inst_56255__$1);

return statearr_56300;
})();
var statearr_56301_57582 = state_56285__$1;
(statearr_56301_57582[(2)] = null);

(statearr_56301_57582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57537,out))
;
return ((function (switch__55026__auto__,c__55202__auto___57537,out){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56302[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56302[(1)] = (1));

return statearr_56302;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56285){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56285);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56303){if((e56303 instanceof Object)){
var ex__55030__auto__ = e56303;
var statearr_56304_57583 = state_56285;
(statearr_56304_57583[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57587 = state_56285;
state_56285 = G__57587;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57537,out))
})();
var state__55204__auto__ = (function (){var statearr_56305 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56305[(6)] = c__55202__auto___57537);

return statearr_56305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57537,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__56307 = arguments.length;
switch (G__56307) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55202__auto___57592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57592,out){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57592,out){
return (function (state_56331){
var state_val_56332 = (state_56331[(1)]);
if((state_val_56332 === (7))){
var inst_56313 = (state_56331[(7)]);
var inst_56313__$1 = (state_56331[(2)]);
var inst_56314 = (inst_56313__$1 == null);
var inst_56315 = cljs.core.not(inst_56314);
var state_56331__$1 = (function (){var statearr_56333 = state_56331;
(statearr_56333[(7)] = inst_56313__$1);

return statearr_56333;
})();
if(inst_56315){
var statearr_56334_57595 = state_56331__$1;
(statearr_56334_57595[(1)] = (8));

} else {
var statearr_56335_57598 = state_56331__$1;
(statearr_56335_57598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (1))){
var inst_56308 = (0);
var state_56331__$1 = (function (){var statearr_56336 = state_56331;
(statearr_56336[(8)] = inst_56308);

return statearr_56336;
})();
var statearr_56337_57599 = state_56331__$1;
(statearr_56337_57599[(2)] = null);

(statearr_56337_57599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (4))){
var state_56331__$1 = state_56331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56331__$1,(7),ch);
} else {
if((state_val_56332 === (6))){
var inst_56326 = (state_56331[(2)]);
var state_56331__$1 = state_56331;
var statearr_56338_57601 = state_56331__$1;
(statearr_56338_57601[(2)] = inst_56326);

(statearr_56338_57601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (3))){
var inst_56328 = (state_56331[(2)]);
var inst_56329 = cljs.core.async.close_BANG_(out);
var state_56331__$1 = (function (){var statearr_56339 = state_56331;
(statearr_56339[(9)] = inst_56328);

return statearr_56339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56331__$1,inst_56329);
} else {
if((state_val_56332 === (2))){
var inst_56308 = (state_56331[(8)]);
var inst_56310 = (inst_56308 < n);
var state_56331__$1 = state_56331;
if(cljs.core.truth_(inst_56310)){
var statearr_56340_57609 = state_56331__$1;
(statearr_56340_57609[(1)] = (4));

} else {
var statearr_56341_57610 = state_56331__$1;
(statearr_56341_57610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (11))){
var inst_56308 = (state_56331[(8)]);
var inst_56318 = (state_56331[(2)]);
var inst_56319 = (inst_56308 + (1));
var inst_56308__$1 = inst_56319;
var state_56331__$1 = (function (){var statearr_56342 = state_56331;
(statearr_56342[(10)] = inst_56318);

(statearr_56342[(8)] = inst_56308__$1);

return statearr_56342;
})();
var statearr_56343_57620 = state_56331__$1;
(statearr_56343_57620[(2)] = null);

(statearr_56343_57620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (9))){
var state_56331__$1 = state_56331;
var statearr_56344_57621 = state_56331__$1;
(statearr_56344_57621[(2)] = null);

(statearr_56344_57621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (5))){
var state_56331__$1 = state_56331;
var statearr_56345_57622 = state_56331__$1;
(statearr_56345_57622[(2)] = null);

(statearr_56345_57622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (10))){
var inst_56323 = (state_56331[(2)]);
var state_56331__$1 = state_56331;
var statearr_56346_57624 = state_56331__$1;
(statearr_56346_57624[(2)] = inst_56323);

(statearr_56346_57624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56332 === (8))){
var inst_56313 = (state_56331[(7)]);
var state_56331__$1 = state_56331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56331__$1,(11),out,inst_56313);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57592,out))
;
return ((function (switch__55026__auto__,c__55202__auto___57592,out){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56347[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56347[(1)] = (1));

return statearr_56347;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56331){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56331);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56348){if((e56348 instanceof Object)){
var ex__55030__auto__ = e56348;
var statearr_56349_57628 = state_56331;
(statearr_56349_57628[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57629 = state_56331;
state_56331 = G__57629;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57592,out))
})();
var state__55204__auto__ = (function (){var statearr_56350 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56350[(6)] = c__55202__auto___57592);

return statearr_56350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57592,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56352 = (function (f,ch,meta56353){
this.f = f;
this.ch = ch;
this.meta56353 = meta56353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56354,meta56353__$1){
var self__ = this;
var _56354__$1 = this;
return (new cljs.core.async.t_cljs$core$async56352(self__.f,self__.ch,meta56353__$1));
});

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56354){
var self__ = this;
var _56354__$1 = this;
return self__.meta56353;
});

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56355 = (function (f,ch,meta56353,_,fn1,meta56356){
this.f = f;
this.ch = ch;
this.meta56353 = meta56353;
this._ = _;
this.fn1 = fn1;
this.meta56356 = meta56356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_56357,meta56356__$1){
var self__ = this;
var _56357__$1 = this;
return (new cljs.core.async.t_cljs$core$async56355(self__.f,self__.ch,self__.meta56353,self__._,self__.fn1,meta56356__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async56355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_56357){
var self__ = this;
var _56357__$1 = this;
return self__.meta56356;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__56351_SHARP_){
var G__56358 = (((p1__56351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__56351_SHARP_) : self__.f.call(null,p1__56351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__56358) : f1.call(null,G__56358));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async56355.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56353","meta56353",-1700984167,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56352","cljs.core.async/t_cljs$core$async56352",1811407091,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56356","meta56356",-441701948,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56355";

cljs.core.async.t_cljs$core$async56355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async56355");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56355.
 */
cljs.core.async.__GT_t_cljs$core$async56355 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56355(f__$1,ch__$1,meta56353__$1,___$2,fn1__$1,meta56356){
return (new cljs.core.async.t_cljs$core$async56355(f__$1,ch__$1,meta56353__$1,___$2,fn1__$1,meta56356));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async56355(self__.f,self__.ch,self__.meta56353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__56359 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__56359) : self__.f.call(null,G__56359));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async56352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56353","meta56353",-1700984167,null)], null);
});

cljs.core.async.t_cljs$core$async56352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56352";

cljs.core.async.t_cljs$core$async56352.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async56352");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56352.
 */
cljs.core.async.__GT_t_cljs$core$async56352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56352(f__$1,ch__$1,meta56353){
return (new cljs.core.async.t_cljs$core$async56352(f__$1,ch__$1,meta56353));
});

}

return (new cljs.core.async.t_cljs$core$async56352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56360 = (function (f,ch,meta56361){
this.f = f;
this.ch = ch;
this.meta56361 = meta56361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56362,meta56361__$1){
var self__ = this;
var _56362__$1 = this;
return (new cljs.core.async.t_cljs$core$async56360(self__.f,self__.ch,meta56361__$1));
});

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56362){
var self__ = this;
var _56362__$1 = this;
return self__.meta56361;
});

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async56360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56361","meta56361",1466132028,null)], null);
});

cljs.core.async.t_cljs$core$async56360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56360";

cljs.core.async.t_cljs$core$async56360.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async56360");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56360.
 */
cljs.core.async.__GT_t_cljs$core$async56360 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56360(f__$1,ch__$1,meta56361){
return (new cljs.core.async.t_cljs$core$async56360(f__$1,ch__$1,meta56361));
});

}

return (new cljs.core.async.t_cljs$core$async56360(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56363 = (function (p,ch,meta56364){
this.p = p;
this.ch = ch;
this.meta56364 = meta56364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56365,meta56364__$1){
var self__ = this;
var _56365__$1 = this;
return (new cljs.core.async.t_cljs$core$async56363(self__.p,self__.ch,meta56364__$1));
});

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56365){
var self__ = this;
var _56365__$1 = this;
return self__.meta56364;
});

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async56363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56364","meta56364",-71482432,null)], null);
});

cljs.core.async.t_cljs$core$async56363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56363";

cljs.core.async.t_cljs$core$async56363.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async56363");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56363.
 */
cljs.core.async.__GT_t_cljs$core$async56363 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56363(p__$1,ch__$1,meta56364){
return (new cljs.core.async.t_cljs$core$async56363(p__$1,ch__$1,meta56364));
});

}

return (new cljs.core.async.t_cljs$core$async56363(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__56367 = arguments.length;
switch (G__56367) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55202__auto___57657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57657,out){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57657,out){
return (function (state_56388){
var state_val_56389 = (state_56388[(1)]);
if((state_val_56389 === (7))){
var inst_56384 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56390_57658 = state_56388__$1;
(statearr_56390_57658[(2)] = inst_56384);

(statearr_56390_57658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (1))){
var state_56388__$1 = state_56388;
var statearr_56391_57659 = state_56388__$1;
(statearr_56391_57659[(2)] = null);

(statearr_56391_57659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (4))){
var inst_56370 = (state_56388[(7)]);
var inst_56370__$1 = (state_56388[(2)]);
var inst_56371 = (inst_56370__$1 == null);
var state_56388__$1 = (function (){var statearr_56392 = state_56388;
(statearr_56392[(7)] = inst_56370__$1);

return statearr_56392;
})();
if(cljs.core.truth_(inst_56371)){
var statearr_56393_57660 = state_56388__$1;
(statearr_56393_57660[(1)] = (5));

} else {
var statearr_56394_57661 = state_56388__$1;
(statearr_56394_57661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (6))){
var inst_56370 = (state_56388[(7)]);
var inst_56375 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56370) : p.call(null,inst_56370));
var state_56388__$1 = state_56388;
if(cljs.core.truth_(inst_56375)){
var statearr_56395_57667 = state_56388__$1;
(statearr_56395_57667[(1)] = (8));

} else {
var statearr_56396_57668 = state_56388__$1;
(statearr_56396_57668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (3))){
var inst_56386 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56388__$1,inst_56386);
} else {
if((state_val_56389 === (2))){
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56388__$1,(4),ch);
} else {
if((state_val_56389 === (11))){
var inst_56378 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56397_57673 = state_56388__$1;
(statearr_56397_57673[(2)] = inst_56378);

(statearr_56397_57673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (9))){
var state_56388__$1 = state_56388;
var statearr_56398_57677 = state_56388__$1;
(statearr_56398_57677[(2)] = null);

(statearr_56398_57677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (5))){
var inst_56373 = cljs.core.async.close_BANG_(out);
var state_56388__$1 = state_56388;
var statearr_56399_57682 = state_56388__$1;
(statearr_56399_57682[(2)] = inst_56373);

(statearr_56399_57682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (10))){
var inst_56381 = (state_56388[(2)]);
var state_56388__$1 = (function (){var statearr_56400 = state_56388;
(statearr_56400[(8)] = inst_56381);

return statearr_56400;
})();
var statearr_56401_57687 = state_56388__$1;
(statearr_56401_57687[(2)] = null);

(statearr_56401_57687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (8))){
var inst_56370 = (state_56388[(7)]);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56388__$1,(11),out,inst_56370);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57657,out))
;
return ((function (switch__55026__auto__,c__55202__auto___57657,out){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56402 = [null,null,null,null,null,null,null,null,null];
(statearr_56402[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56402[(1)] = (1));

return statearr_56402;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56388){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56388);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56403){if((e56403 instanceof Object)){
var ex__55030__auto__ = e56403;
var statearr_56404_57694 = state_56388;
(statearr_56404_57694[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57696 = state_56388;
state_56388 = G__57696;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57657,out))
})();
var state__55204__auto__ = (function (){var statearr_56405 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56405[(6)] = c__55202__auto___57657);

return statearr_56405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57657,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__56407 = arguments.length;
switch (G__56407) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__){
return (function (state_56469){
var state_val_56470 = (state_56469[(1)]);
if((state_val_56470 === (7))){
var inst_56465 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
var statearr_56471_57713 = state_56469__$1;
(statearr_56471_57713[(2)] = inst_56465);

(statearr_56471_57713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (20))){
var inst_56435 = (state_56469[(7)]);
var inst_56446 = (state_56469[(2)]);
var inst_56447 = cljs.core.next(inst_56435);
var inst_56421 = inst_56447;
var inst_56422 = null;
var inst_56423 = (0);
var inst_56424 = (0);
var state_56469__$1 = (function (){var statearr_56472 = state_56469;
(statearr_56472[(8)] = inst_56424);

(statearr_56472[(9)] = inst_56423);

(statearr_56472[(10)] = inst_56422);

(statearr_56472[(11)] = inst_56446);

(statearr_56472[(12)] = inst_56421);

return statearr_56472;
})();
var statearr_56473_57719 = state_56469__$1;
(statearr_56473_57719[(2)] = null);

(statearr_56473_57719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (1))){
var state_56469__$1 = state_56469;
var statearr_56474_57724 = state_56469__$1;
(statearr_56474_57724[(2)] = null);

(statearr_56474_57724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (4))){
var inst_56410 = (state_56469[(13)]);
var inst_56410__$1 = (state_56469[(2)]);
var inst_56411 = (inst_56410__$1 == null);
var state_56469__$1 = (function (){var statearr_56475 = state_56469;
(statearr_56475[(13)] = inst_56410__$1);

return statearr_56475;
})();
if(cljs.core.truth_(inst_56411)){
var statearr_56476_57729 = state_56469__$1;
(statearr_56476_57729[(1)] = (5));

} else {
var statearr_56477_57733 = state_56469__$1;
(statearr_56477_57733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (15))){
var state_56469__$1 = state_56469;
var statearr_56481_57734 = state_56469__$1;
(statearr_56481_57734[(2)] = null);

(statearr_56481_57734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (21))){
var state_56469__$1 = state_56469;
var statearr_56482_57740 = state_56469__$1;
(statearr_56482_57740[(2)] = null);

(statearr_56482_57740[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (13))){
var inst_56424 = (state_56469[(8)]);
var inst_56423 = (state_56469[(9)]);
var inst_56422 = (state_56469[(10)]);
var inst_56421 = (state_56469[(12)]);
var inst_56431 = (state_56469[(2)]);
var inst_56432 = (inst_56424 + (1));
var tmp56478 = inst_56423;
var tmp56479 = inst_56422;
var tmp56480 = inst_56421;
var inst_56421__$1 = tmp56480;
var inst_56422__$1 = tmp56479;
var inst_56423__$1 = tmp56478;
var inst_56424__$1 = inst_56432;
var state_56469__$1 = (function (){var statearr_56483 = state_56469;
(statearr_56483[(8)] = inst_56424__$1);

(statearr_56483[(9)] = inst_56423__$1);

(statearr_56483[(10)] = inst_56422__$1);

(statearr_56483[(12)] = inst_56421__$1);

(statearr_56483[(14)] = inst_56431);

return statearr_56483;
})();
var statearr_56484_57747 = state_56469__$1;
(statearr_56484_57747[(2)] = null);

(statearr_56484_57747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (22))){
var state_56469__$1 = state_56469;
var statearr_56485_57750 = state_56469__$1;
(statearr_56485_57750[(2)] = null);

(statearr_56485_57750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (6))){
var inst_56410 = (state_56469[(13)]);
var inst_56419 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56410) : f.call(null,inst_56410));
var inst_56420 = cljs.core.seq(inst_56419);
var inst_56421 = inst_56420;
var inst_56422 = null;
var inst_56423 = (0);
var inst_56424 = (0);
var state_56469__$1 = (function (){var statearr_56486 = state_56469;
(statearr_56486[(8)] = inst_56424);

(statearr_56486[(9)] = inst_56423);

(statearr_56486[(10)] = inst_56422);

(statearr_56486[(12)] = inst_56421);

return statearr_56486;
})();
var statearr_56487_57751 = state_56469__$1;
(statearr_56487_57751[(2)] = null);

(statearr_56487_57751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (17))){
var inst_56435 = (state_56469[(7)]);
var inst_56439 = cljs.core.chunk_first(inst_56435);
var inst_56440 = cljs.core.chunk_rest(inst_56435);
var inst_56441 = cljs.core.count(inst_56439);
var inst_56421 = inst_56440;
var inst_56422 = inst_56439;
var inst_56423 = inst_56441;
var inst_56424 = (0);
var state_56469__$1 = (function (){var statearr_56488 = state_56469;
(statearr_56488[(8)] = inst_56424);

(statearr_56488[(9)] = inst_56423);

(statearr_56488[(10)] = inst_56422);

(statearr_56488[(12)] = inst_56421);

return statearr_56488;
})();
var statearr_56489_57755 = state_56469__$1;
(statearr_56489_57755[(2)] = null);

(statearr_56489_57755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (3))){
var inst_56467 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56469__$1,inst_56467);
} else {
if((state_val_56470 === (12))){
var inst_56455 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
var statearr_56490_57762 = state_56469__$1;
(statearr_56490_57762[(2)] = inst_56455);

(statearr_56490_57762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (2))){
var state_56469__$1 = state_56469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56469__$1,(4),in$);
} else {
if((state_val_56470 === (23))){
var inst_56463 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
var statearr_56491_57766 = state_56469__$1;
(statearr_56491_57766[(2)] = inst_56463);

(statearr_56491_57766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (19))){
var inst_56450 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
var statearr_56492_57768 = state_56469__$1;
(statearr_56492_57768[(2)] = inst_56450);

(statearr_56492_57768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (11))){
var inst_56435 = (state_56469[(7)]);
var inst_56421 = (state_56469[(12)]);
var inst_56435__$1 = cljs.core.seq(inst_56421);
var state_56469__$1 = (function (){var statearr_56493 = state_56469;
(statearr_56493[(7)] = inst_56435__$1);

return statearr_56493;
})();
if(inst_56435__$1){
var statearr_56494_57770 = state_56469__$1;
(statearr_56494_57770[(1)] = (14));

} else {
var statearr_56495_57771 = state_56469__$1;
(statearr_56495_57771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (9))){
var inst_56457 = (state_56469[(2)]);
var inst_56458 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_56469__$1 = (function (){var statearr_56496 = state_56469;
(statearr_56496[(15)] = inst_56457);

return statearr_56496;
})();
if(cljs.core.truth_(inst_56458)){
var statearr_56497_57772 = state_56469__$1;
(statearr_56497_57772[(1)] = (21));

} else {
var statearr_56498_57774 = state_56469__$1;
(statearr_56498_57774[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (5))){
var inst_56413 = cljs.core.async.close_BANG_(out);
var state_56469__$1 = state_56469;
var statearr_56499_57778 = state_56469__$1;
(statearr_56499_57778[(2)] = inst_56413);

(statearr_56499_57778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (14))){
var inst_56435 = (state_56469[(7)]);
var inst_56437 = cljs.core.chunked_seq_QMARK_(inst_56435);
var state_56469__$1 = state_56469;
if(inst_56437){
var statearr_56500_57780 = state_56469__$1;
(statearr_56500_57780[(1)] = (17));

} else {
var statearr_56501_57782 = state_56469__$1;
(statearr_56501_57782[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (16))){
var inst_56453 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
var statearr_56502_57783 = state_56469__$1;
(statearr_56502_57783[(2)] = inst_56453);

(statearr_56502_57783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (10))){
var inst_56424 = (state_56469[(8)]);
var inst_56422 = (state_56469[(10)]);
var inst_56429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56422,inst_56424);
var state_56469__$1 = state_56469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56469__$1,(13),out,inst_56429);
} else {
if((state_val_56470 === (18))){
var inst_56435 = (state_56469[(7)]);
var inst_56444 = cljs.core.first(inst_56435);
var state_56469__$1 = state_56469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56469__$1,(20),out,inst_56444);
} else {
if((state_val_56470 === (8))){
var inst_56424 = (state_56469[(8)]);
var inst_56423 = (state_56469[(9)]);
var inst_56426 = (inst_56424 < inst_56423);
var inst_56427 = inst_56426;
var state_56469__$1 = state_56469;
if(cljs.core.truth_(inst_56427)){
var statearr_56503_57796 = state_56469__$1;
(statearr_56503_57796[(1)] = (10));

} else {
var statearr_56504_57797 = state_56469__$1;
(statearr_56504_57797[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto__))
;
return ((function (switch__55026__auto__,c__55202__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55027__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55027__auto____0 = (function (){
var statearr_56505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56505[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55027__auto__);

(statearr_56505[(1)] = (1));

return statearr_56505;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55027__auto____1 = (function (state_56469){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56469);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56506){if((e56506 instanceof Object)){
var ex__55030__auto__ = e56506;
var statearr_56507_57808 = state_56469;
(statearr_56507_57808[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57810 = state_56469;
state_56469 = G__57810;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55027__auto__ = function(state_56469){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55027__auto____1.call(this,state_56469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55027__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55027__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__))
})();
var state__55204__auto__ = (function (){var statearr_56508 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56508[(6)] = c__55202__auto__);

return statearr_56508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__))
);

return c__55202__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56510 = arguments.length;
switch (G__56510) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__56512 = arguments.length;
switch (G__56512) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__56514 = arguments.length;
switch (G__56514) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55202__auto___57877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57877,out){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57877,out){
return (function (state_56538){
var state_val_56539 = (state_56538[(1)]);
if((state_val_56539 === (7))){
var inst_56533 = (state_56538[(2)]);
var state_56538__$1 = state_56538;
var statearr_56540_57886 = state_56538__$1;
(statearr_56540_57886[(2)] = inst_56533);

(statearr_56540_57886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (1))){
var inst_56515 = null;
var state_56538__$1 = (function (){var statearr_56541 = state_56538;
(statearr_56541[(7)] = inst_56515);

return statearr_56541;
})();
var statearr_56542_57887 = state_56538__$1;
(statearr_56542_57887[(2)] = null);

(statearr_56542_57887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (4))){
var inst_56518 = (state_56538[(8)]);
var inst_56518__$1 = (state_56538[(2)]);
var inst_56519 = (inst_56518__$1 == null);
var inst_56520 = cljs.core.not(inst_56519);
var state_56538__$1 = (function (){var statearr_56543 = state_56538;
(statearr_56543[(8)] = inst_56518__$1);

return statearr_56543;
})();
if(inst_56520){
var statearr_56544_57888 = state_56538__$1;
(statearr_56544_57888[(1)] = (5));

} else {
var statearr_56545_57889 = state_56538__$1;
(statearr_56545_57889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (6))){
var state_56538__$1 = state_56538;
var statearr_56546_57890 = state_56538__$1;
(statearr_56546_57890[(2)] = null);

(statearr_56546_57890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (3))){
var inst_56535 = (state_56538[(2)]);
var inst_56536 = cljs.core.async.close_BANG_(out);
var state_56538__$1 = (function (){var statearr_56547 = state_56538;
(statearr_56547[(9)] = inst_56535);

return statearr_56547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56538__$1,inst_56536);
} else {
if((state_val_56539 === (2))){
var state_56538__$1 = state_56538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56538__$1,(4),ch);
} else {
if((state_val_56539 === (11))){
var inst_56518 = (state_56538[(8)]);
var inst_56527 = (state_56538[(2)]);
var inst_56515 = inst_56518;
var state_56538__$1 = (function (){var statearr_56548 = state_56538;
(statearr_56548[(7)] = inst_56515);

(statearr_56548[(10)] = inst_56527);

return statearr_56548;
})();
var statearr_56549_57907 = state_56538__$1;
(statearr_56549_57907[(2)] = null);

(statearr_56549_57907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (9))){
var inst_56518 = (state_56538[(8)]);
var state_56538__$1 = state_56538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56538__$1,(11),out,inst_56518);
} else {
if((state_val_56539 === (5))){
var inst_56518 = (state_56538[(8)]);
var inst_56515 = (state_56538[(7)]);
var inst_56522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56518,inst_56515);
var state_56538__$1 = state_56538;
if(inst_56522){
var statearr_56551_57909 = state_56538__$1;
(statearr_56551_57909[(1)] = (8));

} else {
var statearr_56552_57911 = state_56538__$1;
(statearr_56552_57911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (10))){
var inst_56530 = (state_56538[(2)]);
var state_56538__$1 = state_56538;
var statearr_56553_57912 = state_56538__$1;
(statearr_56553_57912[(2)] = inst_56530);

(statearr_56553_57912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56539 === (8))){
var inst_56515 = (state_56538[(7)]);
var tmp56550 = inst_56515;
var inst_56515__$1 = tmp56550;
var state_56538__$1 = (function (){var statearr_56554 = state_56538;
(statearr_56554[(7)] = inst_56515__$1);

return statearr_56554;
})();
var statearr_56555_57913 = state_56538__$1;
(statearr_56555_57913[(2)] = null);

(statearr_56555_57913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57877,out))
;
return ((function (switch__55026__auto__,c__55202__auto___57877,out){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56556[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56556[(1)] = (1));

return statearr_56556;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56538){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56538);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56557){if((e56557 instanceof Object)){
var ex__55030__auto__ = e56557;
var statearr_56558_57915 = state_56538;
(statearr_56558_57915[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57916 = state_56538;
state_56538 = G__57916;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57877,out))
})();
var state__55204__auto__ = (function (){var statearr_56559 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56559[(6)] = c__55202__auto___57877);

return statearr_56559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57877,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56561 = arguments.length;
switch (G__56561) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55202__auto___57921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___57921,out){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___57921,out){
return (function (state_56599){
var state_val_56600 = (state_56599[(1)]);
if((state_val_56600 === (7))){
var inst_56595 = (state_56599[(2)]);
var state_56599__$1 = state_56599;
var statearr_56601_57928 = state_56599__$1;
(statearr_56601_57928[(2)] = inst_56595);

(statearr_56601_57928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (1))){
var inst_56562 = (new Array(n));
var inst_56563 = inst_56562;
var inst_56564 = (0);
var state_56599__$1 = (function (){var statearr_56602 = state_56599;
(statearr_56602[(7)] = inst_56564);

(statearr_56602[(8)] = inst_56563);

return statearr_56602;
})();
var statearr_56603_57934 = state_56599__$1;
(statearr_56603_57934[(2)] = null);

(statearr_56603_57934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (4))){
var inst_56567 = (state_56599[(9)]);
var inst_56567__$1 = (state_56599[(2)]);
var inst_56568 = (inst_56567__$1 == null);
var inst_56569 = cljs.core.not(inst_56568);
var state_56599__$1 = (function (){var statearr_56604 = state_56599;
(statearr_56604[(9)] = inst_56567__$1);

return statearr_56604;
})();
if(inst_56569){
var statearr_56605_57946 = state_56599__$1;
(statearr_56605_57946[(1)] = (5));

} else {
var statearr_56606_57947 = state_56599__$1;
(statearr_56606_57947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (15))){
var inst_56589 = (state_56599[(2)]);
var state_56599__$1 = state_56599;
var statearr_56607_57953 = state_56599__$1;
(statearr_56607_57953[(2)] = inst_56589);

(statearr_56607_57953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (13))){
var state_56599__$1 = state_56599;
var statearr_56608_57955 = state_56599__$1;
(statearr_56608_57955[(2)] = null);

(statearr_56608_57955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (6))){
var inst_56564 = (state_56599[(7)]);
var inst_56585 = (inst_56564 > (0));
var state_56599__$1 = state_56599;
if(cljs.core.truth_(inst_56585)){
var statearr_56609_57966 = state_56599__$1;
(statearr_56609_57966[(1)] = (12));

} else {
var statearr_56610_57970 = state_56599__$1;
(statearr_56610_57970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (3))){
var inst_56597 = (state_56599[(2)]);
var state_56599__$1 = state_56599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56599__$1,inst_56597);
} else {
if((state_val_56600 === (12))){
var inst_56563 = (state_56599[(8)]);
var inst_56587 = cljs.core.vec(inst_56563);
var state_56599__$1 = state_56599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56599__$1,(15),out,inst_56587);
} else {
if((state_val_56600 === (2))){
var state_56599__$1 = state_56599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56599__$1,(4),ch);
} else {
if((state_val_56600 === (11))){
var inst_56579 = (state_56599[(2)]);
var inst_56580 = (new Array(n));
var inst_56563 = inst_56580;
var inst_56564 = (0);
var state_56599__$1 = (function (){var statearr_56611 = state_56599;
(statearr_56611[(7)] = inst_56564);

(statearr_56611[(10)] = inst_56579);

(statearr_56611[(8)] = inst_56563);

return statearr_56611;
})();
var statearr_56612_57990 = state_56599__$1;
(statearr_56612_57990[(2)] = null);

(statearr_56612_57990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (9))){
var inst_56563 = (state_56599[(8)]);
var inst_56577 = cljs.core.vec(inst_56563);
var state_56599__$1 = state_56599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56599__$1,(11),out,inst_56577);
} else {
if((state_val_56600 === (5))){
var inst_56564 = (state_56599[(7)]);
var inst_56563 = (state_56599[(8)]);
var inst_56572 = (state_56599[(11)]);
var inst_56567 = (state_56599[(9)]);
var inst_56571 = (inst_56563[inst_56564] = inst_56567);
var inst_56572__$1 = (inst_56564 + (1));
var inst_56573 = (inst_56572__$1 < n);
var state_56599__$1 = (function (){var statearr_56613 = state_56599;
(statearr_56613[(12)] = inst_56571);

(statearr_56613[(11)] = inst_56572__$1);

return statearr_56613;
})();
if(cljs.core.truth_(inst_56573)){
var statearr_56614_57992 = state_56599__$1;
(statearr_56614_57992[(1)] = (8));

} else {
var statearr_56615_57993 = state_56599__$1;
(statearr_56615_57993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (14))){
var inst_56592 = (state_56599[(2)]);
var inst_56593 = cljs.core.async.close_BANG_(out);
var state_56599__$1 = (function (){var statearr_56617 = state_56599;
(statearr_56617[(13)] = inst_56592);

return statearr_56617;
})();
var statearr_56618_57994 = state_56599__$1;
(statearr_56618_57994[(2)] = inst_56593);

(statearr_56618_57994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (10))){
var inst_56583 = (state_56599[(2)]);
var state_56599__$1 = state_56599;
var statearr_56619_57995 = state_56599__$1;
(statearr_56619_57995[(2)] = inst_56583);

(statearr_56619_57995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56600 === (8))){
var inst_56563 = (state_56599[(8)]);
var inst_56572 = (state_56599[(11)]);
var tmp56616 = inst_56563;
var inst_56563__$1 = tmp56616;
var inst_56564 = inst_56572;
var state_56599__$1 = (function (){var statearr_56620 = state_56599;
(statearr_56620[(7)] = inst_56564);

(statearr_56620[(8)] = inst_56563__$1);

return statearr_56620;
})();
var statearr_56621_57997 = state_56599__$1;
(statearr_56621_57997[(2)] = null);

(statearr_56621_57997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___57921,out))
;
return ((function (switch__55026__auto__,c__55202__auto___57921,out){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56622[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56622[(1)] = (1));

return statearr_56622;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56599){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56599);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56623){if((e56623 instanceof Object)){
var ex__55030__auto__ = e56623;
var statearr_56624_58001 = state_56599;
(statearr_56624_58001[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58006 = state_56599;
state_56599 = G__58006;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___57921,out))
})();
var state__55204__auto__ = (function (){var statearr_56625 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56625[(6)] = c__55202__auto___57921);

return statearr_56625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___57921,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56627 = arguments.length;
switch (G__56627) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55202__auto___58021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto___58021,out){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto___58021,out){
return (function (state_56669){
var state_val_56670 = (state_56669[(1)]);
if((state_val_56670 === (7))){
var inst_56665 = (state_56669[(2)]);
var state_56669__$1 = state_56669;
var statearr_56671_58023 = state_56669__$1;
(statearr_56671_58023[(2)] = inst_56665);

(statearr_56671_58023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (1))){
var inst_56628 = [];
var inst_56629 = inst_56628;
var inst_56630 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56669__$1 = (function (){var statearr_56672 = state_56669;
(statearr_56672[(7)] = inst_56630);

(statearr_56672[(8)] = inst_56629);

return statearr_56672;
})();
var statearr_56673_58033 = state_56669__$1;
(statearr_56673_58033[(2)] = null);

(statearr_56673_58033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (4))){
var inst_56633 = (state_56669[(9)]);
var inst_56633__$1 = (state_56669[(2)]);
var inst_56634 = (inst_56633__$1 == null);
var inst_56635 = cljs.core.not(inst_56634);
var state_56669__$1 = (function (){var statearr_56674 = state_56669;
(statearr_56674[(9)] = inst_56633__$1);

return statearr_56674;
})();
if(inst_56635){
var statearr_56675_58034 = state_56669__$1;
(statearr_56675_58034[(1)] = (5));

} else {
var statearr_56676_58035 = state_56669__$1;
(statearr_56676_58035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (15))){
var inst_56659 = (state_56669[(2)]);
var state_56669__$1 = state_56669;
var statearr_56677_58036 = state_56669__$1;
(statearr_56677_58036[(2)] = inst_56659);

(statearr_56677_58036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (13))){
var state_56669__$1 = state_56669;
var statearr_56678_58040 = state_56669__$1;
(statearr_56678_58040[(2)] = null);

(statearr_56678_58040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (6))){
var inst_56629 = (state_56669[(8)]);
var inst_56654 = inst_56629.length;
var inst_56655 = (inst_56654 > (0));
var state_56669__$1 = state_56669;
if(cljs.core.truth_(inst_56655)){
var statearr_56679_58041 = state_56669__$1;
(statearr_56679_58041[(1)] = (12));

} else {
var statearr_56680_58042 = state_56669__$1;
(statearr_56680_58042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (3))){
var inst_56667 = (state_56669[(2)]);
var state_56669__$1 = state_56669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56669__$1,inst_56667);
} else {
if((state_val_56670 === (12))){
var inst_56629 = (state_56669[(8)]);
var inst_56657 = cljs.core.vec(inst_56629);
var state_56669__$1 = state_56669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56669__$1,(15),out,inst_56657);
} else {
if((state_val_56670 === (2))){
var state_56669__$1 = state_56669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56669__$1,(4),ch);
} else {
if((state_val_56670 === (11))){
var inst_56637 = (state_56669[(10)]);
var inst_56633 = (state_56669[(9)]);
var inst_56647 = (state_56669[(2)]);
var inst_56648 = [];
var inst_56649 = inst_56648.push(inst_56633);
var inst_56629 = inst_56648;
var inst_56630 = inst_56637;
var state_56669__$1 = (function (){var statearr_56681 = state_56669;
(statearr_56681[(7)] = inst_56630);

(statearr_56681[(8)] = inst_56629);

(statearr_56681[(11)] = inst_56647);

(statearr_56681[(12)] = inst_56649);

return statearr_56681;
})();
var statearr_56682_58047 = state_56669__$1;
(statearr_56682_58047[(2)] = null);

(statearr_56682_58047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (9))){
var inst_56629 = (state_56669[(8)]);
var inst_56645 = cljs.core.vec(inst_56629);
var state_56669__$1 = state_56669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56669__$1,(11),out,inst_56645);
} else {
if((state_val_56670 === (5))){
var inst_56630 = (state_56669[(7)]);
var inst_56637 = (state_56669[(10)]);
var inst_56633 = (state_56669[(9)]);
var inst_56637__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56633) : f.call(null,inst_56633));
var inst_56638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56637__$1,inst_56630);
var inst_56639 = cljs.core.keyword_identical_QMARK_(inst_56630,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56640 = ((inst_56638) || (inst_56639));
var state_56669__$1 = (function (){var statearr_56683 = state_56669;
(statearr_56683[(10)] = inst_56637__$1);

return statearr_56683;
})();
if(cljs.core.truth_(inst_56640)){
var statearr_56684_58052 = state_56669__$1;
(statearr_56684_58052[(1)] = (8));

} else {
var statearr_56685_58053 = state_56669__$1;
(statearr_56685_58053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (14))){
var inst_56662 = (state_56669[(2)]);
var inst_56663 = cljs.core.async.close_BANG_(out);
var state_56669__$1 = (function (){var statearr_56687 = state_56669;
(statearr_56687[(13)] = inst_56662);

return statearr_56687;
})();
var statearr_56688_58054 = state_56669__$1;
(statearr_56688_58054[(2)] = inst_56663);

(statearr_56688_58054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (10))){
var inst_56652 = (state_56669[(2)]);
var state_56669__$1 = state_56669;
var statearr_56689_58058 = state_56669__$1;
(statearr_56689_58058[(2)] = inst_56652);

(statearr_56689_58058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56670 === (8))){
var inst_56629 = (state_56669[(8)]);
var inst_56637 = (state_56669[(10)]);
var inst_56633 = (state_56669[(9)]);
var inst_56642 = inst_56629.push(inst_56633);
var tmp56686 = inst_56629;
var inst_56629__$1 = tmp56686;
var inst_56630 = inst_56637;
var state_56669__$1 = (function (){var statearr_56690 = state_56669;
(statearr_56690[(7)] = inst_56630);

(statearr_56690[(14)] = inst_56642);

(statearr_56690[(8)] = inst_56629__$1);

return statearr_56690;
})();
var statearr_56691_58060 = state_56669__$1;
(statearr_56691_58060[(2)] = null);

(statearr_56691_58060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__55202__auto___58021,out))
;
return ((function (switch__55026__auto__,c__55202__auto___58021,out){
return (function() {
var cljs$core$async$state_machine__55027__auto__ = null;
var cljs$core$async$state_machine__55027__auto____0 = (function (){
var statearr_56692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56692[(0)] = cljs$core$async$state_machine__55027__auto__);

(statearr_56692[(1)] = (1));

return statearr_56692;
});
var cljs$core$async$state_machine__55027__auto____1 = (function (state_56669){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_56669);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e56693){if((e56693 instanceof Object)){
var ex__55030__auto__ = e56693;
var statearr_56694_58065 = state_56669;
(statearr_56694_58065[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58066 = state_56669;
state_56669 = G__58066;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
cljs$core$async$state_machine__55027__auto__ = function(state_56669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55027__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55027__auto____1.call(this,state_56669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55027__auto____0;
cljs$core$async$state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55027__auto____1;
return cljs$core$async$state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto___58021,out))
})();
var state__55204__auto__ = (function (){var statearr_56695 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_56695[(6)] = c__55202__auto___58021);

return statearr_56695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto___58021,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
