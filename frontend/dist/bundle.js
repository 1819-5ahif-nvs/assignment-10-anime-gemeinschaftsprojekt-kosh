!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var r=(d=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(o).concat([r]).join("\n")}var d;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var d=t[r];null!=d[0]&&i[d[0]]||(e&&!d[2]?d[2]=e:e&&(d[2]="("+d[2]+") and ("+e+")"),n.push(d))}},n}},function(t,n){t.exports="<div id=body> <div id=header> <h1>CRUD v1.0</h1> </div> <div id=sidebar> <div class=menu>CREATE</div> <div></div> <div class=menu>READ</div> <div></div> <div class=menu>UPDATE</div> <div></div> <div class=menu>DELETE</div> </div> <div class=content> <router-comp></router-comp> </div> </div>"},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\tmargin: 25px 50px;\n\tgrid-template-rows: 100px 100px auto;\n\twidth: calc(100% - 100px);\n\theight: calc(100% - 50px);\n}\n\n#header {\n\ttext-align: center;\n\tfont-family: Roboto;\n}\n\n#sidebar {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3,20% 1fr) 20%;\n\tgrid-column-gap: 1fr;\n}\n\n.content {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 15px;\n}\n\n.menu {\n\tmargin: 15px 0;\n\twidth: 100%;\n\theight: 46px;\n\tborder-radius: 15px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\ttext-align: center;\n\tpadding-top: 24px;\n}\n\n.menu:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 16px;\n\tmargin-left: 1px;\n}",""])},function(t,n){t.exports='<div id=body> <div id=secondbody> <div id=titlediv> <input type=text id=title class=inputfield placeholder=Title> </div> <input type=text id=airedFrom class=inputfield placeholder="Aired From"> <input type=text id=airedTo class=inputfield placeholder="Aired To"> <input type=text id=video class=inputfield placeholder=Video-URL> <input type=text id=forum class=inputfield placeholder=Forum-URL> </div> </div>'},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\theight: calc(100% - 200px);\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#secondbody {\n\theight: 300px;\n\twidth: 500px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 200px auto 200px;\n\tgrid-template-rows: repeat(3, 50px 1fr) 50px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n}\n\n#titlediv {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 1/2;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#airedFrom {\n\tgrid-column: 1/2;\n\tgrid-row: 2/3;\n}\n\n#airedTo {\n\tgrid-column: 3/4;\n\tgrid-row: 2/3;\n}\n\n#video {\n\tgrid-column: 1/2;\n\tgrid-row: 3/4;\n}\n\n#forum {\n\tgrid-column: 3/4;\n\tgrid-row: 3/4;\n}",""])},function(t,n,e){"use strict";e.r(n);var i=e(1),r=e.n(i),o=e(2),d=e.n(o);customElements.define("app-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=r.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=d.a,this.root.append(t)}addFunctionality(){this.root.querySelectorAll(".menu").forEach(t=>{t.onclick=(n=>this.fireCustomEvent(t.innerText))})}fireCustomEvent(t){const n=new CustomEvent("router",{bubbles:!0,detail:{menu:t}});document.dispatchEvent(n)}});customElements.define("router-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),document.addEventListener("router",t=>{console.log("catched evt")})}appendHTML(){this.root.innerHTML="<div id='body'><create-comp></create-comp></div>",this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText="\n\t\t#body {\n\t\t}\n\t\t",this.root.append(t)}});var a=e(3),c=e.n(a),p=e(4),s=e.n(p);customElements.define("create-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=c.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=s.a,this.root.append(t)}addFunctionality(){}})}]);