/*!
 * /*
 * taucharts@2.6.4 (2018-12-27)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"),require("d3-format"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-format"],t);else{var r="object"==typeof exports?t(require("taucharts"),require("d3-format")):t(e.Taucharts,e.d3);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=29)}({0:function(t,r){t.exports=e},29:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(9),o=a.a.api.utils,c=a.a.api.pluginsSDK,l=".tau-chart__legend__reset",s=".tau-chart__legend__item-color",u=".tau-chart__legend__guide--color__overlay",d=4,h=13,f=0,_=function(){return++f},g=a.a.api.utils.xml,m=function(e,t){var r=e[0],n=e[1],a=(n-r)/(t-1),i=o.range(t-2).map(function(e){return r+a*(e+1)});return[r].concat(i).concat(n)},p=function(e,t,r){if(e.length<3)return e.slice(0);if(t<3)return[e[0],e[e.length-1]];var n,a=e[0]<0?Math.abs(e[0]):0,i=function(e){return e},c="sqrt"===r?function(e){return Math.sqrt(e+a)}:i,l="sqrt"===r?function(e){return Math.pow(e,2)-a}:i,s=[(e=e.map(c))[0]],u=e[e.length-1]-e[0],d=.5*u/(t-1),h=o.range(1,t-1).map(function(e){var r=u*e/(t-1);return{min:r-d,mid:r,max:r+d,diff:Number.MAX_VALUE,closest:null}}),f=0,_=function(){if(f!==h.length){var e=n;(n=h[f++]).min=Math.max(n.min,(e&&null!==e.closest?e.closest:s[0])+d)}};return _(),e.forEach(function(e){if(!(e<n.min)){e>n.max&&_();var t=Math.abs(e-n.mid);t<n.diff&&t<d?(n.diff=t,n.closest=e):_(),0===t&&_()}}),h.forEach(function(e){null!==e.closest&&s.push(e.closest)}),s.push(e[e.length-1]),s=s.map(l)},v=function(e){return Math.log(e)/Math.LN10},b=function(e){return 0===e?0:Math.floor(v(Math.abs(e)))},y=function(){var e=/\.0+([^\d].*)?$/,t=/(\.\d+?)0+([^\d].*)?$/;return function(r){return r.replace(e,"$1").replace(t,"$1$2")}}(),x=i.format(".3s"),S=function(e){return y(x(e))},w=function(e,t){var r=Math.max(Math.abs(e),Math.abs(t)),n=b(r),a=e*t>0?Math.abs(t-e):r,i=b(a),o=Math.abs(n-i);return Math.abs(n)>3&&o<=3?S:function(e){var t=b(r-e),n=Math.min((i<0?Math.abs(i):0)+(t<i?1:0),20);return y(e.toFixed(n))}};function M(e){var t=!0,r=o.defaults(e||{},{formatters:{},onSelect:function(){}}),n=function(e){return null===e||""===e||void 0===e},a=function(e){return e.every(function(e){return o.isDate(e)})},i=function(e,t){return function(r){var a=r[e],i=JSON.stringify(n(a)?null:a);return t===i}},f=function(e,t,r,n){e.addEventListener(t,function(e){for(var t=e.target;t!==e.currentTarget&&null!==t;)t.matches(r)&&n(e,t),t=t.parentNode})};return{init:function(e){var t=this;this.instanceId=_(),this._chart=e,this._currentFilters={},this._legendColorByScaleId={},this._legendOrderState={};var n=this._chart.getSpec(),a=function(e){return function(t,r){var a=n.scales[r];return a.type===e&&a.dim&&t.push(r),t}};this._color=Object.keys(n.scales).reduce(a("color"),[]).filter(function(t){return e.getScaleInfo(t).discrete}),this._fill=Object.keys(n.scales).reduce(a("color"),[]).filter(function(t){return!e.getScaleInfo(t).discrete}),this._size=Object.keys(n.scales).reduce(a("size"),[]);var i=this._color.length>0,o=this._fill.length>0,c=this._size.length>0;if(this._assignStaticBrewersOrEx(),i||o||c){switch(r.position){case"left":this._container=this._chart.insertToLeftSidebar(this._containerTemplate);break;case"right":this._container=this._chart.insertToRightSidebar(this._containerTemplate);break;case"top":this._container=this._chart.insertToHeader(this._containerTemplate);break;case"bottom":this._container=this._chart.insertToFooter(this._containerTemplate);break;default:this._container=this._chart.insertToRightSidebar(this._containerTemplate)}i&&(f(this._container,"click",l,function(e,r){t._toggleLegendItem(r,"reset")}),f(this._container,"click",s,function(e,r){var n=e.ctrlKey||e.target.matches(u)?"leave-others":"focus-single";t._toggleLegendItem(r,n)}),f(this._container,"mouseover",s,function(e,r){t._highlightToggle(r,!0)}),f(this._container,"mouseout",s,function(e,r){t._highlightToggle(r,!1)}))}},destroy:function(){var e=this._currentFilters,t=this._chart;Object.keys(e).forEach(function(r){return t.removeFilter(e[r])}),this._container&&this._container.parentElement&&(this._clearPanel(),this._container.parentElement.removeChild(this._container))},onSpecReady:function(e,t){this._formatters=c.getFieldFormatters(t,r.formatters)},_getFormat:function(e){return this._formatters[e]?this._formatters[e].format:function(e){return String(e)}},onRender:function(){var e=this;if(t&&r.selectedCategories&&0!==r.selectedCategories.length){var n=this._getLegendColorByScales();return Object.keys(n).forEach(function(t){n[t].legendColorItems.forEach(function(t){var n=t.value,a=t.dim;if(-1===r.selectedCategories.indexOf(JSON.parse(n))){var o=a+n,c=i(a,n);e._currentFilters[o]=e._chart.addFilter({tag:"legend",predicate:function(e){return!c(e)}})}})}),t=!1,void this._chart.refresh()}this._clearPanel(),this._drawColorLegend(),this._drawFillLegend(),this._drawSizeLegend()},_containerTemplate:'<div class="tau-chart__legend"></div>',_template:o.template(['<div class="tau-chart__legend__wrap">',"<%=top%>",'<div class="tau-chart__legend__title"><%=name%></div>',"<%=items%>","</div>"].join("")),_itemTemplate:o.template(["<div data-scale-id='<%= scaleId %>' data-dim='<%= dim %>' data-value='<%= value %>' class=\"tau-chart__legend__item tau-chart__legend__item-color <%=classDisabled%>\">",'   <div class="tau-chart__legend__guide__wrap">','   <div class="tau-chart__legend__guide tau-chart__legend__guide--color <%=cssClass%>"','        style="background-color: <%=cssColor%>; border-color: <%=borderColor%>;">','       <div class="tau-chart__legend__guide--color__overlay">',"       </div>","   </div>","   </div>",'   <span class="tau-chart__legend__guide__label"><%=label%></span>',"</div>"].join("")),_resetTemplate:o.template(['<div class="tau-chart__legend__reset <%=classDisabled%>">','    <div role="button" class="tau-chart__button">Reset</div>',"</div>"].join("")),_clearPanel:function(){this._container&&(clearTimeout(this._scrollTimeout),this._getScrollContainer().removeEventListener("scroll",this._scrollListener),this._container.innerHTML="")},_drawFillLegend:function(){var e=this;e._fill.forEach(function(t){var r=e._chart.select(function(e){return e.config.color===t})[0];if(r){var n=r.config.guide||{},i=r.getScale("color"),l=i.domain().sort(function(e,t){return e-t}),s=a(l),u=s?l.map(Number):l,d=w(u[0],u[u.length-1]),f=function(){var t=e._chart.getSpec(),r=c.extractFieldsFormatInfo(t)[i.dim].format;return r||(r=function(e){return new Date(e)}),function(e){return String(r(e))}}(),_=s?f:d,p=i.brewer.length,v=((n.color||{}).label||{}).text||i.dim,b=function(e){return e.length*h*.618},y=i.isInteger?(u[1]-u[0])%3==0?4:(u[1]-u[0])%2==0?3:2:3,x=m(u,y),S=(s?x.map(function(e){return new Date(e)}):x).map(_);S[0]===S[S.length-1]&&(S=[S[0]]),e._container.insertAdjacentHTML("beforeend",e._template({name:o.escape(v),top:null,items:'<div class="tau-chart__legend__gradient-wrapper"></div>'}));var M=e._container.lastElementChild.querySelector(".tau-chart__legend__gradient-wrapper"),T=M.getBoundingClientRect().width,C=!1;S.reduce(function(e,t){return e+b(t)},0)>T&&(S.length>1&&b(S[0])+b(S[S.length-1])>T?C=!0:S=[S[0],S[S.length-1]]);var L=C?function(){var e=-.382*h/2;return{width:T,height:120,barX:0,barY:0,barWidth:20,barHeight:120,textAnchor:"start",textX:o.range(y).map(function(){return 25}),textY:1===S.length?60+.618*h:S.map(function(t,r){var n=(S.length-1-r)/(S.length-1);return h*(1-n)+120*n+e})}}():function(){var e=b(S[0])/2,t=b(S[S.length-1])/2;return{width:T,height:28+h,barX:0,barY:0,barWidth:T,barHeight:20,textAnchor:"middle",textX:1===S.length?[T/2]:S.map(function(r,n){var a=n/(S.length-1);return e*(1-a)+(T-t)*a}),textY:o.range(y).map(function(){return 28+h})}}(),j=m(u,p).map(function(e,t){return g("stop",{offset:t/(p-1)*100+"%",style:"stop-color:"+i(e)+';stop-opacity:1"'})}),F="legend-gradient-"+e.instanceId,A=g.apply(void 0,["svg",{class:"tau-chart__legend__gradient",width:L.width,height:L.height},g("defs",g.apply(void 0,["linearGradient",{id:F,x1:"0%",y1:C?"100%":"0%",x2:C?"0%":"100%",y2:"0%"}].concat(j))),g("rect",{class:"tau-chart__legend__gradient__bar",x:L.barX,y:L.barY,width:L.barWidth,height:L.barHeight,fill:"url(#"+F+")"})].concat(S.map(function(e,t){return g("text",{x:L.textX[t],y:L.textY[t],"text-anchor":L.textAnchor},e)})));M.insertAdjacentHTML("beforeend",A)}})},_drawSizeLegend:function(){var e=this;e._size.forEach(function(t){var r=e._chart.select(function(e){return e.config.size===t})[0];if(r){var n=r.config.guide||{},a=r.getScale("size"),i=a.domain().sort(function(e,t){return e-t});if(!Array.isArray(i)||!i.every(isFinite))return;var c=((n.size||{}).label||{}).text||a.dim,l=i[0],s=i[i.length-1],u=[l];if(s-l){var f=v(s-l),_=Math.round(4-f),m=Math.pow(10,_),b=o.unique(e._chart.getDataSources({excludeFilter:["legend"]})[a.source].data.map(function(e){return e[a.dim]}).filter(function(e){return e>=l&&e<=s})).sort(function(e,t){return e-t}),y=p(b,d,a.funcType);u=o.unique(y.map(function(e){return Math.round(e*m)/m}))}var x=w(u[0],u[u.length-1]),S=function(e){return e.length*h*.618};u.reverse();var M=u.map(a),T=Math.max.apply(null,M),C=u.map(x);e._container.insertAdjacentHTML("beforeend",e._template({name:o.escape(c),top:null,items:'<div class="tau-chart__legend__size-wrapper"></div>'}));var L=e._container.lastElementChild.querySelector(".tau-chart__legend__size-wrapper"),j=L.getBoundingClientRect().width,F=!1;(Math.max.apply(null,C.map(S))>j/4||1===C.length)&&(F=!0);var A=F?function(){for(var e=h,t=M[0]/2,r=M[M.length-1]/2,n=[t],a=1,i=void 0,c=void 0;a<M.length;a++)c=M[a-1]/2,i=M[a]/2,n.push(n[a-1]+Math.max(1.618*h,c+e+i));var l=.618*h/2;return{width:j,height:n[n.length-1]+Math.max(r,h/2),circleX:o.range(M.length).map(function(){return T/2}),circleY:n,textAnchor:"start",textX:o.range(C.length).map(function(){return T+8}),textY:n.map(function(e){return e+l})}}():function(){for(var e=Math.max(S(C[0])/2,M[0]/2),t=Math.max(S(C[C.length-1])/2,M[M.length-1]/2),r=(j-M.reduce(function(e,t,r){return e+(0===r||r===M.length-1?t/2:t)},0)-e-t)/(d-1),n=[e],a=1,i=void 0,c=void 0;a<M.length;a++)c=M[a-1]/2,i=M[a]/2,n.push(n[a-1]+c+r+i);var l=M.map(function(e){return T-e/2});return{width:j,height:T+8+h,circleX:n,circleY:l,textAnchor:"middle",textX:n,textY:o.range(C.length).map(function(){return T+8+h})}}(),O=g.apply(void 0,["svg",{class:"tau-chart__legend__size",width:A.width,height:A.height}].concat(M.map(function(e,t){return g("circle",{class:"tau-chart__legend__size__item__circle "+(r.config.color?"color-definite":"color-default-size"),cx:A.circleX[t],cy:A.circleY[t],r:e/2})}),C.map(function(e,t){return g("text",{class:"tau-chart__legend__size__item__label",x:A.textX[t],y:A.textY[t],"text-anchor":A.textAnchor},e)})));L.insertAdjacentHTML("beforeend",O)}})},_getLegendColorByScales:function(){var e=this;return e._color.reduce(function(t,r){var i=e._chart.select(function(e){return e.config.color===r})[0];if(i){var c=i.config.guide||{},l=i.getScale("color"),s=e._chart.getDataSources({excludeFilter:["legend"]}),u=o.unique(s[l.source].data.map(function(e){return e[l.dim]})),d=e._chart.getSpec().scales[r],h=a(u);if(d.order)u=o.union(o.intersection(d.order,u),u);else if("order"===d.dimType&&h)u=u.sort(function(e,t){return new Date(e)-new Date(t)});else{var f=e._legendOrderState[r];u=u.sort(function(e,t){var r=f[e]-f[t];return r&&r/Math.abs(r)})}var _=((c.color||{}).label||{}).text||l.dim,g=(c.color||{}).tickFormatNullAlias||"No "+_,m=e._getFormat(l.dim),p=u.map(function(t){var a=JSON.stringify(n(t)?null:t),i=l.dim+a;return{scaleId:r,dim:l.dim,color:l(t),disabled:e._currentFilters.hasOwnProperty(i),label:m(t),value:a}});t[r]={legendColorItems:p,title:_,colorScale:l,noVal:g}}return t},{})},_drawColorLegend:function(){var e=this,t=this._getLegendColorByScales();Object.keys(t).forEach(function(r){var a=t[r],i=a.legendColorItems,c=a.title,l=a.colorScale,s=a.noVal;e._container.insertAdjacentHTML("beforeend",e._template({name:o.escape(c),top:e._resetTemplate({classDisabled:i.some(function(e){return e.disabled})?"":"disabled"}),items:i.map(function(t){return e._itemTemplate({scaleId:t.scaleId,dim:o.escape(t.dim),color:t.color,cssClass:l.toClass(t.color),cssColor:t.disabled?"transparent":l.toColor(t.color),borderColor:l.toColor(t.color),classDisabled:t.disabled?"disabled":"",label:o.escape(n(t.label)?s:t.label),value:o.escape(t.value)})}).join("")}))}),e._color.length>0&&(e._updateResetButtonPosition(),e._scrollTimeout=null,e._scrollListener=function(){var t=e._container.querySelector(l);t.style.display="none",e._scrollTimeout&&clearTimeout(e._scrollTimeout),e._scrollTimeout=setTimeout(function(){e._updateResetButtonPosition(),t.style.display="",e._scrollTimeout=null},250)},e._getScrollContainer().addEventListener("scroll",e._scrollListener))},_toggleLegendItem:function(e,t){var n=this,a=this._currentFilters,o=e?Array.prototype.filter.call(e.parentNode.childNodes,function(e){return e.matches(s)}):null,c=function(e){var t=e.getAttribute("data-dim"),r=e.getAttribute("data-value");return{sid:e.getAttribute("data-scale-id"),dim:t,val:r,key:t+r}},l=function(e){return e in a},u=function(e,t){var r=c(e);if(l(r.key)===t)if(t){var o=a[r.key];delete a[r.key],e.classList.remove("disabled"),n._chart.removeFilter(o)}else{e.classList.add("disabled");var s=i(r.dim,r.val);a[r.key]=n._chart.addFilter({tag:"legend",predicate:function(e){return!s(e)}})}},d=function(t){return t===e},h=!!e&&l(c(e).key),f=function(e,t){e.querySelector(".tau-chart__legend__guide").style.backgroundColor=t?"":"transparent"};if("reset"===t)o.forEach(function(e){u(e,!0),f(e,!0)});else if("leave-others"===t)o.forEach(function(e){d(e)&&u(e,h)}),f(e,h);else if("focus-single"===t){var _=!h&&o.every(function(e){return d(e)||l(c(e).key)});o.forEach(function(e){var t=d(e)||_;u(e,t)}),h&&f(e,!0)}var g=o.filter(function(e){return!l(c(e).key)}).map(function(e){return JSON.parse(c(e).val)});r.onSelect({type:t,selectedCategories:g}),this._chart.refresh()},_highlightToggle:function(e,t){if(!e.matches(".disabled")){var r=e.getAttribute("data-dim"),n=e.getAttribute("data-value"),a=t?i(r,n):function(e){return null};this._chart.select(function(e){return!0}).forEach(function(e){e.fire("highlight",a)})}},_getScrollContainer:function(){return this._container.parentNode.parentNode},_updateResetButtonPosition:function(){this._container.querySelector(l).style.top=this._getScrollContainer().scrollTop+"px"},_generateColorMap:function(e,t){var r=t.length;return e.reduce(function(e,n,a){return e[n]=t[a%r],e},{})},_assignStaticBrewersOrEx:function(){var e=this;e._color.forEach(function(t){var r=e._chart.getSpec().scales[t],n=e._chart.getDataSources({excludeFilter:["legend"]}),a=e._chart.getScaleFactory(n).createScaleInfoByName(t).domain();if(!r.brewer||Array.isArray(r.brewer)){var i=r.brewer||o.range(20).map(function(e){return"color20-"+(1+e)});r.brewer=e._generateColorMap(a,i)}e._legendOrderState[t]=a.reduce(function(e,t,r){return e[t]=r,e},{})})}}}a.a.api.plugins.add("legend",M),t.default=M},9:function(e,r){e.exports=t}})});