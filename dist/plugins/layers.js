/*!
 * /*
 * taucharts@2.6.4 (2018-12-27)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"),require("d3-array"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-array"],t);else{var r="object"==typeof exports?t(require("taucharts"),require("d3-array")):t(e.Taucharts,e.d3);for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(window,function(e,t){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}({0:function(t,r){t.exports=e},28:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r.n(i),n=r(4),c=a.a.api.utils,o=a.a.api.pluginsSDK,u=o.tokens();function l(e){var t=c.defaults(e||{},{title:"Layers",label:"Layer Type",showPanel:!0,showLayers:!0,mode:"merge",axisWidth:45,layers:[]});t.layers.forEach(function(e){e.guide=c.defaults(e.guide||{},{scaleOrient:"left",textAnchor:"end",hide:!1})});var r=function(e){return function(t){return Object.assign(t,e)}},i={line:r({type:"ELEMENT.LINE"}),area:r({type:"ELEMENT.AREA"}),dots:r({type:"ELEMENT.POINT"}),scatterplot:r({type:"ELEMENT.POINT"}),bar:r({type:"ELEMENT.INTERVAL"}),"stacked-bar":r({type:"ELEMENT.INTERVAL",stack:!0})};return{init:function(e){this._chart=e;var r=o.spec(this._chart.getSpec()),i=this.checkIfApplicable(r);if(this._isApplicable=0===i.length,r.addTransformation("defined-only",function(e,t){var r=t.key;return e.filter(function(e){return null!==e[r]&&void 0!==e[r]})}),this._isApplicable){this.isFacet=this.checkIsFacet(r),this.primaryY=this.findPrimaryLayer(r);var a=this.getLayersText(),n=this.getLayersGroup(),u=t.label;this.fieldColorScale=u,r.setSettings("excludeNull",!1).setSettings("fitModel",null).addScale(u,{type:"color",source:"/",dim:u,brewer:t.brewer}).addTransformation("slice-layer",function(e,t){var r=t.key,i=t.group;return i?e.filter(function(e){var t=e[i],r=e[t];return t&&null!==r&&void 0!==r}):e.filter(function(e){return e[u]===a[r]&&null!==e[r]&&void 0!==e[r]})});var l=[this.primaryY].concat(t.layers).reduce(function(e,t){return e.concat(t.y)},[]);e.setupChartSourceModel(function(e){var t={};t[u]={type:"category"};var r={"/":{dims:t,data:[]}};return r["/"].dims=Object.assign(t,e["/"].dims),r["/"].data=e["/"].data.reduce(function(e,t){return e.concat(l.map(function(e){var r={};r[u]=a[e];var i=n[e];return i&&(r[i]=t[e],r.subLayer=i),Object.assign(r,t)}))},[]),Object.assign(r,c.omit(e,"/"))}),t.showPanel&&(this._container=e.insertToRightSidebar(this.containerTemplate),this._container.classList.add("applicable-true"),this.uiChangeEventsDispatcher=function(e){var r=e.target,i=r.classList;i.contains("i-role-show-layers")&&(t.showLayers=r.checked),i.contains("i-role-change-mode")&&(t.mode=r.value),this._chart.refresh()}.bind(this),this._container.addEventListener("change",this.uiChangeEventsDispatcher,!1))}else{r.getSettings("log")("[layers plugin]: is not applicable. "+i.join(" / "))}},getLayersText:function(){return[this.primaryY].concat(t.layers).reduce(function(e,t){return(Array.isArray(t.y)?t.y:[t.y]).reduce(function(e,r){return e[r]=this.extractLabelForKey(t,r),e}.bind(this),e)}.bind(this),{})},getLayersGroup:function(){return[this.primaryY].concat(t.layers).reduce(function(e,t){var r=null;return Array.isArray(t.y)&&(r=t.y.join(", ")),c.flatten([t.y]).reduce(function(e,t){return e[t]=r,e},e)}.bind(this),{})},checkIsFacet:function(e){return e.unit().reduce(function(e,t,r){return e||(r&&"COORDS.RECT"===r.type&&"COORDS.RECT"===t.type?e=!0:e)},!1)},checkIfApplicable:function(e){return e.unit().reduce(function(t,r,i){if(i&&"COORDS.RECT"!==i.type)return t.concat("Chart specification contains non-rectangular coordinates");if(i&&"COORDS.RECT"===i.type&&"COORDS.RECT"!==r.type){var a=e.getScale(r.y);if("measure"!==e.getSourceDim(a.source,a.dim).type)return t.concat("Y scale is not a measure")}return t},[])},isLeafElement:function(e,t){return t&&"COORDS.RECT"===t.type&&"COORDS.RECT"!==e.type},isFirstCoordNode:function(e,t){return!t&&e&&"COORDS.RECT"===e.type},isFinalCoordNode:function(e,t){return e&&"COORDS.RECT"===e.type&&e.units.every(function(e){return"COORDS.RECT"!==e.type})},buildLayersLayout:function(e){return e.regSource("$",{dims:{x:{type:"category"},y:{type:"category"}},data:[{x:1,y:1}]}).addScale("xLayoutScale",{type:"ordinal",source:"$",dim:"x"}).addScale("yLayoutScale",{type:"ordinal",source:"$",dim:"y"}).unit({type:"COORDS.RECT",x:"xLayoutScale",y:"yLayoutScale",expression:{source:"$",inherit:!1,operator:!1},guide:{showGridLines:"",x:{cssClass:"facet-axis"},y:{cssClass:"facet-axis"}}})},findPrimaryLayer:function(e){var t=this,r=e.unit().reduce(function(r,i){return r.concat(t.isFinalCoordNode(i)?{y:e.getScale(i.y).dim,isPrimary:!0,guide:i.guide.y,scaleName:i.y}:[])},[]);return o.cloneObject(r[0])},createPrimaryUnitReducer:function(e,r,i,a){var n=this;return function(c,o,u){var l=function(e){return!0!==e.guide.hide};if(n.isFacet&&n.isFirstCoordNode(o,u)){o.guide.y.label=o.guide.y.label||{};var s=o.guide.y.label._original_text||o.guide.y.label.text;o.guide.y.label.text=[s,r.filter(l).map(n.extractLayerLabel.bind(n)).join(", ")].join(e.getSettings("facetLabelDelimiter")),"dock"===t.mode&&(o.guide.y.label.padding-=15,o.guide.y.padding+=15,o.guide.y.rotate=-90,o.guide.y.textAnchor="middle")}return n.isLeafElement(o,u)&&(u.units=u.units.filter(function(e){return e!==o})),n.isFinalCoordNode(o)&&(o.guide.y.label=o.guide.y.label||{},"dock"===t.mode&&(o.guide.padding.l=i,o.guide.padding.r=a,o.guide.y.hide=!0),"merge"===t.mode&&(o.guide.y.label.text=n.isFacet?"":r.filter(l).map(n.extractLayerLabel.bind(n)).join(", "))),c}},createSecondaryUnitReducer:function(e,r,a,n,c,u,l,s){var d=this,y=d.getScaleName(r.scaleName||r.y),f=r.guide.scaleOrient,p=Array.isArray(r.y),g=r.isPrimary;return function(h,m,b){if(d.isFacet&&d.isFirstCoordNode(m,b)&&(m.guide.y.label.text="",m.guide.x.hide=!0,m.guide.y.hide=!0),d.isLeafElement(m,b)){(r.type?i[r.type]:function(e){return e})(m),m.y=y;var v=e.getScale(m.size).dim;if(g&&v);else{var x="size_null"+s;e.addScale(x,{type:"size",source:"?",mid:1}),m.size=x}var L=e.getScale(m.color).dim;g&&L||(m.color=d.fieldColorScale,m.expression.operator="groupBy",m.expression.params=p?["subLayer"]:[d.fieldColorScale]);var S=p?{group:"subLayer"}:{key:r.y};o.unit(m).addTransformation("slice-layer",S)}if(d.isFinalCoordNode(m)){if(m.y=y,m.guide.y=Object.assign(m.guide.y,r.guide||{}),m.guide.y.label=m.guide.y.label||{},m.guide.y.label.text=d.extractLayerLabel(r),m.guide.x.hide=!0,"dock"===t.mode){m.guide.showGridLines="",m.guide.padding.l=a,m.guide.padding.r=n,m.guide.y.label.textAnchor="end",m.guide.y.label.dock="right",m.guide.y.label.padding="right"===f?1:-10,m.guide.y.label.cssClass="label inline";var _="right"===f?l:u;m.guide.y.padding+=c*_}"merge"===t.mode&&(m.guide.showGridLines="",m.guide.y.hide=!0)}return h}},getScaleName:function(e){return Array.isArray(e)?e.join(", "):e},extractLabelForKey:function(e,t){var r=e.guide||{};r.label="string"==typeof r.label?{text:r.label}:r.label;var i=r.label||{},a=i.byKeys||{};return Array.isArray(e.y)?a[t]||t:i.text||i._original_text||e.y},extractLayerLabel:function(e){var t=this;return(Array.isArray(e.y)?e.y:[e.y]).map(function(r){return t.extractLabelForKey(e,r)}).join(", ")},onSpecReady:function(e,r){var i=this,a=o.spec(r);if(t.showLayers&&i._isApplicable){a=t.layers.reduce(function(e,t){var r=i.getScaleName(t.y);return e.addScale(r,Object.assign({type:"linear",source:"/",dim:r,autoScale:!0},c.pick(t.guide||{},"min","max","autoScale","nice","niceInterval")))},a);var n,u=[this.primaryY].concat(t.layers).sort(function(e,t){return(e.guide.zIndex||0)-(t.guide.zIndex||0)}),l=a.unit(),s=t.axisWidth,d=function(e){return function(t){var r=t.guide.scaleOrient||"left";return!0!==t.guide.hide&&r===e}},y=d("left"),f=d("right"),p=u.filter(y).length*s,g=u.filter(f).length*s,h=i.buildLayersLayout(a).addFrame({key:{x:1,y:1},units:[(n=o.unit(l.clone())).reduce(i.createPrimaryUnitReducer(a,u,p,g),n).value()]}),m=-1,b=-1;u.reduce(function(e,t,r){return m=y(t)?m+1:m,b=f(t)?b+1:b,e.addFrame({key:{x:1,y:1},units:[(n=o.unit(l.clone())).reduce(i.createSecondaryUnitReducer(a,t,p,g,s,m,b,r),n).value()]})},h)}else a.unit().traverse(function(e,t){i.isLeafElement(e,t)&&o.unit(e).addTransformation("defined-only",{key:a.getScale(e.y).dim})})},onUnitsStructureExpanded:function(){var e=this;if(e._isApplicable&&"merge"===t.mode){var r=o.spec(e._chart.getSpec()),i=e.primaryY.scaleName,a=t.layers.map(function(t){return e.getScaleName(t.y)}).filter(function(e){return r.getScale(e)}).concat(i),u=a.reduce(function(t,r){var i=e._chart.getScaleInfo(r);return t[r]=i.domain().filter(function(e){return Number.isFinite(e)}),t},{}),l=n.extent(c.flatten(Object.keys(u).map(function(e){return u[e]})));a.forEach(function(e){var t=r.getScale(e);t.min=l[0],t.max=l[1],t.nice=!1})}},containerTemplate:'<div class="tau-chart__trendlinepanel"></div>',template:c.template(['<label class="tau-chart__trendlinepanel__title tau-chart__checkbox">','   <input type="checkbox"','          class="tau-chart__checkbox__input i-role-show-layers"','          <%= (showLayers ? "checked" : "") %>',"   />",'   <span class="tau-chart__checkbox__icon"></span>','   <span class="tau-chart__checkbox__text"><%= title %></span>',"</label>","<div>",'<select class="i-role-change-mode tau-chart__select tau-chart__trendlinepanel__control">','   <option <%= ((mode === "dock")  ? "selected" : "") %> value="dock">'+u.get("Dock")+"</option>",'   <option <%= ((mode === "merge") ? "selected" : "") %> value="merge">'+u.get("Merge")+"</option>","</select>","</div>"].join("")),onRender:function(){this._isApplicable&&t.showPanel&&(this._container.innerHTML=this.template({title:t.title,mode:t.mode,showLayers:t.showLayers}))}}}a.a.api.plugins.add("layers",l),t.default=l},4:function(e,r){e.exports=t}})});