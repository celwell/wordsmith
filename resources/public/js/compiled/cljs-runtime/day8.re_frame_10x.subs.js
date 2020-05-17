goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__52033_52759 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__52034_52760 = ((function (G__52033_52759){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__52033_52759))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52033_52759,G__52034_52760) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52033_52759,G__52034_52760));
var G__52035_52761 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__52036_52762 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52037_52763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52038_52764 = ((function (G__52035_52761,G__52036_52762,G__52037_52763){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__52035_52761,G__52036_52762,G__52037_52763))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52035_52761,G__52036_52762,G__52037_52763,G__52038_52764) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52035_52761,G__52036_52762,G__52037_52763,G__52038_52764));
var G__52039_52771 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__52040_52772 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52041_52773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__52042_52774 = ((function (G__52039_52771,G__52040_52772,G__52041_52773){
return (function (panel_width_PERCENT_,p__52044){
var vec__52045 = p__52044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(1),null);
return (((function (){var G__52049 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__52049);
})() * n) / 100.0);
});})(G__52039_52771,G__52040_52772,G__52041_52773))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52039_52771,G__52040_52772,G__52041_52773,G__52042_52774) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52039_52771,G__52040_52772,G__52041_52773,G__52042_52774));
var G__52051_52776 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__52052_52777 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52053_52778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52054_52779 = ((function (G__52051_52776,G__52052_52777,G__52053_52778){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__52051_52776,G__52052_52777,G__52053_52778))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52051_52776,G__52052_52777,G__52053_52778,G__52054_52779) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52051_52776,G__52052_52777,G__52053_52778,G__52054_52779));
var G__52056_52784 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__52057_52785 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52058_52786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__52059_52787 = ((function (G__52056_52784,G__52057_52785,G__52058_52786){
return (function (width,p__52060){
var vec__52061 = p__52060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52061,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52061,(1),null);
return ((function (){var G__52064 = (width / n);
return Math.ceil(G__52064);
})() * n);
});})(G__52056_52784,G__52057_52785,G__52058_52786))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52056_52784,G__52057_52785,G__52058_52786,G__52059_52787) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52056_52784,G__52057_52785,G__52058_52786,G__52059_52787));
var G__52065_52790 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__52066_52791 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52067_52792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52068_52793 = ((function (G__52065_52790,G__52066_52791,G__52067_52792){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__52065_52790,G__52066_52791,G__52067_52792))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52065_52790,G__52066_52791,G__52067_52792,G__52068_52793) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52065_52790,G__52066_52791,G__52067_52792,G__52068_52793));
var G__52069_52797 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__52070_52798 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52071_52799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52072_52800 = ((function (G__52069_52797,G__52070_52798,G__52071_52799){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__52069_52797,G__52070_52798,G__52071_52799))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52069_52797,G__52070_52798,G__52071_52799,G__52072_52800) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52069_52797,G__52070_52798,G__52071_52799,G__52072_52800));
var G__52076_52801 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__52077_52802 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52078_52803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52079_52804 = ((function (G__52076_52801,G__52077_52802,G__52078_52803){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__52076_52801,G__52077_52802,G__52078_52803))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52076_52801,G__52077_52802,G__52078_52803,G__52079_52804) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52076_52801,G__52077_52802,G__52078_52803,G__52079_52804));
var G__52080_52805 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__52081_52806 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52082_52807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52083_52808 = ((function (G__52080_52805,G__52081_52806,G__52082_52807){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__52080_52805,G__52081_52806,G__52082_52807))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52080_52805,G__52081_52806,G__52082_52807,G__52083_52808) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52080_52805,G__52081_52806,G__52082_52807,G__52083_52808));
var G__52084_52810 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__52085_52811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52086_52812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52087_52813 = ((function (G__52084_52810,G__52085_52811,G__52086_52812){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__52084_52810,G__52085_52811,G__52086_52812))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52084_52810,G__52085_52811,G__52086_52812,G__52087_52813) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52084_52810,G__52085_52811,G__52086_52812,G__52087_52813));
var G__52089_52820 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__52090_52821 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52091_52822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52092_52823 = ((function (G__52089_52820,G__52090_52821,G__52091_52822){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__52089_52820,G__52090_52821,G__52091_52822))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52089_52820,G__52090_52821,G__52091_52822,G__52092_52823) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52089_52820,G__52090_52821,G__52091_52822,G__52092_52823));
var G__52096_52847 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__52097_52848 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52098_52849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52099_52850 = ((function (G__52096_52847,G__52097_52848,G__52098_52849){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__52096_52847,G__52097_52848,G__52098_52849))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52096_52847,G__52097_52848,G__52098_52849,G__52099_52850) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52096_52847,G__52097_52848,G__52098_52849,G__52099_52850));
var G__52102_52851 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__52103_52852 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52104_52853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52105_52854 = ((function (G__52102_52851,G__52103_52852,G__52104_52853){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__52102_52851,G__52103_52852,G__52104_52853))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52102_52851,G__52103_52852,G__52104_52853,G__52105_52854) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52102_52851,G__52103_52852,G__52104_52853,G__52105_52854));
var G__52108_52855 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__52109_52856 = ((function (G__52108_52855){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__52108_52855))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52108_52855,G__52109_52856) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52108_52855,G__52109_52856));
var G__52110_52857 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__52111_52858 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52112_52859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52113_52860 = ((function (G__52110_52857,G__52111_52858,G__52112_52859){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__52110_52857,G__52111_52858,G__52112_52859))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52110_52857,G__52111_52858,G__52112_52859,G__52113_52860) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52110_52857,G__52111_52858,G__52112_52859,G__52113_52860));
var G__52114_52861 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__52115_52862 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52116_52863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52117_52864 = ((function (G__52114_52861,G__52115_52862,G__52116_52863){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__52114_52861,G__52115_52862,G__52116_52863))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52114_52861,G__52115_52862,G__52116_52863,G__52117_52864) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52114_52861,G__52115_52862,G__52116_52863,G__52117_52864));
var G__52119_52865 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__52120_52866 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52121_52867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52122_52868 = ((function (G__52119_52865,G__52120_52866,G__52121_52867){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__52119_52865,G__52120_52866,G__52121_52867){
return (function (p1__52118_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__52118_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__52118_SHARP_));
});})(G__52119_52865,G__52120_52866,G__52121_52867))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__52119_52865,G__52120_52866,G__52121_52867))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52119_52865,G__52120_52866,G__52121_52867,G__52122_52868) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52119_52865,G__52120_52866,G__52121_52867,G__52122_52868));
var G__52126_52871 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__52127_52872 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52128_52873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52129_52874 = ((function (G__52126_52871,G__52127_52872,G__52128_52873){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__52126_52871,G__52127_52872,G__52128_52873))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52126_52871,G__52127_52872,G__52128_52873,G__52129_52874) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52126_52871,G__52127_52872,G__52128_52873,G__52129_52874));
var G__52131_52878 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__52132_52879 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52133_52880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52134_52881 = ((function (G__52131_52878,G__52132_52879,G__52133_52880){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__52131_52878,G__52132_52879,G__52133_52880))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52131_52878,G__52132_52879,G__52133_52880,G__52134_52881) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52131_52878,G__52132_52879,G__52133_52880,G__52134_52881));
var G__52135_52886 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__52136_52887 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52137_52888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__52138_52889 = ((function (G__52135_52886,G__52136_52887,G__52137_52888){
return (function (expansions,p__52140){
var vec__52142 = p__52140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52142,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52142,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__52135_52886,G__52136_52887,G__52137_52888))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52135_52886,G__52136_52887,G__52137_52888,G__52138_52889) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52135_52886,G__52136_52887,G__52137_52888,G__52138_52889));
var G__52145_52898 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__52146_52899 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52147_52900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52148_52901 = ((function (G__52145_52898,G__52146_52899,G__52147_52900){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__52145_52898,G__52146_52899,G__52147_52900))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52145_52898,G__52146_52899,G__52147_52900,G__52148_52901) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52145_52898,G__52146_52899,G__52147_52900,G__52148_52901));
var G__52149_52902 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__52150_52903 = ((function (G__52149_52902){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52149_52902))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52149_52902,G__52150_52903) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52149_52902,G__52150_52903));
var G__52152_52906 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__52153_52907 = ((function (G__52152_52906){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52152_52906))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52152_52906,G__52153_52907) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52152_52906,G__52153_52907));
var G__52154_52912 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__52155_52913 = ((function (G__52154_52912){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__52154_52912))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52154_52912,G__52155_52913) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52154_52912,G__52155_52913));
var G__52157_52914 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__52158_52915 = ((function (G__52157_52914){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__52157_52914))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52157_52914,G__52158_52915) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52157_52914,G__52158_52915));
var G__52159_52916 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__52160_52917 = ((function (G__52159_52916){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__52159_52916))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52159_52916,G__52160_52917) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52159_52916,G__52160_52917));
var G__52161_52918 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__52162_52919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52163_52920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__52164_52921 = ((function (G__52161_52918,G__52162_52919,G__52163_52920){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__52161_52918,G__52162_52919,G__52163_52920))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52161_52918,G__52162_52919,G__52163_52920,G__52164_52921) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52161_52918,G__52162_52919,G__52163_52920,G__52164_52921));
var G__52165_52922 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__52166_52923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52167_52924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__52168_52925 = ((function (G__52165_52922,G__52166_52923,G__52167_52924){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__52165_52922,G__52166_52923,G__52167_52924))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52165_52922,G__52166_52923,G__52167_52924,G__52168_52925) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52165_52922,G__52166_52923,G__52167_52924,G__52168_52925));
var G__52169_52926 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__52170_52927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52171_52928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__52172_52929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52173_52930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__52174_52931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52175_52932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__52176_52933 = ((function (G__52169_52926,G__52170_52927,G__52171_52928,G__52172_52929,G__52173_52930,G__52174_52931,G__52175_52932){
return (function (p__52177,_){
var vec__52178 = p__52177;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52178,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52178,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52178,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__52169_52926,G__52170_52927,G__52171_52928,G__52172_52929,G__52173_52930,G__52174_52931,G__52175_52932))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__52169_52926,G__52170_52927,G__52171_52928,G__52172_52929,G__52173_52930,G__52174_52931,G__52175_52932,G__52176_52933) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52169_52926,G__52170_52927,G__52171_52928,G__52172_52929,G__52173_52930,G__52174_52931,G__52175_52932,G__52176_52933));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__52182,_){
var vec__52184 = p__52182;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52184,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52184,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__52184,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__52184,traces,filtered_views))
),traces);
});
var G__52187_52953 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__52188_52954 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52189_52955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52190_52956 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52191_52957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__52192_52958 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52187_52953,G__52188_52954,G__52189_52955,G__52190_52956,G__52191_52957,G__52192_52958) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52187_52953,G__52188_52954,G__52189_52955,G__52190_52956,G__52191_52957,G__52192_52958));
var G__52193_52963 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__52194_52964 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52195_52965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__52196_52966 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52197_52967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__52198_52968 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52193_52963,G__52194_52964,G__52195_52965,G__52196_52966,G__52197_52967,G__52198_52968) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52193_52963,G__52194_52964,G__52195_52965,G__52196_52966,G__52197_52967,G__52198_52968));
var G__52199_52971 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__52200_52972 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52201_52973 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__52202_52974 = ((function (G__52199_52971,G__52200_52972,G__52201_52973){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__52199_52971,G__52200_52972,G__52201_52973))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52199_52971,G__52200_52972,G__52201_52973,G__52202_52974) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52199_52971,G__52200_52972,G__52201_52973,G__52202_52974));
var G__52212_52975 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__52213_52976 = ((function (G__52212_52975){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__52212_52975))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52212_52975,G__52213_52976) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52212_52975,G__52213_52976));
var G__52214_52977 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__52215_52978 = ((function (G__52214_52977){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52214_52977))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52214_52977,G__52215_52978) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52214_52977,G__52215_52978));
var G__52216_52979 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__52217_52980 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52218_52981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__52219_52982 = ((function (G__52216_52979,G__52217_52980,G__52218_52981){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__52216_52979,G__52217_52980,G__52218_52981))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52216_52979,G__52217_52980,G__52218_52981,G__52219_52982) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52216_52979,G__52217_52980,G__52218_52981,G__52219_52982));
var G__52220_52987 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__52221_52988 = ((function (G__52220_52987){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52220_52987))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52220_52987,G__52221_52988) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52220_52987,G__52221_52988));
var G__52222_52989 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__52223_52990 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52224_52991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__52225_52992 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52226_52993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__52227_52994 = ((function (G__52222_52989,G__52223_52990,G__52224_52991,G__52225_52992,G__52226_52993){
return (function (p__52228,_){
var vec__52229 = p__52228;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__52222_52989,G__52223_52990,G__52224_52991,G__52225_52992,G__52226_52993))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52222_52989,G__52223_52990,G__52224_52991,G__52225_52992,G__52226_52993,G__52227_52994) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52222_52989,G__52223_52990,G__52224_52991,G__52225_52992,G__52226_52993,G__52227_52994));
var G__52236_53001 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__52237_53002 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52238_53003 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__52239_53004 = ((function (G__52236_53001,G__52237_53002,G__52238_53003){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__52236_53001,G__52237_53002,G__52238_53003))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52236_53001,G__52237_53002,G__52238_53003,G__52239_53004) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52236_53001,G__52237_53002,G__52238_53003,G__52239_53004));
var G__52240_53005 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__52241_53006 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52242_53007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__52243_53008 = ((function (G__52240_53005,G__52241_53006,G__52242_53007){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__52240_53005,G__52241_53006,G__52242_53007))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52240_53005,G__52241_53006,G__52242_53007,G__52243_53008) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52240_53005,G__52241_53006,G__52242_53007,G__52243_53008));
var G__52246_53013 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__52247_53014 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52248_53015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52249_53016 = ((function (G__52246_53013,G__52247_53014,G__52248_53015){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__52246_53013,G__52247_53014,G__52248_53015))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52246_53013,G__52247_53014,G__52248_53015,G__52249_53016) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52246_53013,G__52247_53014,G__52248_53015,G__52249_53016));
var G__52252_53021 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__52253_53022 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52254_53023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__52255_53024 = ((function (G__52252_53021,G__52253_53022,G__52254_53023){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__52252_53021,G__52253_53022,G__52254_53023))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52252_53021,G__52253_53022,G__52254_53023,G__52255_53024) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52252_53021,G__52253_53022,G__52254_53023,G__52255_53024));
var G__52257_53026 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__52258_53027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52259_53028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__52260_53029 = ((function (G__52257_53026,G__52258_53027,G__52259_53028){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__52257_53026,G__52258_53027,G__52259_53028))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52257_53026,G__52258_53027,G__52259_53028,G__52260_53029) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52257_53026,G__52258_53027,G__52259_53028,G__52260_53029));
var G__52261_53034 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__52262_53035 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52263_53036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__52264_53037 = ((function (G__52261_53034,G__52262_53035,G__52263_53036){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__52261_53034,G__52262_53035,G__52263_53036))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52261_53034,G__52262_53035,G__52263_53036,G__52264_53037) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52261_53034,G__52262_53035,G__52263_53036,G__52264_53037));
var G__52265_53038 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__52266_53039 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52267_53040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__52268_53041 = ((function (G__52265_53038,G__52266_53039,G__52267_53040){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__52265_53038,G__52266_53039,G__52267_53040))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52265_53038,G__52266_53039,G__52267_53040,G__52268_53041) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52265_53038,G__52266_53039,G__52267_53040,G__52268_53041));
var G__52269_53042 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__52270_53043 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52271_53044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__52272_53045 = ((function (G__52269_53042,G__52270_53043,G__52271_53044){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__52269_53042,G__52270_53043,G__52271_53044))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52269_53042,G__52270_53043,G__52271_53044,G__52272_53045) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52269_53042,G__52270_53043,G__52271_53044,G__52272_53045));
var G__52273_53046 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__52274_53047 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52275_53048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__52276_53049 = ((function (G__52273_53046,G__52274_53047,G__52275_53048){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__52273_53046,G__52274_53047,G__52275_53048))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52273_53046,G__52274_53047,G__52275_53048,G__52276_53049) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52273_53046,G__52274_53047,G__52275_53048,G__52276_53049));
var G__52281_53050 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__52282_53051 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52283_53052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__52284_53053 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52285_53054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__52286_53055 = ((function (G__52281_53050,G__52282_53051,G__52283_53052,G__52284_53053,G__52285_53054){
return (function (p__52291){
var vec__52292 = p__52291;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52292,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52292,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__52281_53050,G__52282_53051,G__52283_53052,G__52284_53053,G__52285_53054))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52281_53050,G__52282_53051,G__52283_53052,G__52284_53053,G__52285_53054,G__52286_53055) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52281_53050,G__52282_53051,G__52283_53052,G__52284_53053,G__52285_53054,G__52286_53055));
var G__52299_53061 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__52300_53062 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52301_53063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__52302_53064 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52303_53065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__52304_53066 = ((function (G__52299_53061,G__52300_53062,G__52301_53063,G__52302_53064,G__52303_53065){
return (function (p__52307){
var vec__52308 = p__52307;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52308,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52308,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__52299_53061,G__52300_53062,G__52301_53063,G__52302_53064,G__52303_53065))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52299_53061,G__52300_53062,G__52301_53063,G__52302_53064,G__52303_53065,G__52304_53066) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52299_53061,G__52300_53062,G__52301_53063,G__52302_53064,G__52303_53065,G__52304_53066));
var G__52318_53073 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__52319_53074 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52320_53075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52321_53077 = ((function (G__52318_53073,G__52319_53074,G__52320_53075){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__52318_53073,G__52319_53074,G__52320_53075))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52318_53073,G__52319_53074,G__52320_53075,G__52321_53077) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52318_53073,G__52319_53074,G__52320_53075,G__52321_53077));
var G__52325_53082 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__52326_53083 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52327_53084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52328_53085 = ((function (G__52325_53082,G__52326_53083,G__52327_53084){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__52325_53082,G__52326_53083,G__52327_53084){
return (function (p1__52324_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__52324_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__52324_SHARP_)));
});})(G__52325_53082,G__52326_53083,G__52327_53084))
,traces);
});})(G__52325_53082,G__52326_53083,G__52327_53084))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52325_53082,G__52326_53083,G__52327_53084,G__52328_53085) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52325_53082,G__52326_53083,G__52327_53084,G__52328_53085));
var G__52329_53090 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__52330_53091 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52331_53092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__52332_53093 = ((function (G__52329_53090,G__52330_53091,G__52331_53092){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__52329_53090,G__52330_53091,G__52331_53092))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52329_53090,G__52330_53091,G__52331_53092,G__52332_53093) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52329_53090,G__52330_53091,G__52331_53092,G__52332_53093));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__52341 = arguments.length;
switch (G__52341) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___53099 = arguments.length;
var i__4731__auto___53100 = (0);
while(true){
if((i__4731__auto___53100 < len__4730__auto___53099)){
args_arr__4751__auto__.push((arguments[i__4731__auto___53100]));

var G__53101 = (i__4731__auto___53100 + (1));
i__4731__auto___53100 = G__53101;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq52338){
var G__52339 = cljs.core.first(seq52338);
var seq52338__$1 = cljs.core.next(seq52338);
var G__52340 = cljs.core.first(seq52338__$1);
var seq52338__$2 = cljs.core.next(seq52338__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52339,G__52340,seq52338__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__52347_53112 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__52348_53113 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52349_53114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__52350_53115 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52351_53116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52352_53117 = ((function (G__52347_53112,G__52348_53113,G__52349_53114,G__52350_53115,G__52351_53116){
return (function (p__52353,p__52354){
var vec__52355 = p__52353;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52355,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52355,(1),null);
var vec__52358 = p__52354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__52361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52361,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52361,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__52347_53112,G__52348_53113,G__52349_53114,G__52350_53115,G__52351_53116))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52347_53112,G__52348_53113,G__52349_53114,G__52350_53115,G__52351_53116,G__52352_53117) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52347_53112,G__52348_53113,G__52349_53114,G__52350_53115,G__52351_53116,G__52352_53117));
var G__52366_53118 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__52367_53119 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52368_53120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__52369_53121 = ((function (G__52366_53118,G__52367_53119,G__52368_53120){
return (function (match){
var map__52370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__52370__$1 = (((((!((map__52370 == null))))?(((((map__52370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52370):map__52370);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52370__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52370__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52370__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52370__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__52366_53118,G__52367_53119,G__52368_53120))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52366_53118,G__52367_53119,G__52368_53120,G__52369_53121) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52366_53118,G__52367_53119,G__52368_53120,G__52369_53121));
var G__52372_53122 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__52373_53123 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52374_53124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52375_53125 = ((function (G__52372_53122,G__52373_53123,G__52374_53124){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__52372_53122,G__52373_53123,G__52374_53124))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52372_53122,G__52373_53123,G__52374_53124,G__52375_53125) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52372_53122,G__52373_53123,G__52374_53124,G__52375_53125));
var G__52377_53130 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__52378_53131 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52379_53132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52380_53133 = ((function (G__52377_53130,G__52378_53131,G__52379_53132){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__52377_53130,G__52378_53131,G__52379_53132))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52377_53130,G__52378_53131,G__52379_53132,G__52380_53133) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52377_53130,G__52378_53131,G__52379_53132,G__52380_53133));
var G__52386_53134 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__52387_53135 = ((function (G__52386_53134){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52386_53134))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52386_53134,G__52387_53135) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52386_53134,G__52387_53135));
var G__52388_53136 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__52389_53137 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52390_53138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52391_53139 = ((function (G__52388_53136,G__52389_53137,G__52390_53138){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__52388_53136,G__52389_53137,G__52390_53138))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52388_53136,G__52389_53137,G__52390_53138,G__52391_53139) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52388_53136,G__52389_53137,G__52390_53138,G__52391_53139));
var G__52392_53141 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__52393_53142 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52394_53143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__52395_53144 = ((function (G__52392_53141,G__52393_53142,G__52394_53143){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__52392_53141,G__52393_53142,G__52394_53143))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52392_53141,G__52393_53142,G__52394_53143,G__52395_53144) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52392_53141,G__52393_53142,G__52394_53143,G__52395_53144));
var G__52396_53148 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__52397_53149 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52398_53150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__52399_53151 = ((function (G__52396_53148,G__52397_53149,G__52398_53150){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__52396_53148,G__52397_53149,G__52398_53150))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52396_53148,G__52397_53149,G__52398_53150,G__52399_53151) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52396_53148,G__52397_53149,G__52398_53150,G__52399_53151));
var G__52400_53152 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__52401_53153 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52402_53154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__52403_53155 = ((function (G__52400_53152,G__52401_53153,G__52402_53154){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__52400_53152,G__52401_53153,G__52402_53154))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52400_53152,G__52401_53153,G__52402_53154,G__52403_53155) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52400_53152,G__52401_53153,G__52402_53154,G__52403_53155));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__52404_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__52404_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52410){
return cljs.core.coll_QMARK_(G__52410);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52413){
return cljs.core.map_QMARK_(G__52413);
}),(function (G__52413){
return cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__52413){
return cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__52413){
return cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__52413){
return cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__52413){
return cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__52413){
return cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__52413){
return ((cljs.core.map_QMARK_(G__52413)) && (cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__52413,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52493){
return cljs.core.coll_QMARK_(G__52493);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__52499 = sub_type;
var G__52499__$1 = (((G__52499 instanceof cljs.core.Keyword))?G__52499.fqn:null);
switch (G__52499__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__53183 = (exp - (1));
var G__53184 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__53185 = cljs.core.rest(order__$1);
exp = G__53183;
total = G__53184;
order__$1 = G__53185;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__52517 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__52517__$1 = (((G__52517 instanceof cljs.core.Keyword))?G__52517.fqn:null);
switch (G__52517__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__52525,p__52526){
var vec__52534 = p__52525;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52534,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52534,(1),null);
var vec__52537 = p__52526;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52537,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__52534,sub_info,sub_state,vec__52537,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__52534,sub_info,sub_state,vec__52537,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__52534,sub_info,sub_state,vec__52537,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__52534,sub_info,sub_state,vec__52537,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__52544_53217 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__52545_53218 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52546_53219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__52547_53220 = ((function (G__52544_53217,G__52545_53218,G__52546_53219){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__52544_53217,G__52545_53218,G__52546_53219))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52544_53217,G__52545_53218,G__52546_53219,G__52547_53220) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52544_53217,G__52545_53218,G__52546_53219,G__52547_53220));
var G__52548_53221 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__52549_53222 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52550_53223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__52551_53224 = ((function (G__52548_53221,G__52549_53222,G__52550_53223){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__52548_53221,G__52549_53222,G__52550_53223))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52548_53221,G__52549_53222,G__52550_53223,G__52551_53224) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52548_53221,G__52549_53222,G__52550_53223,G__52551_53224));
var G__52552_53226 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__52553_53227 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52554_53228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__52555_53229 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52556_53230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__52557_53231 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52552_53226,G__52553_53227,G__52554_53228,G__52555_53229,G__52556_53230,G__52557_53231) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52552_53226,G__52553_53227,G__52554_53228,G__52555_53229,G__52556_53230,G__52557_53231));
var G__52558_53237 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__52559_53238 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52560_53239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__52561_53240 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52562_53241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__52563_53242 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52558_53237,G__52559_53238,G__52560_53239,G__52561_53240,G__52562_53241,G__52563_53242) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52558_53237,G__52559_53238,G__52560_53239,G__52561_53240,G__52562_53241,G__52563_53242));
var G__52566_53243 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__52567_53244 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52568_53245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52569_53246 = ((function (G__52566_53243,G__52567_53244,G__52568_53245){
return (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});})(G__52566_53243,G__52567_53244,G__52568_53245))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52566_53243,G__52567_53244,G__52568_53245,G__52569_53246) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52566_53243,G__52567_53244,G__52568_53245,G__52569_53246));
var G__52574_53247 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__52575_53248 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52576_53249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__52577_53250 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52578_53251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__52579_53252 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52580_53253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__52581_53254 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52582_53255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__52583_53256 = ((function (G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255){
return (function (p__52584){
var vec__52585 = p__52584;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52585,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52585,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52585,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52585,(3),null);
var compare_fn = ((function (vec__52585,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255){
return (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__52585,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255))
;
var G__52605 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__52605__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__52605):G__52605);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__52605,G__52605__$1,compare_fn,vec__52585,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255){
return (function (p__52606){
var map__52607 = p__52606;
var map__52607__$1 = (((((!((map__52607 == null))))?(((((map__52607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52607):map__52607);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52607__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52607__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4131__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__52605,G__52605__$1,compare_fn,vec__52585,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255))
,G__52605__$1);
} else {
return G__52605__$1;
}
});})(G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255,G__52583_53256) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52574_53247,G__52575_53248,G__52576_53249,G__52577_53250,G__52578_53251,G__52579_53252,G__52580_53253,G__52581_53254,G__52582_53255,G__52583_53256));
var G__52609_53257 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__52610_53258 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52611_53259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__52612_53260 = ((function (G__52609_53257,G__52610_53258,G__52611_53259){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__52609_53257,G__52610_53258,G__52611_53259))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52609_53257,G__52610_53258,G__52611_53259,G__52612_53260) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52609_53257,G__52610_53258,G__52611_53259,G__52612_53260));
var G__52617_53261 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__52618_53262 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52619_53263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__52620_53264 = ((function (G__52617_53261,G__52618_53262,G__52619_53263){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__52617_53261,G__52618_53262,G__52619_53263))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52617_53261,G__52618_53262,G__52619_53263,G__52620_53264) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52617_53261,G__52618_53262,G__52619_53263,G__52620_53264));
var G__52622_53265 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__52624_53266 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52625_53267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__52626_53268 = ((function (G__52622_53265,G__52624_53266,G__52625_53267){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__52622_53265,G__52624_53266,G__52625_53267))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52622_53265,G__52624_53266,G__52625_53267,G__52626_53268) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52622_53265,G__52624_53266,G__52625_53267,G__52626_53268));
var G__52627_53269 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__52628_53270 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52629_53271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__52630_53272 = ((function (G__52627_53269,G__52628_53270,G__52629_53271){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__52627_53269,G__52628_53270,G__52629_53271))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52627_53269,G__52628_53270,G__52629_53271,G__52630_53272) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52627_53269,G__52628_53270,G__52629_53271,G__52630_53272));
var G__52631_53273 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__52632_53274 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52633_53275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__52634_53276 = ((function (G__52631_53273,G__52632_53274,G__52633_53275){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__52631_53273,G__52632_53274,G__52633_53275))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52631_53273,G__52632_53274,G__52633_53275,G__52634_53276) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52631_53273,G__52632_53274,G__52633_53275,G__52634_53276));
var G__52639_53277 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__52640_53278 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52641_53279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__52642_53280 = ((function (G__52639_53277,G__52640_53278,G__52641_53279){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__52639_53277,G__52640_53278,G__52641_53279))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52639_53277,G__52640_53278,G__52641_53279,G__52642_53280) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52639_53277,G__52640_53278,G__52641_53279,G__52642_53280));
var G__52647_53281 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__52648_53282 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52649_53283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52650_53284 = ((function (G__52647_53281,G__52648_53282,G__52649_53283){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__52647_53281,G__52648_53282,G__52649_53283))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52647_53281,G__52648_53282,G__52649_53283,G__52650_53284) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52647_53281,G__52648_53282,G__52649_53283,G__52650_53284));
var G__52652_53285 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__52653_53286 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52654_53287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52655_53288 = ((function (G__52652_53285,G__52653_53286,G__52654_53287){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__52652_53285,G__52653_53286,G__52654_53287))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52652_53285,G__52653_53286,G__52654_53287,G__52655_53288) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52652_53285,G__52653_53286,G__52654_53287,G__52655_53288));
var G__52661_53289 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__52662_53290 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52663_53291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__52664_53292 = ((function (G__52661_53289,G__52662_53290,G__52663_53291){
return (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__52661_53289,G__52662_53290,G__52663_53291))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52661_53289,G__52662_53290,G__52663_53291,G__52664_53292) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52661_53289,G__52662_53290,G__52663_53291,G__52664_53292));
var G__52665_53293 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__52666_53294 = ((function (G__52665_53293){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52665_53293))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52665_53293,G__52666_53294) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52665_53293,G__52666_53294));
var G__52671_53295 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__52672_53296 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52673_53297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__52674_53298 = ((function (G__52671_53295,G__52672_53296,G__52673_53297){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__52671_53295,G__52672_53296,G__52673_53297){
return (function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5739__auto__,G__52671_53295,G__52672_53296,G__52673_53297){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5739__auto__,G__52671_53295,G__52672_53296,G__52673_53297))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__52671_53295,G__52672_53296,G__52673_53297))
,traces);
});})(G__52671_53295,G__52672_53296,G__52673_53297))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52671_53295,G__52672_53296,G__52673_53297,G__52674_53298) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52671_53295,G__52672_53296,G__52673_53297,G__52674_53298));
var G__52679_53299 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__52680_53300 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52681_53301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__52682_53302 = ((function (G__52679_53299,G__52680_53300,G__52681_53301){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__52679_53299,G__52680_53300,G__52681_53301))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52679_53299,G__52680_53300,G__52681_53301,G__52682_53302) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52679_53299,G__52680_53300,G__52681_53301,G__52682_53302));
var G__52688_53303 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__52689_53304 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52690_53305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__52691_53306 = ((function (G__52688_53303,G__52689_53304,G__52690_53305){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__52688_53303,G__52689_53304,G__52690_53305))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52688_53303,G__52689_53304,G__52690_53305,G__52691_53306) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52688_53303,G__52689_53304,G__52690_53305,G__52691_53306));
var G__52693_53307 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__52694_53308 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52695_53309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52696_53310 = ((function (G__52693_53307,G__52694_53308,G__52695_53309){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__52693_53307,G__52694_53308,G__52695_53309))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52693_53307,G__52694_53308,G__52695_53309,G__52696_53310) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52693_53307,G__52694_53308,G__52695_53309,G__52696_53310));
var G__52701_53311 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__52702_53312 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52703_53313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52704_53314 = ((function (G__52701_53311,G__52702_53312,G__52703_53313){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__52701_53311,G__52702_53312,G__52703_53313))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52701_53311,G__52702_53312,G__52703_53313,G__52704_53314) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52701_53311,G__52702_53312,G__52703_53313,G__52704_53314));
var G__52709_53315 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__52710_53316 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52711_53317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52712_53318 = ((function (G__52709_53315,G__52710_53316,G__52711_53317){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__52709_53315,G__52710_53316,G__52711_53317))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52709_53315,G__52710_53316,G__52711_53317,G__52712_53318) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52709_53315,G__52710_53316,G__52711_53317,G__52712_53318));
var G__52723_53319 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__52724_53320 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52725_53321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__52726_53322 = ((function (G__52723_53319,G__52724_53320,G__52725_53321){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__52723_53319,G__52724_53320,G__52725_53321))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52723_53319,G__52724_53320,G__52725_53321,G__52726_53322) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52723_53319,G__52724_53320,G__52725_53321,G__52726_53322));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__52727_53323 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__52728_53324 = ((function (G__52727_53323){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__52727_53323))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52727_53323,G__52728_53324) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52727_53323,G__52728_53324));
var G__52730_53325 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__52731_53326 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52732_53327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__52733_53328 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52734_53329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__52735_53330 = ((function (G__52730_53325,G__52731_53326,G__52732_53327,G__52733_53328,G__52734_53329){
return (function (p__52737,_){
var vec__52738 = p__52737;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52738,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52738,(1),null);
var G__52741 = (window_width / char_width);
return Math.ceil(G__52741);
});})(G__52730_53325,G__52731_53326,G__52732_53327,G__52733_53328,G__52734_53329))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__52730_53325,G__52731_53326,G__52732_53327,G__52733_53328,G__52734_53329,G__52735_53330) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52730_53325,G__52731_53326,G__52732_53327,G__52733_53328,G__52734_53329,G__52735_53330));
var G__52744_53331 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__52745_53332 = ((function (G__52744_53331){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52744_53331))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52744_53331,G__52745_53332) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52744_53331,G__52745_53332));
var G__52746_53333 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__52747_53334 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52748_53335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__52749_53336 = ((function (G__52746_53333,G__52747_53334,G__52748_53335){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__52746_53333,G__52747_53334,G__52748_53335))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52746_53333,G__52747_53334,G__52748_53335,G__52749_53336) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52746_53333,G__52747_53334,G__52748_53335,G__52749_53336));
var G__52750_53341 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__52751_53342 = ((function (G__52750_53341){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__52750_53341))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52750_53341,G__52751_53342) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52750_53341,G__52751_53342));
var G__52753_53343 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__52754_53344 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52755_53345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__52756_53346 = ((function (G__52753_53343,G__52754_53344,G__52755_53345){
return (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});})(G__52753_53343,G__52754_53344,G__52755_53345))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52753_53343,G__52754_53344,G__52755_53345,G__52756_53346) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__52753_53343,G__52754_53344,G__52755_53345,G__52756_53346));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
