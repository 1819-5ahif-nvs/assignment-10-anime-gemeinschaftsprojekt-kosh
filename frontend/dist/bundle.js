!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n){t.exports="<div id=body> <div id=header> <h1>CRUD v1.0</h1> </div> <div id=sidebar> <ul> <li>Menu 1</li> <li>Menu 1</li> <li>Menu 1</li> </ul> </div> <div id=content> <router-comp></router-comp> </div> </div>"},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\tgrid-template-columns: 200px auto;\n\tgrid-template-rows: 75px auto;\n\n\twidth: 100%;\n\theight: 100%;\n}\n\n#header {\n\tgrid-column: 1/3;\n\tgrid-row: 1/2;\n\tbackground: green;\n}\n\n#sidebar {\n\tgrid-column: 1/2;\n\tgrid-row: 2/3;\n\tbackground: yellow;\n}\n\n#content {\n\tgrid-column: 2/3;\n\tgrid-row: 2/3;\n}",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(u=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}var u;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var u=t[r];null!=u[0]&&o[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),i=e(1),u=e.n(i);customElements.define("app-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=r.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=u.a,this.root.append(t)}addFunctionality(){this.root.querySelectorAll("li").forEach(t=>{t.onclick=(n=>this.fireCustomEvent(t.innerText))})}fireCustomEvent(t){const n=new CustomEvent("router",{bubbles:!0,detail:{menu:t}});document.dispatchEvent(n)}});customElements.define("router-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),document.addEventListener("router",t=>{console.log("catched evt")})}appendHTML(){this.root.innerHTML="<div id='body'></div>",this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText="\n\t\t#body {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: blue;\n\t\t}\n\t\t",this.root.append(t)}})}]);