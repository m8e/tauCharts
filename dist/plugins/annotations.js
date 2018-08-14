!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"),require("d3-color"));else if("function"==typeof define&&define.amd)define([,"d3-color"],e);else{var a="object"==typeof exports?e(require("taucharts"),require("d3-color")):e(t.Taucharts,t.d3);for(var n in a)("object"==typeof exports?exports:t)[n]=a[n]}}(window,function(t,e){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=35)}({0:function(e,a){e.exports=t},12:function(t,a){t.exports=e},35:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(12);function o(t,e){return t.replace(/\{\{\s*(.+?)\s*\}\}/g,function(t,a){return e.hasOwnProperty(a)?e[a]:""})}var s=r.a.api.utils,c=r.a.api.pluginsSDK,u=function(t,e,a){"front"===a?t.push(e):t.unshift(e)},l=function(t){return function(e){var a={},n=[{dim:e.scaleX.dim,scale:e.scaleY,method:"yi",k:-1},{dim:e.scaleY.dim,scale:e.scaleX,method:"xi",k:1},{dim:null,scale:null,method:null,k:null}].find(function(e){return Array.isArray(t.dim)?t.dim.indexOf(e.dim)>=0:e.dim===t.dim});if(null===n.method)return a;var i=n.k,o={l:-.5,r:.5},s=n.method,c=n.scale;return a[s]=function(t){var a=(o[t.__pos__]||0)*i;if(c.discrete)return e[s](t)+c.stepSize(t[c.dim])*a;if(c.period){for(var n=r.a.api.tickPeriod.get(c.period,{utc:c.utcTime}),u=c.domain(),l=n.cast(u[0]);l<u[0];)l=n.next(l);var d=n.cast(u[1]),f=(c(d)-c(l))/(d-l);switch(t.__pos__){case"l":var m=Math.min(0,u[0]-l);return c(l)+f*m;case"r":m=Math.max(0,u[1]-d);return c(d)+f*m}}return e[s](t)},a}};function d(t){var e=s.defaults(t||{},{items:[],formatters:{}});return{init:function(t){var e=this;this._chart=t;var a=t.getSpec();a.scales.annotation_text={type:"value",dim:"text",source:"?"},a.transformations=a.transformations||{};var n=function(t){return a.settings.log(t,"LOG")};this._dataRefs={},a.transformations.dataRange=function(i,s){var c=s.from,u=s.to,l=t.getScaleInfo(s.primaryScale);if(l.period){var d=r.a.api.tickPeriod.get(l.period,{utc:a.settings.utcTime});c=d.cast(new Date(s.from)),u=d.cast(new Date(s.to))}var f=!l.isInDomain(c),m=!l.isInDomain(u);if(l.discrete?f||m:f&&m)return n("Annotation is out of domain"),[];var p=t.getScaleInfo(s.secondaryScale),y=p.domain(),v=[y[0],y[y.length-1]],h=l.dim,x=p.dim,g="__pos__",_={},S={},A={},D={};_[g]="l",_[h]=c,_[x]=v[0],S[g]="l",S[h]=u,S[x]=v[0],A[g]="r",A[h]=u,A[x]=v[1],D[g]="r",D[h]=c,D[x]=v[1];var b="y"===s.axis?A:D,R="y"===s.axis?D:A,T=e._getFormat(h);return s.startText&&(b.text=o(s.startText,{value:T(b[h])})),s.endText&&(R.text=o(s.endText,{value:T(R[h])})),e._useSavedDataRefs([_,S,A,D],String([h,c,u]))},a.transformations.dataLimit=function(i,s){var c=s.primaryScale,u=s.secondaryScale,l=t.getScaleInfo(c),d=l.period?r.a.api.tickPeriod.get(l.period,{utc:a.settings.utcTime}).cast(new Date(s.from)):s.from;if(!l.isInDomain(d))return n("Annotation is out of domain"),[];var f=t.getScaleInfo(u),m=f.domain(),p=[m[0],m[m.length-1]],y={},v={},h=l.dim,x=f.dim,g="__pos__",_=e._getFormat(h);return y[h]=d,y[x]=p[0],y[g]="l",s.startText&&(y.text=o(s.startText,{value:_(d)})),v[h]=d,v[x]=p[1],v[g]="r",s.endText&&(v.text=o(s.endText,{value:_(d)})),e._useSavedDataRefs([y,v],String([h,x,d]))},a.transformations.lineNoteData=function(a,i){var s=i.xScale,c=i.yScale,u=t.getScaleInfo(s),l=t.getScaleInfo(c),d=u.period?r.a.api.tickPeriod.get(u.period,{utc:u.utcTime}):null,f=l.period?r.a.api.tickPeriod.get(l.period,{utc:l.utcTime}):null,m=i.points.map(function(t){return[d?d.cast(t[0]):t[0],f?f.cast(t[1]):t[1]]});if(m.some(function(t){return!u.isInDomain(t[0])||!l.isInDomain(t[1])}))return n("Annotation is out of domain"),[];var p=u.dim,y=l.dim,v=[p,y].map(function(t){return e._getFormat(t)}),h=m.map(function(t,e){0===e||m.length;var a,n=0===e?i.startText:e===m.length-1?i.endText:"";return(a={})[p]=t[0],a[y]=t[1],a.text=n?o(n,{x:v[0](t[0]),y:v[1](t[1])}):null,a});return e._useSavedDataRefs(h,JSON.stringify([p,y,i.points]))}},addAreaNote:function(t,e,a){var n,r=t.scales[e.x],i=t.scales[e.y],o=a.dim===r.dim?["x","y"]:a.dim===i.dim?["y","x"]:null;if(null===o)return n="Annotation doesn't match any data field",void t.settings.log(n,"LOG");var s=a.val[0],c=a.val[1],d=a.text,f={type:"ELEMENT.PATH",namespace:"annotations",x:e.x,y:e.y,color:a.colorScaleName,label:"annotation_text",expression:{inherit:!1,operator:"none",params:[],source:"/"},transformModel:[l(a)],transformation:[{type:"dataRange",args:{axis:o[0],startText:"string"==typeof d?d:d.start,endText:"string"==typeof d?"":d.end,from:s,to:c,primaryScale:e[o[0]],secondaryScale:e[o[1]]}}],guide:{animationSpeed:e.guide.animationSpeed,showAnchors:"never",cssClass:"tau-chart__annotation-area",label:{fontColor:a.color,position:["r","b","keep-in-box"]}}};u(e.units,f,a.position)},addLineNote:function(t,e,a){var n,r,i=t.scales[e.x],o=t.scales[e.y],s=null,c=!0;if(Array.isArray(a.dim)?(c=!1,((n=a.dim)[0]===i.dim&&n[1]===o.dim||n[0]===o.dim&&n[1]===i.dim)&&(s=["x","y"])):a.dim===i.dim?s=["x","y"]:a.dim===o.dim&&(s=["y","x"]),null===s)return r="Annotation doesn't match any field",void t.settings.log(r,"LOG");var d=a.text,f={type:"ELEMENT.LINE",namespace:"annotations",x:e.x,y:e.y,label:"annotation_text",color:a.colorScaleName,expression:{inherit:!1,operator:"none",params:[],source:"/"},guide:{animationSpeed:e.guide.animationSpeed,showAnchors:"never",widthCssClass:"tau-chart__line-width-2",cssClass:"tau-chart__annotation-line",label:{fontColor:a.color,position:c?["r","b","keep-in-box"]:["auto:avoid-label-edges-overlap","auto:adjust-on-label-overflow","keep-in-box"]},x:{fillGaps:!1},y:{fillGaps:!1}}},m=c?{transformModel:[l(a)],transformation:[{type:"dataLimit",args:{from:a.val,startText:"string"==typeof d?"":d.start,endText:"string"==typeof d?d:d.end,primaryScale:e[s[0]],secondaryScale:e[s[1]]}}]}:{transformation:[{type:"lineNoteData",args:{points:n[0]===i.dim?a.val:a.val.map(function(t){return t.slice().reverse()}),startText:"string"==typeof d?"":d.start,endText:"string"==typeof d?d:d.end,xScale:e.x,yScale:e.y}}]};Object.assign(f,m),u(e.units,f,a.position)},onRender:function(){this._clearUnusedDataRefs()},onSpecReady:function(t,a){var n=this,r=[];this._setupAdditionalSeries(),this._startWatchingDataRefs(),t.traverseSpec(a,function(t){t&&"COORDS.RECT"===t.type&&t.units&&r.push(t)}),this._formatters=c.getFieldFormatters(a,e.formatters);var o=c.spec(a);r.forEach(function(t){e.items.map(function(t,e){var a=(t.color||"#BD10E0").toLowerCase(),n=i.rgb(a).toString();"black"!==a&&"rgb(0, 0, 0)"===n&&(n=null);var r=n||a,s="annotation_color_"+e;return o.addScale(s,{type:"color",source:"?",brewer:[r]}),{dim:t.dim,val:t.val,text:t.text,color:r,position:t.position,colorScaleName:s}}).forEach(function(e){var r;Array.isArray(e.dim)?Array.isArray(e.val)&&e.val.every(Array.isArray)?n.addLineNote(a,t,e):(r="Point annotation is not implemented yet",a.settings.log(r,"LOG")):Array.isArray(e.val)?n.addAreaNote(a,t,e):n.addLineNote(a,t,e)})})},_setupAdditionalSeries:function(){var t=this._chart,a=t.getSpec(),n=t.getDataSources()["/"].data,r=this._getAnnotatedDimValues(e.items);Object.keys(r).forEach(function(t){["x_"+t,"y_"+t].forEach(function(e){if(e in a.scales){var i=a.scales[e],o=n.map(function(e){return e[t]}),c=["period","time"].indexOf(i.type)>=0?r[t].map(function(t){return new Date(t)}):r[t];i.series=s.unique(o.concat(c))}})})},_getFormat:function(t){return this._formatters[t]?this._formatters[t].format:function(t){return String(t)}},_useSavedDataRefs:function(t,e){var a=this._dataRefs;return this._usedDataRefsKeys.add(e),e in a?(a[e].forEach(function(e,a){return Object.assign(e,t[a])}),a[e]):(a[e]=t,t)},_startWatchingDataRefs:function(){var t=this._dataRefs;this._initialDataRefsKeys=new Set(Object.keys(t)),this._usedDataRefsKeys=new Set},_clearUnusedDataRefs:function(){var t=this._dataRefs,e=this._initialDataRefsKeys,a=this._usedDataRefsKeys;Array.from(e).filter(function(t){return!a.has(t)}).forEach(function(e){return delete t[e]}),this._initialDataRefsKeys=null,this._usedDataRefsKeys=null},_getDataRowsFromItems:function(t){var e=function(t,e){return t.reduce(function(t,a,n){return t[a]=e[n],t},{})};return t.reduce(function(t,a){return Array.isArray(a.dim)?Array.isArray(a.val)&&a.val.every(Array.isArray)&&a.val.forEach(function(n){t.push(e(a.dim,n))}):Array.isArray(a.val)?a.val.forEach(function(n){t.push(e([a.dim],[n]))}):t.push(e([a.dim],[a.val])),t},[])},_getAnnotatedDimValues:function(t){var e={};return this._getDataRowsFromItems(t).forEach(function(t){Object.keys(t).forEach(function(a){e[a]=e[a]||[],e[a].push(t[a])})}),e}}}r.a.api.plugins.add("annotations",d),e.default=d}})});