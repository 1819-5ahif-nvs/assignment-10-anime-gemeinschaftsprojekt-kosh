!function(t){var n={};function e(i){if(n[i])return n[i].exports;var d=n[i]={i:i,l:!1,exports:{}};return t[i].call(d.exports,d,d.exports,e),d.l=!0,d.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var d in t)e.d(i,d,function(n){return t[n]}.bind(null,d));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=13)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var d=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(o).concat([d]).join("\n")}var r;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},d=0;d<this.length;d++){var o=this[d][0];null!=o&&(i[o]=!0)}for(d=0;d<t.length;d++){var r=t[d];null!=r[0]&&i[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),n.push(r))}},n}},function(t,n){t.exports="<div id=body> <div id=header> <h1>CRUD v1.0</h1> </div> <div id=sidebar> <div class=menu>CREATE</div> <div></div> <div class=menu>READ</div> <div></div> <div class=menu>UPDATE</div> <div></div> <div class=menu>DELETE</div> </div> <div class=content> <router-comp></router-comp> </div> </div>"},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\tmargin: 25px 50px;\n\tgrid-template-rows: 100px 100px auto;\n\twidth: calc(100% - 100px);\n\theight: calc(100% - 50px);\n}\n\n#header {\n\ttext-align: center;\n\tfont-family: Roboto;\n}\n\n#sidebar {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3,20% 1fr) 20%;\n\tgrid-column-gap: 1fr;\n}\n\n.content {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 15px;\n}\n\n.menu {\n\tmargin: 15px 0;\n\twidth: 100%;\n\theight: 46px;\n\tborder-radius: 15px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\ttext-align: center;\n\tpadding-top: 24px;\n}\n\n.menu:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 16px;\n\tmargin-left: 1px;\n}",""])},function(t,n){t.exports='<div id=body> <div id=secondbody> <div id=titlediv> <input type=text id=title class=inputfield placeholder=Title> </div> <input type=text id=airedFrom class=inputfield placeholder="Aired From"> <input type=text id=airedTo class=inputfield placeholder="Aired To"> <input type=date id=video class=inputfield placeholder=Video-URL> <input type=date id=forum class=inputfield placeholder=Forum-URL> <div id=create> <div id=button>Submit</div> </div> </div> </div>'},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\theight: calc(100% - 200px);\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#secondbody {\n\theight: 300px;\n\twidth: 500px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 200px auto 200px;\n\tgrid-template-rows: repeat(3, 50px 1fr) 50px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n}\n\ninput[type=date] {\n\tcolor: #707070;\n\tfont-family: Roboto;\n\tpadding-left: 50px;\n}\n\n#titlediv {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 1/2;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#airedFrom {\n\tgrid-column: 1/2;\n\tgrid-row: 3/4;\n}\n\n#airedTo {\n\tgrid-column: 3/4;\n\tgrid-row: 3/4;\n}\n\n#video {\n\tgrid-column: 1/2;\n\tgrid-row: 5/6;\n}\n\n#forum {\n\tgrid-column: 3/4;\n\tgrid-row: 5/6;\n}\n\n#create {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 7/8;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#button {\n\twidth: 200px;\n\theight: 30px;\n\ttext-align: center;\n\tpadding-top: 7.5px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 10px;\n}\n\n#button:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 1px;\n\tmargin-left: 1px;\n}",""])},function(t,n){t.exports="<div id=bodY> <p class=text>Read by ID:</p> <div id=readById> <input type=number id=id class=inputfield> <data-comp></data-comp> </div> <p class=text>Read All:</p> <div id=readAll></div> </div>"},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\twidth: 100%;\n\theight: calc(100% - 200px);\n\n\tdisplay: grid;\n\tgrid-template-columns: 150px auto;\n\tgrid-template-rows: 100px auto;\n}\n\n.text {\n\ttext-align: right;\n}\n\n#readById {\n\tjustify-items: left;\n\tpadding-left: 15px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n\tbackground: white;\n}\n\n#readAll {\n\tpadding-left: 15px;\n\tmax-height: calc(100% - 15px);\n\twidth: calc(100% - 15px);\n\toverflow-y: scroll;\n}",""])},function(t,n){t.exports='<div id=body> <div id=secondbody> <div id=titlediv> <input type=text id=title class=inputfield placeholder=Title> </div> <input type=text id=airedFrom class=inputfield placeholder="Aired From"> <input type=text id=airedTo class=inputfield placeholder="Aired To"> <input type=date id=video class=inputfield placeholder=Video-URL> <input type=date id=forum class=inputfield placeholder=Forum-URL> <div id=create> <div id=button>Submit</div> </div> </div> </div>'},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\theight: calc(100% - 200px);\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#secondbody {\n\theight: 300px;\n\twidth: 500px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 200px auto 200px;\n\tgrid-template-rows: repeat(3, 50px 1fr) 50px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n}\n\ninput[type=date] {\n\tcolor: #707070;\n\tfont-family: Roboto;\n\tpadding-left: 50px;\n}\n\n#titlediv {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 1/2;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#airedFrom {\n\tgrid-column: 1/2;\n\tgrid-row: 3/4;\n}\n\n#airedTo {\n\tgrid-column: 3/4;\n\tgrid-row: 3/4;\n}\n\n#video {\n\tgrid-column: 1/2;\n\tgrid-row: 5/6;\n}\n\n#forum {\n\tgrid-column: 3/4;\n\tgrid-row: 5/6;\n}\n\n#create {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 7/8;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#button {\n\twidth: 200px;\n\theight: 30px;\n\ttext-align: center;\n\tpadding-top: 7.5px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 10px;\n}\n\n#button:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 1px;\n\tmargin-left: 1px;\n}",""])},function(t,n){t.exports="<div id=body> <div class=data>13</div> <div class=data>The End</div> <div class=data>04.05.06</div> <div class=data>10.11.12</div> <div class=data>Video-URL</div> <div class=data>Forum-URL</div> <div class=line></div> <div class=line></div> <div class=line></div> <div class=line></div> <div class=line></div> <div class=line></div> </div>"},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\twidth: 100%;\n\theight: 40px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 30px 200px repeat(4, 150px);\n\tgrid-column-gap: 10px;\n\tgrid-template-rows: 38px 2px;\n}\n\n.data {\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tline-height: 38px;\n}\n\n.line {\n\twidth: 100%;\n\theight: 100%;\n\n\tbackground: #707070;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}",""])},function(t,n){t.exports="<div id=body> <div id=content> <select id=episodes> <option value=1>Episode 1</option> <option value=2>Episode 2</option> <option value=3>Episode 3</option> <option value=4>Episode 4</option> <option value=5>Episode 5</option> <option value=6>Episode 6</option> <option value=7>Episode 7</option> </select> <div id=delete>Delete</div> </div> </div>"},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"#body {\n\twidth: 100%;\n\theight: calc(100% - 200px);\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\talign-content: center;\n}\n\n#content {\n\twidth: 200px;\n\theight: 250px;\n}\n\n#episodes {\n\toutline: none;\n\tborder: none;\n\tborder-radius: 0;\n\tborder-bottom: solid 1.5px #707070;\n\tbackground: white;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n\t-webkit-appearance: none;\n}\n\n#delete {\n\twidth: 200px;\n\theight: 40px;\n\tmargin-top: 10px;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tline-height: 40px;\n\ttext-align: center;\n}\n\n#delete:hover {\n\tbackground: #e9e9e9;\n\tcursor: pointer;\n\tmargin-top: 11px;\n\tmargin-left: 1px;\n}",""])},function(t,n,e){"use strict";e.r(n);var i=e(1),d=e.n(i),o=e(2),r=e.n(o);customElements.define("app-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=d.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=r.a,this.root.append(t)}addFunctionality(){this.root.querySelectorAll(".menu").forEach(t=>{t.onclick=(n=>this.fireCustomEvent(t.innerText))})}fireCustomEvent(t){const n=new CustomEvent("router",{bubbles:!0,detail:{menu:t}});document.dispatchEvent(n)}});customElements.define("router-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),document.addEventListener("router",t=>{const n=t.detail.menu;"CREATE"==n?this.root.innerHTML="<create-comp></create-comp>":"READ"==n?this.root.innerHTML="<read-comp></read-comp>":"UPDATE"==n?this.root.innerHTML="<update-comp></update-comp>":"DELETE"==n&&(this.root.innerHTML="<delete-comp></delete-comp>")})}appendHTML(){this.root.innerHTML="<div id='body'><create-comp></create-comp></div>",this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText="\n\t\t#body {\n\t\t}\n\t\t",this.root.append(t)}});var a=e(3),p=e.n(a),s=e(4),l=e.n(s);customElements.define("create-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=p.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=l.a,this.root.append(t)}addFunctionality(){}});var c=e(5),u=e.n(c),h=e(6),m=e.n(h);customElements.define("read-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=u.a,this.appendCSS(),this.getAllEpisodes()}appendCSS(){let t=document.createElement("style");t.innerText=m.a,this.root.append(t)}addFunctionality(){}getAllEpisodes(){const t=this.root.querySelector("#readAll");for(let n=0;n<100;n++)t.innerHTML+="<data-comp></data-comp>"}});var x=e(7),g=e.n(x),v=e(8),f=e.n(v);customElements.define("update-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=g.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=f.a,this.root.append(t)}addFunctionality(){}});var b=e(9),y=e.n(b),E=e(10),w=e.n(E);customElements.define("data-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=y.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=w.a,this.root.append(t)}addFunctionality(){}});var T=e(11),S=e.n(T),L=e(12),M=e.n(L);customElements.define("delete-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=S.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=M.a,this.root.append(t)}addFunctionality(){}})}]);