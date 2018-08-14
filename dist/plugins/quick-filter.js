!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"),require("d3-selection"),require("d3-array"),require("d3-time-format"),require("d3-scale"),require("d3-brush"));else if("function"==typeof define&&define.amd)define([,"d3-selection","d3-array","d3-time-format","d3-scale","d3-brush"],e);else{var r="object"==typeof exports?e(require("taucharts"),require("d3-selection"),require("d3-array"),require("d3-time-format"),require("d3-scale"),require("d3-brush")):e(t.Taucharts,t.d3,t.d3,t.d3,t.d3,t.d3);for(var i in r)("object"==typeof exports?exports:t)[i]=r[i]}}(window,function(t,e,r,i,n,a){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(e,r){e.exports=t},function(t,r){t.exports=e},,function(t,e){t.exports=r},,function(t,e){t.exports=i},function(t,e){t.exports=n},function(t,e){t.exports=a},,,,,,,,,,function(t,e,r){"use strict";r.r(e);var i=r(0),n=r.n(i),a=r(3),s=r(7),o=r(6),l=r(1),c=r(5),u=(Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t})({},a,s,o,l,c),f=n.a.api.utils,d=0;function h(t){return{init:function(e){this._chart=e,this._currentFilters={},this._data={},this._bounds={},this._filter={},this._container={},this._layout=this._chart.getLayout().layout;var r=this,i=this._chart.getSpec(),n=i.sources["/"],a=t&&t.fields||t;this._fields=Array.isArray(a)&&a.length>0?a:Object.keys(n.dims),this._applyImmediately=Boolean(t&&t.applyImmediately);var s=r._chart.getChartModelData();this._filtersContainer=r._chart.insertToRightSidebar(r._filtersContainer),this._filtersContainer.style.maxHeight="0px",r._fields.filter(function(t){var e="measure"===n.dims[t].type;return e||i.settings.log("The ["+t+"] isn't measure so Quick Filter plugin skipped it"),e}).forEach(function(t){r._data[t]=s.map(function(e){return e[t]}),r._bounds[t]=u.extent(r._data[t]),r._filter[t]=r._bounds[t],r._filtersContainer.insertAdjacentHTML("beforeend",r._filterWrapper({name:t})),r._container[t]=r._filtersContainer.lastChild,r._drawFilter(t)})},onRender:function(){this._filtersContainer.style.maxHeight="none"},_filtersContainer:'<div class="tau-chart__filter"></div>',_filterWrapper:f.template('<div class="tau-chart__filter__wrap"><div class="tau-chart__legend__title"><%=name%></div></div>'),_drawFilter:function(t){var e=this._data[t],r=this._bounds[t],i=this._filter[t],n=f.isDate(r[0])||f.isDate(r[1]),a=this,s=0,o=24,c=21,d=12,h=180-d-o,p=41-s-c-8,_=u.scaleLinear().domain(r).range([0,h]),m=u.brushX().extent([[0,0],[h,20]]).on("start",function(){a._layout.style["overflow-y"]="hidden"}).on("brush",this._applyImmediately?j:F).on("end",function(){a._layout.style["overflow-y"]="",j()}),v=u.select(this._container[t]).append("svg").attr("width",h+d+o).attr("height",p+s+c+4).append("g").attr("transform","translate("+d+","+s+")"),y=(v.append("g").selectAll("rect").data(e).enter().append("rect").attr("transform",function(t){return"translate("+_(t)+","+(s+4)+")"}).attr("height",p).attr("width",1),v.append("g").attr("class","brush").call(m));y.append("g").attr("class","resize e").attr("cursor","ew-resize").attr("pointer-events","none"),y.append("g").attr("class","resize w").attr("cursor","ew-resize").attr("pointer-events","none"),y.selectAll(".resize").append("line").attr("transform","translate(0, 0)").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",p+8),y.selectAll(".resize").append("text").attr("x",0).attr("y",2*(p+4)),y.selectAll("rect").attr("height",p+8);var g=v.append("text").attr("x",h/2).attr("y",2*(p+4)).attr("class","date-label"),x=function(t){return Math.log(t)/Math.LN10}(a._filter[t][1]-a._filter[t][0]),b=Math.round(3-x),w=Math.pow(10,b);if(n){var q=function(t){var e=t.findIndex(function(t){var e=u.timeFormat(t);return e(new Date(r[0]))!==e(new Date(r[1]))});return e=e<0?t.length:e,{comm:t.slice(0,e),diff:t.slice(e)}}(["’%y","&thinsp;%b","%d","%H",":%M",":%S"]);q.comm.length<3?(q.diff.splice(-3),q.diff.reverse(),q.comm.reverse()):(q.comm.length<5&&q.diff.pop(),q.diff=q.comm.splice(3,q.comm.length-3).concat(q.diff),q.comm.reverse())}function F(){var e=l.event;if(e&&Array.isArray(e.selection)){var r=e.selection.map(_.invert);i=r,a._filter[t]=r}else i=a._filter[t];var s=n?new Date(i[0]).getTime():i[0],o=n?new Date(i[1]).getTime():i[1],c=Math.round(parseFloat(s)*w)/w,f=Math.round(parseFloat(o)*w)/w;y.select(".handle--w"),y.select(".handle--e");y.select(".resize.w").attr("transform","translate("+_(i[0])+",0)"),y.select(".resize.e").attr("transform","translate("+_(i[1])+",0)");var d=y.selectAll(".w text"),h=y.selectAll(".e text");if(n){var p=u.timeFormat(q.comm.join("")),m=u.timeFormat(q.diff.join(""));g.html(m(new Date(c))+"&thinsp;..&thinsp;"+m(new Date(f))+' <tspan class="common">'+p(new Date(f))+"</tspan>")}else d.text(c),h.text(f)}function j(){F(),a._applyFilter(t)}j(),m.move(y,i.map(_))},destroy:function(){var t=this._currentFilters,e=this._chart;Object.keys(t).forEach(function(r){return e.removeFilter(t[r])});var r;(r=this._filtersContainer)&&r.parentElement&&r.parentElement.removeChild(r)},_applyFilter:function(t){var e=this._currentFilters,r=function(t,e,r){return function(i){var n=i[t];return n<e||n>r}}(t,this._filter[t][0],this._filter[t][1]),i=e[t];delete e[t],this._chart.removeFilter(i),e[t]=this._chart.addFilter({tag:"quick-filter",predicate:function(t){return!r(t)}}),d<0?this._chart.refresh():(this._refreshRequestId&&clearTimeout(this._refreshRequestId),this._refreshRequestId=setTimeout(function(){this._refreshRequestId=null,this._chart.refresh()}.bind(this),d))}}}n.a.api.plugins.add("quick-filter",h),e.default=h}])});