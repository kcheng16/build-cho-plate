!function(){var t={9662:function(t,e,n){var r=n(7854),o=n(614),i=n(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:function(t,e,n){var r=n(7854),o=n(111),i=r.String,a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,o=n(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),a=function(t){return function(e,n,a){var c,u=r(e),s=i(u),f=o(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,e,n){var r=n(9974),o=n(1702),i=n(8361),a=n(7908),c=n(6244),u=n(5417),s=o([].push),f=function(t){var e=1==t,n=2==t,o=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(g,m,v,h){for(var b,y,x=a(g),E=i(x),w=r(m,v),S=c(E),k=0,O=h||u,L=e?O(g,S):n||p?O(g,0):void 0;S>k;k++)if((d||k in E)&&(y=w(b=E[k],k,x),t))if(e)L[k]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:s(L,b)}else switch(t){case 4:return!1;case 7:s(L,b)}return l?-1:o||f?f:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,n){var r=n(7854),o=n(3157),i=n(4411),a=n(111),c=n(5112)("species"),u=r.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===u||o(e.prototype))||a(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?u:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),c=n(5112)("toStringTag"),u=r.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=u(t),c))?n:s?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,u(e,f))}}},4964:function(t,e,n){var r=n(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),u=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,d,g=t.target,m=t.global,v=t.stat;if(n=m?r:v?r[g]||c(g,{}):(r[g]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(m?f:g+(v?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var r=n(1702),o=n(9662),i=r(r.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?i(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},1702:function(t){var e=Function.prototype,n=e.bind,r=e.call,o=n&&n.bind(r);t.exports=n?function(t){return t&&o(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),o=n(1702),i=n(7293),a=n(4326),c=r.Object,u=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):c(t)}:c},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(8536),c=n(7854),u=n(1702),s=n(111),f=n(8880),l=n(2597),p=n(5465),d=n(6200),g=n(3501),m="Object already initialized",v=c.TypeError,h=c.WeakMap;if(a||p.state){var b=p.state||(p.state=new h),y=u(b.get),x=u(b.has),E=u(b.set);r=function(t,e){if(x(b,t))throw new v(m);return e.facade=t,E(b,t,e),e},o=function(t){return y(b,t)||{}},i=function(t){return x(b,t)}}else{var w=d("state");g[w]=!0,r=function(t,e){if(l(t,w))throw new v(m);return e.facade=t,f(t,w,e),e},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),c=n(5005),u=n(2788),s=function(){},f=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=r(p.exec),g=!p.exec(s),m=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(t){return!1}};t.exports=!l||o((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return g||!!d(p,u(t))}:m},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,e){var n=u[c(t)];return n==f||n!=s&&(o(e)?r(e):!!e)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(7854),o=n(5005),i=n(614),a=n(7976),c=n(3307),u=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,u(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3929:function(t,e,n){var r=n(7854),o=n(7850),i=r.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},30:function(t,e,n){var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),u=n(490),s=n(317),f=n(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},g=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;g="undefined"!=typeof document?document.domain&&r?d(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):d(r);for(var n=a.length;n--;)delete g.prototype[a[n]];return g()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[f]=t):n=g(),void 0===e?n:i(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3070),i=n(9670),a=n(5656),c=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),u=c(e),s=u.length,f=0;s>f;)o.f(t,n=u[f++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),o=n(9781),i=n(4664),a=n(9670),c=n(4948),u=r.TypeError,s=Object.defineProperty;e.f=o?s:function(t,e,n){if(a(t),e=c(e),a(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),c=n(5656),u=n(4948),s=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=u(e),f)try{return l(t,e)}catch(t){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,c=n(3501),u=r([].push);t.exports=function(t,e){var n,r=i(t),s=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&u(f,n);for(;e.length>s;)o(r,n=e[s++])&&(~a(f,n)||u(f,n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(7854),o=n(6916),i=n(614),a=n(111),c=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!a(r=o(n,t)))return r;if(i(n=t.valueOf)&&!a(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!a(r=o(n,t)))return r;throw c("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),c=n(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=a.f;return n?u(e,n(t)):e}},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(2597),a=n(8880),c=n(3505),u=n(2788),s=n(9909),f=n(6530).CONFIGURABLE,l=s.get,p=s.enforce,d=String(String).split("String");(t.exports=function(t,e,n,u){var s,l=!!u&&!!u.unsafe,g=!!u&&!!u.enumerable,m=!!u&&!!u.noTargetGet,v=u&&void 0!==u.name?u.name:e;o(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==v)&&a(n,"name",v),(s=p(n)).source||(s.source=d.join("string"==typeof v?v:""))),t!==r?(l?!m&&t[e]&&(g=!0):delete t[e],g?t[e]=n:a(t,e,n)):g?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},4488:function(t,e,n){var r=n(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),o=n(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,n){var r=n(7854),o=n(6916),i=n(111),a=n(2190),c=n(8173),u=n(2140),s=n(5112),f=r.TypeError,l=s("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var n,r=c(t,l);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||a(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(7854),o=n(648),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,n){var r=n(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),c=n(133),u=n(3307),s=o("wks"),f=r.Symbol,l=f&&f.for,p=u?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=u&&l?l(e):p(e)}return s[t]}},6699:function(t,e,n){"use strict";var r=n(2109),o=n(1318).includes,i=n(1223);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},7941:function(t,e,n){var r=n(2109),o=n(7908),i=n(1956);r({target:"Object",stat:!0,forced:n(7293)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},2023:function(t,e,n){"use strict";var r=n(2109),o=n(1702),i=n(3929),a=n(4488),c=n(1340),u=n(4964),s=o("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~s(c(a(this)),c(i(t)),arguments.length>1?arguments[1]:void 0)}})},4747:function(t,e,n){var r=n(7854),o=n(8324),i=n(8509),a=n(8533),c=n(8880),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)o[s]&&u(r[s]&&r[s].prototype);u(i)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(4747),n(6699),n(2023),n(7941);var t={apple:{size:"100g",kcal:61,carb:1,img:"./images/gala-apple.png"},banana:{size:"1 banana (115g)",kcal:113,carb:3,img:"./images/gifs/banana.gif"},"baked potato":{kcal:124,carb:3,size:"1 potato (156g)",img:"./images/bakedpotato.gif"},butter:{size:"1 pat (5g)",kcal:36,carb:0,img:"./images/butterslice.png"},"blueberry muffin":{kcal:424,carb:6,size:"1 medium (113g)",img:"./images/blueberrymuffin.png"},"broccoli, cooked with oil":{size:"1cup",kcal:98,carb:1,img:"./images/gifs/broccoli.gif"},"cereal and milk":{size:"1cup + 1/2cup",kcal:226,carb:3,img:"./images/cereal-and-milk.png"},"egg, hardboiled":{size:"1 large",kcal:78,carb:0,img:"./images/hardboilegg.png"},"greek salad":{size:"1cup",kcal:44,carb:4,img:"./images/gifs/greeksalad.gif"},"fruit salad (peach and pear and apricot and pineapple and cherry)":{size:"1/2c",kcal:65,carb:2,img:"./images/fruit-salad.png"},"grilled chicken breast":{size:"1 medium slice",kcal:124,carb:0,img:"./images/chicken-breast.png"},"refried beans":{kcal:214,carb:3,size:"1cup",img:"./images/refriedbeans.png"},"spaghetti with meat sauce":{kcal:670,carb:7,size:"554g",img:"./images/spaghettiwithmeatsauce.png"},"half spaghetti with meat sauce":{kcal:335,carb:4,size:"277g",img:"./images/halfspaghetti.png"},"orange, navel":{size:"1each (140g)",kcal:73,carb:2,img:"./images/navel-orange.png"},"half-orange, navel":{size:"1/2each (70g)",kcal:37,carb:1,img:"./images/half-orange.png"},"roast beef":{size:'1 thick slice (4.5" x 2.5" x3/8")',kcal:100,carb:0,img:"./images/roastbeef.png"},"white rice":{size:"1/2cup",kcal:121,carb:3,img:"./images/whiterice.png"},"tuna sandwich":{size:"1 regular sandwich (180g)",kcal:396,carb:3,img:"./images/tuna-sandwich.png"},"white bread":{size:"1slice",kcal:66,carb:1,img:"./images/whitebread.png"},"wheat bagel":{kcal:245,carb:5,size:"1 bagel (98g)",img:"./images/wheatbagel.png"}},e={1:{food:["apple","cereal and milk","egg, hardboiled","blueberry muffin","wheat bagel","white bread","butter","banana","orange, navel"],carbMax:3},2:{food:["grilled chicken breast","white rice","baked potato","spaghetti with meat sauce","half spaghetti with meat sauce","greek salad","half-orange, navel","egg, hardboiled","tuna sandwich"],carbMax:5},3:{food:["white rice","refried beans","baked potato","white bread","half spaghetti with meat sauce","broccoli, cooked with oil","roast beef","fruit salad (peach and pear and apricot and pineapple and cherry)","butter"],carbMax:5}};document.addEventListener("load",(function(){var n=document.getElementById("startgame"),r=document.getElementById("blur");n.addEventListener("click",(function(t){n.style="display: none",r.style="display: none"}));var o,i,a=document.getElementById("food-bank"),c=1,u=e[c].carbMax,s=0,f=0;document.getElementById("plate"),e[c].food.forEach((function(e){(o=document.createElement("li")).setAttribute("draggable",!0),o.setAttribute("class","draggable"),i=document.createElement("img"),Object.keys(t).includes(e)&&(i.id="".concat(e),i.src=t[e].img,i.title="".concat(e),o.appendChild(i)),a.appendChild(o)})),document.querySelectorAll(".draggable").forEach((function(t){t.addEventListener("dragstart",(function(){t.classList.add("dragging")})),t.addEventListener("dragend",(function(){t.classList.remove("dragging")}))})),a.addEventListener("dragover",(function(t){t.preventDefault();var e=document.querySelector(".dragging");a.appendChild(e)}));var l=document.getElementById("plate-ul");function p(){for(var t=l.children.length-1;t>=0;t--){var e=l.children[t];l.children[t].remove(),a.appendChild(e)}s=0,f=0,document.getElementsByClassName("kcal")[0].innerText=f,document.getElementsByClassName("carb-count")[0].innerText=s;for(var n=document.getElementById("facts"),r=n.children.length-1;r>=1;r--)n.children[r].remove()}l.addEventListener("dragover",(function(t){t.preventDefault(),t.dataTransfer.dropEffect="move"})),l.addEventListener("drop",(function(e){var n=document.querySelector(".dragging");l.appendChild(n),l.children.length>4&&(alert("There's too much food! Do you need a second plate?"),document.getElementById("plate2").style="display: true");var r=n.firstChild.id,o=document.getElementsByClassName("carb-count");s+=t[r].carb,o[0].innerText=s,parseInt(o[0].innerText)>u&&alert("Careful! The carb count is higher than the maximum for this meal.");var i=document.getElementsByClassName("kcal");f+=t[r].kcal,i[0].innerText=f;var a=document.getElementById("meal-goal");a.style.position="absolute",a.style.left="76%",a.style.top="20%",a.style.width="22vw",a.style.height="21vh";var c=document.getElementById("facts"),p=document.createElement("tr"),d=document.createElement("td"),g=document.createElement("td"),m=document.createElement("td"),v=document.createElement("td");d.innerText=r,g.innerText=t[r].size,m.innerText=t[r].kcal,v.innerText=t[r].carb,[d,g,m,v].forEach((function(t){return p.appendChild(t)})),c.appendChild(p)})),document.getElementById("eat-food").addEventListener("click",(function(){if(s<=u){u=e[c+=1].carbMax,p();for(var n=a.children.length-1;n>=0;n--)a.children[n].remove();d[0].innerText=u,document.getElementById("carbtip").src="/images/carbtips/carbct-tip-".concat(c,".png"),document.getElementById("plate2").style="display: none";var r=document.getElementById("meal-goal");r.src="/images/meal-goals/meal-goal-".concat(c,".png"),r.style.top="38%",r.style.left="35%",r.style.width="30vw",r.style.height="30vh",e[c].food.forEach((function(e){(o=document.createElement("li")).setAttribute("draggable",!0),o.setAttribute("class","draggable"),i=document.createElement("img"),Object.keys(t).includes(e)&&(i.id="".concat(e),i.src=t[e].img,i.title="".concat(e),o.appendChild(i)),a.appendChild(o),new Audio("/images/sounds/chomp.mp3").play()})),a.addEventListener("dragover",(function(t){t.preventDefault();var e=document.querySelector(".dragging");a.appendChild(e)})),document.querySelectorAll(".draggable").forEach((function(t){t.addEventListener("dragstart",(function(){t.classList.add("dragging")})),t.addEventListener("dragend",(function(){t.classList.remove("dragging")}))}))}})),document.getElementById("clear-plate").addEventListener("click",p);var d=document.getElementsByClassName("carb-max");d[0].innerText=u}))}()}();
//# sourceMappingURL=main.js.map