(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(107),t.b),l=i()(o()),p=s()(d);l.push([e.id,"@font-face {\r\n    font-family: custom;\r\n    src: url("+p+");\r\n}\r\n\r\n*{\r\n    font-family: custom, Georgia, 'Times New Roman', Times, serif;\r\n    padding: 0;\r\n    margin: 0;\r\n    color: crimson;\r\n    --yellow-color: rgb(252, 241, 217);\r\n}\r\n\r\nbody{\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n#header{\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: lightcoral;\r\n    align-items: center;\r\n    border: 3px solid crimson;\r\n}\r\n\r\n#navbar{\r\n    display: flex;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.button{\r\n    width: 33%;\r\n    background-color: var(--yellow-color);\r\n    border: solid 3px crimson;\r\n    color: crimson;\r\n    font-size: 15px;\r\n}\r\n\r\n#content{\r\n    background-color: var(--yellow-color);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: calc(100% - 126px);\r\n    padding: 30px;\r\n}\r\n\r\n.hero-image{\r\n    max-height: 500px;\r\n    width: 700px;\r\n    height: auto;\r\n    object-fit: cover;\r\n}\r\n\r\n.menu-image {\r\n    max-height: 200px;\r\n    width: 400px;\r\n    height: auto;\r\n    object-fit: cover;\r\n}\r\n\r\n#home-element{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    height: 100%;\r\n}\r\n\r\n#menu-element{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    gap: 20px;\r\n}\r\n\r\n#contact-element{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    height: 100%;\r\n}\r\n\r\n#home-title{\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#menu-title{\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#contact-title{\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#home-subtext{\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n#subtext-contact{\r\n    text-align: center;\r\n}\r\n\r\n.item{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: solid 2px crimson;\r\n    padding: 10px;\r\n}\r\n\r\n#menu-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 25px;\r\n    overflow: scroll;\r\n    scrollbar-width: none;\r\n    height: 100%;\r\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},107:(e,n,t)=>{e.exports=t.p+"e90fcfc620f3d9f3ccd4.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"ae04bc25a09d9fa906ca.jpg",n=function(){const n=document.createElement("div");n.setAttribute("id","home-element");const t=new Image;t.src=e,t.classList.add("hero-image");const r=document.createElement("h1");r.textContent="Flame Noodle Asian Grill",r.setAttribute("id","home-title");const o=document.createElement("p");return o.setAttribute("id","home-subtext"),o.innerHTML="Welcome to Flame Noodle, where taste meets excellence.  <br>Voted best Asian cuisine in the area, 6 years in a row.",n.appendChild(t),n.appendChild(r),n.appendChild(o),n}(),r=t.p+"45e345a34d9b5e321538.jpg",o=t.p+"8c30ea3d8aba292180af.jpg",a=t.p+"fab4b990c6793e0e10a9.jpg",i=t.p+"90819b199f51b94b1e6e.jpg",c=t.p+"d57caef32d1ede1411be.jpg",s=function(){const e=document.createElement("div");e.setAttribute("id","menu-element");const n=document.createElement("h1");n.setAttribute("id","menu-title"),n.textContent="Menu";const t=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div");u.setAttribute("id","menu-container"),u.appendChild(t),u.appendChild(s),u.appendChild(d),u.appendChild(l),u.appendChild(p);const m=new Image;m.src=r,m.classList.add("menu-image");const f=new Image;f.src=o,f.classList.add("menu-image");const h=new Image;h.src=a,h.classList.add("menu-image");const g=new Image;g.src=i,g.classList.add("menu-image");const v=new Image;v.src=c,v.classList.add("menu-image");const b=document.createElement("p");b.textContent="Fried Rice";const x=document.createElement("p");x.textContent="Pork Pot Stickers";const y=document.createElement("p");y.textContent="Salmon Roll Sushi";const C=document.createElement("p");C.textContent="Sexy Shrimp";const w=document.createElement("p");return w.textContent="Yellow Curry",t.appendChild(m),t.appendChild(b),t.classList.add("item"),s.appendChild(f),s.appendChild(x),s.classList.add("item"),d.appendChild(h),d.appendChild(y),d.classList.add("item"),l.appendChild(g),l.appendChild(C),l.classList.add("item"),p.appendChild(v),p.appendChild(w),p.classList.add("item"),e.appendChild(n),e.appendChild(u),e}(),d=t.p+"fd4951f837d7276029b9.jpg",l=function(){const e=document.createElement("div");e.setAttribute("id","contact-element");const n=new Image;n.src=d,n.classList.add("hero-image");const t=document.createElement("h1");t.textContent="Contact Us",t.setAttribute("id","contact-title");const r=document.createElement("p");return r.innerHTML="(123)456-7890<br><br>contactus@firenoodle.com",r.setAttribute("id","subtext-contact"),e.appendChild(n),e.appendChild(t),e.appendChild(r),e}();var p=t(379),u=t.n(p),m=t(795),f=t.n(m),h=t(569),g=t.n(h),v=t(565),b=t.n(v),x=t(216),y=t.n(x),C=t(589),w=t.n(C),E=t(28),A={};A.styleTagTransform=w(),A.setAttributes=b(),A.insert=g().bind(null,"head"),A.domAPI=f(),A.insertStyleElement=y(),u()(E.Z,A),E.Z&&E.Z.locals&&E.Z.locals;const j=(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","header"),document.body.insertBefore(n,e);const t=document.createElement("nav");return t.setAttribute("id","navbar"),n.appendChild(t),{navbar:t,container:e,tabArray:[]}})(),L=function(e,n){let t=j.tabArray.length;const r=document.createElement("button");r.textContent=`${e}`,r.classList.add("button");let o={value:!1};j.navbar.appendChild(r);const a=()=>{j.container.appendChild(n),j.tabArray[t].toggleBool()};return r.addEventListener("click",(function(){!0!==j.tabArray[t].isAppended.value&&(j.tabArray.forEach((e=>{!0===e.isAppended.value&&(e.unappend(),e.toggleBool())})),a())})),{isAppended:o,unappend:()=>{j.container.removeChild(n)},toggleBool:()=>o.value=!o.value,append:a}};(()=>{const e=L("Home",n);j.tabArray.push(e);const t=L("Menu",s);j.tabArray.push(t);const r=L("Contact Us",l);return j.tabArray.push(r),{homeTab:e}})().homeTab.append()})()})();