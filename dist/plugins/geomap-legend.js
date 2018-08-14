!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"));else if("function"==typeof define&&define.amd)define([],t);else{var a="object"==typeof exports?t(require("taucharts")):t(e.Taucharts);for(var r in a)("object"==typeof exports?exports:e)[r]=a[r]}}(window,function(e){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=23)}({0:function(t,a){t.exports=e},23:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=i.a.api.utils;function l(e){n.defaults(e||{},{});var t=function(e,t,a,r){e.addEventListener(t,function(e){for(var t=e.target;t!==e.currentTarget&&null!==t;)t.classList.contains(a)&&r(e,t),t=t.parentNode})};return{init:function(e){this._chart=e,this._currentFilters={},this._legendColorByScaleId={};var a=this._chart.getSpec(),r=function(e){return function(t,r){var i=a.scales[r];return i.type===e&&i.dim&&t.push(r),t}};this._color=Object.keys(a.scales).reduce(r("color"),[]),this._fill=Object.keys(a.scales).reduce(r("fill"),[]);var i=this._color.length>0,n=this._fill.length>0;(i||n)&&(this._container=this._chart.insertToRightSidebar(this._containerTemplate),i&&(t(this._container,"click","tau-chart__legend__item-color",function(e,t){this._toggleLegendItem(t)}.bind(this)),t(this._container,"mouseover","tau-chart__legend__item-color",function(e,t){this._highlightToggle(t,!0)}.bind(this)),t(this._container,"mouseout","tau-chart__legend__item-color",function(e,t){this._highlightToggle(t,!1)}.bind(this))))},onSpecReady:function(){this._assignStaticBrewersOrEx()},onRender:function(){this._clearPanel(),this._drawColorLegend(),this._drawFillLegend()},_containerTemplate:'<div class="tau-chart__legend"></div>',_template:n.template('<div class="tau-chart__legend"><div class="tau-chart__legend__title"><%=name%></div><%=items%></div>'),_itemTemplate:n.template(["<div data-scale-id='<%= scaleId %>' data-dim='<%= dim %>' data-value='<%= value %>' class=\"tau-chart__legend__item tau-chart__legend__item-color <%=classDisabled%>\">",'<div class="tau-chart__legend__guide__wrap">','<div class="tau-chart__legend__guide <%=color%>"></div>',"</div>","<%=label%>","</div>"].join("")),_itemFillTemplate:n.template(['<div data-value=\'<%=value%>\' class="tau-chart__legend__item tau-chart__legend__item-color" style="padding: 6px 0px 10px 40px;margin-left:10px;">','<div class="tau-chart__legend__guide__wrap" style="top:0;left:0;">','   <span class="tau-chart__legend__guide" style="background-color:<%=color%>;border-radius:0"></span>','   <span style="padding-left: 20px"><%=label%></span>',"</div>","</div>"].join("")),_clearPanel:function(){this._container&&(this._container.innerHTML="")},_drawColorLegend:function(){var e=this;e._color.forEach(function(t){var a=e._chart.select(function(e){return e.config.color===t})[0];if(a){var r=a.getScale("color"),i=e._chart.getDataSources({excludeFilter:["legend"]}),l=n.unique(i[r.source].data.map(function(e){return e[r.dim]})).map(function(a){var i=n.escape(a),l=r.dim+i;return{scaleId:t,dim:r.dim,color:r(a),disabled:e._currentFilters.hasOwnProperty(l),label:a,value:i}});e._legendColorByScaleId[t]=l,e._container.insertAdjacentHTML("beforeend",e._template({items:l.map(function(t){return e._itemTemplate({scaleId:t.scaleId,dim:t.dim,color:t.color,classDisabled:t.disabled?"disabled":"",label:t.label,value:t.value})}).join(""),name:(((a.guide||{}).color||{}).label||{}).text||r.dim}))}})},_drawFillLegend:function(){var e=this;e._fill.forEach(function(t){var a=e._chart.select(function(e){return"COORDS.MAP"===e.config.type&&e.config.fill===t});if(a.length>0){var r=a[0].getScale("fill"),i=r.brewer,l=r.domain(),c=(l[1]-l[0])/i.length,o=n.range(i.length).map(function(t){var a=l[0]+t*c,o="";return 0===t&&(o=l[0]),t===i.length-1&&(o=l[1]),e._itemFillTemplate({color:r(a),label:o,value:n.escape(a)})});e._container.insertAdjacentHTML("beforeend",e._template({items:o.join(""),name:(((a[0].guide||{}).fill||{}).label||{}).text||r.dim}))}})},_toggleLegendItem:function(e){var t=e.getAttribute("data-scale-id"),a=e.getAttribute("data-dim"),r=e.getAttribute("data-value"),i=a+r,n=this._legendColorByScaleId[t].filter(function(e){return!e.disabled});if(1!==n.length||t!==n[0].scaleId||r!==n[0].value){var l=this._currentFilters;if(l.hasOwnProperty(i)){var c=l[i];delete l[i],e.classList.remove("disabled"),this._chart.removeFilter(c)}else e.classList.add("disabled"),l[i]=this._chart.addFilter({tag:"legend",predicate:function(e){return e[a]!=r}});this._chart.refresh()}},_highlightToggle:function(e,t){var a=e.getAttribute("data-scale-id"),r=e.getAttribute("data-dim"),i=e.getAttribute("data-value");this._chart.select(function(e){return e.config.color===a}).forEach(function(e){e.fire("highlight",function(e){return!t||e[r]==i})})},_generateColorMap:function(e){var t=n.range(20).map(function(e){return"color20-"+(1+e)});return e.reduce(function(e,a,r){return e[a]=t[r%20],e},{})},_assignStaticBrewersOrEx:function(){var e=this;e._color.forEach(function(t){var a=e._chart.getSpec().scales[t],r=e._chart.getDataSources({excludeFilter:["legend"]}),i=e._chart.getScaleFactory(r).createScaleInfoByName(t).domain();a.brewer||(a.brewer="measure"!==a.dimType?e._generateColorMap(i):["#e5f5e0","#a1d99b","#31a354"])})}}}i.a.api.plugins.add("geomap-legend",l),t.default=l}})});