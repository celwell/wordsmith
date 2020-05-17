goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_progress",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__,req){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__,req){
return (function (state_59158){
var state_val_59159 = (state_59158[(1)]);
if((state_val_59159 === (7))){
var state_59158__$1 = state_59158;
var statearr_59160_59426 = state_59158__$1;
(statearr_59160_59426[(2)] = false);

(statearr_59160_59426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (1))){
var state_59158__$1 = state_59158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59158__$1,(2),req);
} else {
if((state_val_59159 === (4))){
var inst_59110 = (state_59158[(7)]);
var inst_59122 = (inst_59110 == null);
var inst_59123 = cljs.core.not(inst_59122);
var state_59158__$1 = state_59158;
if(inst_59123){
var statearr_59166_59428 = state_59158__$1;
(statearr_59166_59428[(1)] = (6));

} else {
var statearr_59167_59429 = state_59158__$1;
(statearr_59167_59429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (15))){
var state_59158__$1 = state_59158;
var statearr_59168_59432 = state_59158__$1;
(statearr_59168_59432[(2)] = null);

(statearr_59168_59432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (13))){
var inst_59110 = (state_59158[(7)]);
var state_59158__$1 = state_59158;
var statearr_59175_59437 = state_59158__$1;
(statearr_59175_59437[(2)] = inst_59110);

(statearr_59175_59437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (6))){
var inst_59110 = (state_59158[(7)]);
var inst_59127 = inst_59110.cljs$lang$protocol_mask$partition0$;
var inst_59128 = (inst_59127 & (64));
var inst_59129 = inst_59110.cljs$core$ISeq$;
var inst_59130 = (cljs.core.PROTOCOL_SENTINEL === inst_59129);
var inst_59131 = ((inst_59128) || (inst_59130));
var state_59158__$1 = state_59158;
if(cljs.core.truth_(inst_59131)){
var statearr_59185_59440 = state_59158__$1;
(statearr_59185_59440[(1)] = (9));

} else {
var statearr_59190_59441 = state_59158__$1;
(statearr_59190_59441[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (17))){
var inst_59154 = (state_59158[(2)]);
var state_59158__$1 = state_59158;
var statearr_59192_59443 = state_59158__$1;
(statearr_59192_59443[(2)] = inst_59154);

(statearr_59192_59443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (3))){
var state_59158__$1 = state_59158;
var statearr_59202_59444 = state_59158__$1;
(statearr_59202_59444[(2)] = null);

(statearr_59202_59444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (12))){
var inst_59110 = (state_59158[(7)]);
var inst_59144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59110);
var state_59158__$1 = state_59158;
var statearr_59209_59446 = state_59158__$1;
(statearr_59209_59446[(2)] = inst_59144);

(statearr_59209_59446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (2))){
var inst_59110 = (state_59158[(7)]);
var inst_59110__$1 = (state_59158[(2)]);
var inst_59111 = (inst_59110__$1 == null);
var state_59158__$1 = (function (){var statearr_59219 = state_59158;
(statearr_59219[(7)] = inst_59110__$1);

return statearr_59219;
})();
if(cljs.core.truth_(inst_59111)){
var statearr_59224_59450 = state_59158__$1;
(statearr_59224_59450[(1)] = (3));

} else {
var statearr_59225_59451 = state_59158__$1;
(statearr_59225_59451[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (11))){
var inst_59139 = (state_59158[(2)]);
var state_59158__$1 = state_59158;
var statearr_59226_59453 = state_59158__$1;
(statearr_59226_59453[(2)] = inst_59139);

(statearr_59226_59453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (9))){
var state_59158__$1 = state_59158;
var statearr_59232_59454 = state_59158__$1;
(statearr_59232_59454[(2)] = true);

(statearr_59232_59454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (5))){
var inst_59156 = (state_59158[(2)]);
var state_59158__$1 = state_59158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59158__$1,inst_59156);
} else {
if((state_val_59159 === (14))){
var inst_59147 = (state_59158[(8)]);
var inst_59147__$1 = (state_59158[(2)]);
var inst_59148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59147__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_59149 = (inst_59148 === (0));
var state_59158__$1 = (function (){var statearr_59236 = state_59158;
(statearr_59236[(8)] = inst_59147__$1);

return statearr_59236;
})();
if(cljs.core.truth_(inst_59149)){
var statearr_59237_59455 = state_59158__$1;
(statearr_59237_59455[(1)] = (15));

} else {
var statearr_59238_59456 = state_59158__$1;
(statearr_59238_59456[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (16))){
var inst_59147 = (state_59158[(8)]);
var inst_59152 = console.warn("file open failed",inst_59147);
var state_59158__$1 = state_59158;
var statearr_59241_59457 = state_59158__$1;
(statearr_59241_59457[(2)] = inst_59152);

(statearr_59241_59457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (10))){
var state_59158__$1 = state_59158;
var statearr_59242_59458 = state_59158__$1;
(statearr_59242_59458[(2)] = false);

(statearr_59242_59458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59159 === (8))){
var inst_59142 = (state_59158[(2)]);
var state_59158__$1 = state_59158;
if(cljs.core.truth_(inst_59142)){
var statearr_59243_59459 = state_59158__$1;
(statearr_59243_59459[(1)] = (12));

} else {
var statearr_59244_59460 = state_59158__$1;
(statearr_59244_59460[(1)] = (13));

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
});})(c__55202__auto__,req))
;
return ((function (switch__55026__auto__,c__55202__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto____0 = (function (){
var statearr_59249 = [null,null,null,null,null,null,null,null,null];
(statearr_59249[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto__);

(statearr_59249[(1)] = (1));

return statearr_59249;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto____1 = (function (state_59158){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_59158);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e59250){if((e59250 instanceof Object)){
var ex__55030__auto__ = e59250;
var statearr_59251_59461 = state_59158;
(statearr_59251_59461[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59462 = state_59158;
state_59158 = G__59462;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto__ = function(state_59158){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto____1.call(this,state_59158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__,req))
})();
var state__55204__auto__ = (function (){var statearr_59254 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_59254[(6)] = c__55202__auto__);

return statearr_59254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__,req))
);

return c__55202__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__59258 = arguments.length;
switch (G__59258) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___59466 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___59466 == null)){
} else {
var x_59467 = temp__5739__auto___59466;
shadow.dom.remove(x_59467);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__55202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__55202__auto__,el,container_el,temp__5739__auto__){
return (function (){
var f__55203__auto__ = (function (){var switch__55026__auto__ = ((function (c__55202__auto__,el,container_el,temp__5739__auto__){
return (function (state_59275){
var state_val_59276 = (state_59275[(1)]);
if((state_val_59276 === (1))){
var inst_59263 = cljs.core.async.timeout((250));
var state_59275__$1 = state_59275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59275__$1,(2),inst_59263);
} else {
if((state_val_59276 === (2))){
var inst_59265 = (state_59275[(2)]);
var inst_59266 = [el];
var inst_59267 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_59268 = [inst_59267];
var inst_59269 = cljs.core.PersistentHashMap.fromArrays(inst_59266,inst_59268);
var inst_59270 = shadow.animate.start((250),inst_59269);
var state_59275__$1 = (function (){var statearr_59277 = state_59275;
(statearr_59277[(7)] = inst_59265);

return statearr_59277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59275__$1,(3),inst_59270);
} else {
if((state_val_59276 === (3))){
var inst_59272 = (state_59275[(2)]);
var inst_59273 = shadow.dom.remove(container_el);
var state_59275__$1 = (function (){var statearr_59278 = state_59275;
(statearr_59278[(8)] = inst_59272);

return statearr_59278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59275__$1,inst_59273);
} else {
return null;
}
}
}
});})(c__55202__auto__,el,container_el,temp__5739__auto__))
;
return ((function (switch__55026__auto__,c__55202__auto__,el,container_el,temp__5739__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto____0 = (function (){
var statearr_59279 = [null,null,null,null,null,null,null,null,null];
(statearr_59279[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto__);

(statearr_59279[(1)] = (1));

return statearr_59279;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto____1 = (function (state_59275){
while(true){
var ret_value__55028__auto__ = (function (){try{while(true){
var result__55029__auto__ = switch__55026__auto__(state_59275);
if(cljs.core.keyword_identical_QMARK_(result__55029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55029__auto__;
}
break;
}
}catch (e59280){if((e59280 instanceof Object)){
var ex__55030__auto__ = e59280;
var statearr_59281_59484 = state_59275;
(statearr_59281_59484[(5)] = ex__55030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59485 = state_59275;
state_59275 = G__59485;
continue;
} else {
return ret_value__55028__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto__ = function(state_59275){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto____1.call(this,state_59275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__55027__auto__;
})()
;})(switch__55026__auto__,c__55202__auto__,el,container_el,temp__5739__auto__))
})();
var state__55204__auto__ = (function (){var statearr_59282 = (f__55203__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55203__auto__.cljs$core$IFn$_invoke$arity$0() : f__55203__auto__.call(null));
(statearr_59282[(6)] = c__55202__auto__);

return statearr_59282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55204__auto__);
});})(c__55202__auto__,el,container_el,temp__5739__auto__))
);

return c__55202__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4523__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__59292(s__59293){
return (new cljs.core.LazySeq(null,(function (){
var s__59293__$1 = s__59293;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59293__$1);
if(temp__5735__auto__){
var s__59293__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59293__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__59293__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__59295 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__59294 = (0);
while(true){
if((i__59294 < size__4522__auto__)){
var vec__59300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__59294);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59300,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59300,(1),null);
cljs.core.chunk_append(b__59295,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__59303 = "%4d | %s";
var G__59304 = (((1) + idx) + start_idx);
var G__59305 = text;
return goog.string.format(G__59303,G__59304,G__59305);
})()], null));

var G__59501 = (i__59294 + (1));
i__59294 = G__59501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59295),shadow$cljs$devtools$client$hud$source_line_html_$_iter__59292(cljs.core.chunk_rest(s__59293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59295),null);
}
} else {
var vec__59310 = cljs.core.first(s__59293__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59310,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59310,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__59313 = "%4d | %s";
var G__59314 = (((1) + idx) + start_idx);
var G__59315 = text;
return goog.string.format(G__59313,G__59314,G__59315);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__59292(cljs.core.rest(s__59293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__59322 = arguments.length;
switch (G__59322) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__59334){
var map__59335 = p__59334;
var map__59335__$1 = (((((!((map__59335 == null))))?(((((map__59335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59335):map__59335);
var warning = map__59335__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__59335,map__59335__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__59335,map__59335__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__59347){
var map__59348 = p__59347;
var map__59348__$1 = (((((!((map__59348 == null))))?(((((map__59348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59348):map__59348);
var warning = map__59348__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59348__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59348__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__59357 = source_excerpt;
var map__59357__$1 = (((((!((map__59357 == null))))?(((((map__59357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59357):map__59357);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4131__auto__ = column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__59370){
var map__59373 = p__59370;
var map__59373__$1 = (((((!((map__59373 == null))))?(((((map__59373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59373):map__59373);
var msg = map__59373__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__59378 = info;
var map__59378__$1 = (((((!((map__59378 == null))))?(((((map__59378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59378):map__59378);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59378__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__59378,map__59378__$1,sources,map__59373,map__59373__$1,msg,type,info){
return (function (p1__59362_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__59362_SHARP_));
});})(map__59378,map__59378__$1,sources,map__59373,map__59373__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4523__auto__ = ((function (map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59387(s__59388){
return (new cljs.core.LazySeq(null,((function (map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info){
return (function (){
var s__59388__$1 = s__59388;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59388__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59398 = cljs.core.first(xs__6292__auto__);
var map__59398__$1 = (((((!((map__59398 == null))))?(((((map__59398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59398):map__59398);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4519__auto__ = ((function (s__59388__$1,map__59398,map__59398__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59387_$_iter__59389(s__59390){
return (new cljs.core.LazySeq(null,((function (s__59388__$1,map__59398,map__59398__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info){
return (function (){
var s__59390__$1 = s__59390;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59390__$1);
if(temp__5735__auto____$1){
var s__59390__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59390__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__59390__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__59392 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__59391 = (0);
while(true){
if((i__59391 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__59391);
cljs.core.chunk_append(b__59392,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__59561 = (i__59391 + (1));
i__59391 = G__59561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59392),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59387_$_iter__59389(cljs.core.chunk_rest(s__59390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59392),null);
}
} else {
var warning = cljs.core.first(s__59390__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59387_$_iter__59389(cljs.core.rest(s__59390__$2)));
}
} else {
return null;
}
break;
}
});})(s__59388__$1,map__59398,map__59398__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info))
,null,null));
});})(s__59388__$1,map__59398,map__59398__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__59387(cljs.core.rest(s__59388__$1)));
} else {
var G__59564 = cljs.core.rest(s__59388__$1);
s__59388__$1 = G__59564;
continue;
}
} else {
return null;
}
break;
}
});})(map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info))
,null,null));
});})(map__59378,map__59378__$1,sources,sources_with_warnings,map__59373,map__59373__$1,msg,type,info))
;
return iter__4523__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__59415){
var map__59416 = p__59415;
var map__59416__$1 = (((((!((map__59416 == null))))?(((((map__59416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59416):map__59416);
var msg = map__59416__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
