(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!t;)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"ae04bc25a09d9fa906ca.jpg",n=function(){const e=document.createElement("div"),n=new Image;n.src=t;const a=document.createElement("h1");a.textContent="Flame Noodle Asian Grill";const o=document.createElement("p");return o.innerHTML="Welcome to Flame Noodle, where taste meets excellence.  <br>Voted best Asian cuisine in the area, 6 years in a row.",e.appendChild(n),e.appendChild(a),e.appendChild(o),e}(),a=e.p+"45e345a34d9b5e321538.jpg",o=e.p+"8c30ea3d8aba292180af.jpg",c=e.p+"fab4b990c6793e0e10a9.jpg",r=e.p+"90819b199f51b94b1e6e.jpg",d=e.p+"d57caef32d1ede1411be.jpg",p=function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Menu";const n=document.createElement("div"),p=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),m=document.createElement("div");m.appendChild(n),m.appendChild(p),m.appendChild(l),m.appendChild(i),m.appendChild(s);const u=new Image;u.src=a;const h=new Image;h.src=o;const g=new Image;g.src=c;const C=new Image;C.src=r;const b=new Image;b.src=d;const v=document.createElement("p");v.textContent="Fried Rice";const E=document.createElement("p");E.textContent="Pork Pot Stickers";const f=document.createElement("p");f.textContent="Salmon Roll Sushi";const w=document.createElement("p");w.textContent="Sexy Shrimp";const y=document.createElement("p");return y.textContent="Yellow Curry",n.appendChild(u),n.appendChild(v),p.appendChild(h),p.appendChild(E),l.appendChild(g),l.appendChild(f),i.appendChild(C),i.appendChild(w),s.appendChild(b),s.appendChild(y),e.appendChild(t),e.appendChild(m),e}(),l=(()=>{const e=document.getElementById("content"),t=document.createElement("div");document.body.insertBefore(t,e);const n=document.createElement("nav");return t.appendChild(n),{navbar:n,container:e,tabArray:[]}})(),i=function(e,t){let n=l.tabArray.length;const a=document.createElement("button");a.textContent=`${e}`;let o={value:!1};return l.navbar.appendChild(a),a.addEventListener("click",(function(){console.log("click"),!0!==l.tabArray[n].isAppended.value&&(l.tabArray.forEach((e=>{!0===e.isAppended.value&&(e.unappend(),e.toggleBool())})),l.container.appendChild(t),console.log("appended"),l.tabArray[n].toggleBool())})),{isAppended:o,unappend:()=>{l.container.removeChild(t)},toggleBool:()=>o.value=!o.value}};(()=>{const e=i("Home",n);l.tabArray.push(e);const t=i("Menu",p);l.tabArray.push(t);const a=i("Contact Us",n);l.tabArray.push(a)})(),console.log("working")})();