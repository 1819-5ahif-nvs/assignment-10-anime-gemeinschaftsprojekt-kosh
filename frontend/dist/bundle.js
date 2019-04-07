!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(d=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var d;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var d=t[o];null!=d[0]&&i[d[0]]||(n&&!d[2]?d[2]=n:n&&(d[2]="("+d[2]+") and ("+n+")"),e.push(d))}},e}},function(t,e){t.exports="<div id=body> <div id=header> <h1>CRUD v1.0</h1> </div> <div id=sidebar> <div class=menu>CREATE</div> <div></div> <div class=menu>READ</div> <div></div> <div class=menu>UPDATE</div> <div></div> <div class=menu>DELETE</div> </div> <div class=content> <router-comp></router-comp> </div> </div>"},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\tmargin: 25px 50px;\n\tgrid-template-rows: 100px 100px auto;\n\twidth: calc(100% - 100px);\n\theight: calc(100% - 50px);\n}\n\n#header {\n\ttext-align: center;\n\tfont-family: Roboto;\n}\n\n#sidebar {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3,20% 1fr) 20%;\n\tgrid-column-gap: 1fr;\n}\n\n.content {\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 15px;\n}\n\n.menu {\n\tmargin: 15px 0;\n\twidth: 100%;\n\theight: 46px;\n\tborder-radius: 15px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\ttext-align: center;\n\tpadding-top: 24px;\n}\n\n.menu:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 16px;\n\tmargin-left: 1px;\n}",""])},function(t,e){t.exports='<div id=body> <div id=secondbody> <div id=titlediv> <input type=text id=title class=inputfield placeholder=Title> </div> <input type=text id=video class=inputfield placeholder=Video-URL> <input type=text id=forum class=inputfield placeholder=Forum-URL> <input type=text id=airedFrom class=inputfield placeholder="Aired from" onfocus=\'this.type="date"\'> <input type=text id=airedTo class=inputfield placeholder="Aired to" onfocus=\'this.type="date"\'> <div id=create> <div id=button>Submit</div> </div> </div> </div>'},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\theight: calc(100% - 200px);\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#secondbody {\n\theight: 300px;\n\twidth: 500px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 200px auto 200px;\n\tgrid-template-rows: repeat(3, 50px 1fr) 50px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n}\n\ninput[type=date] {\n\tcolor: #707070;\n\tfont-family: Roboto;\n\tpadding-left: 50px;\n}\n\n#titlediv {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 1/2;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#airedFrom {\n\tgrid-column: 1/2;\n\tgrid-row: 3/4;\n}\n\n#airedTo {\n\tgrid-column: 3/4;\n\tgrid-row: 3/4;\n}\n\n#video {\n\tgrid-column: 1/2;\n\tgrid-row: 5/6;\n}\n\n#forum {\n\tgrid-column: 3/4;\n\tgrid-row: 5/6;\n}\n\n#create {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 7/8;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#button {\n\twidth: 200px;\n\theight: 30px;\n\ttext-align: center;\n\tpadding-top: 7.5px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 10px;\n}\n\n#button:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 1px;\n\tmargin-left: 1px;\n}",""])},function(t,e){t.exports='<div id=bodY> <p class=text>Read by ID:</p> <div id=readById> <input type=number id=id class=inputfield> <data-comp episodeid=-1 title="no title" airedfrom="Jan 1, 0001 12:00:00 AM" airedto="Jan 1, 0001 12:00:00 AM" forumurl="" videourl=""></data-comp> </div> <p class=text>Read All:</p> <div id=readAll></div> </div>'},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"#body {\n\twidth: 100%;\n\theight: calc(100% - 200px);\n\n\tdisplay: grid;\n\tgrid-template-columns: 150px auto;\n\tgrid-template-rows: 100px auto;\n}\n\n.text {\n\ttext-align: right;\n}\n\n#readById {\n\tjustify-items: left;\n\tpadding-left: 15px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n\tbackground: white;\n}\n\n#readAll {\n\tpadding-left: 15px;\n\tmax-height: calc(100% - 15px);\n\twidth: calc(100% - 15px);\n\toverflow-y: scroll;\n}",""])},function(t,e){t.exports='<div id=body> <div id=secondbody> <select id=episodes> </select> <input type=text id=title class=inputfield placeholder=Title> <input type=text id=video class=inputfield placeholder=Video-URL> <input type=text id=forum class=inputfield placeholder=Forum-URL> <input type=date id=airedFrom class=inputfield placeholder="Aired from" onfocus=\'this.type="date"\'> <input type=date id=airedTo class=inputfield placeholder="Aired to" onfocus=\'this.type="date"\'> <div id=create> <div id=button>Submit</div> </div> </div> </div>'},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"#body {\n\tdisplay: grid;\n\theight: calc(100% - 200px);\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#secondbody {\n\theight: 300px;\n\twidth: 500px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 200px auto 200px;\n\tgrid-template-rows: repeat(3, 50px 1fr) 50px;\n}\n\n.inputfield {\n\toutline: none;\n\tborder: none;\n\tborder-bottom: solid 1.5px #707070;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n}\n\ninput[type=date] {\n\tcolor: #707070;\n\tfont-family: Roboto;\n\tpadding-left: 50px;\n}\n\n#episodes {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/2;\n\tgrid-row: 1/2;\n\n\toutline: none;\n\tborder: none;\n\tborder-radius: 0;\n\tborder-bottom: solid 1.5px #707070;\n\tbackground: white;\n\tcolor: #707070;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n\t-webkit-appearance: none;\n}\n\n#title {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 3/4;\n\tgrid-row: 1/2;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#airedFrom {\n\tgrid-column: 1/2;\n\tgrid-row: 3/4;\n}\n\n#airedTo {\n\tgrid-column: 3/4;\n\tgrid-row: 3/4;\n}\n\n#video {\n\tgrid-column: 1/2;\n\tgrid-row: 5/6;\n}\n\n#forum {\n\tgrid-column: 3/4;\n\tgrid-row: 5/6;\n}\n\n#create {\n\twidth: 100%;\n\theight: 100%;\n\tgrid-column: 1/4;\n\tgrid-row: 7/8;\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n}\n\n#button {\n\twidth: 200px;\n\theight: 30px;\n\ttext-align: center;\n\tpadding-top: 7.5px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tborder-radius: 10px;\n}\n\n#button:hover {\n\tcursor: pointer;\n\tbackground: #E3E3E3;\n\tmargin-top: 1px;\n\tmargin-left: 1px;\n}",""])},function(t,e){t.exports="<div id=body> <div class=data id=episodeid>13</div> <div class=data id=title>The End</div> <div class=data id=airedfrom>04.05.06</div> <div class=data id=airedto>10.11.12</div> <a class=data id=videourl>Video-URL</a> <a class=data id=forumurl>Forum-URL</a> <div class=line></div> <div class=line></div> <div class=line></div> <div class=line></div> <div class=line></div> <div class=line></div> </div>"},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"#body {\n\twidth: 100%;\n\theight: 40px;\n\n\tdisplay: grid;\n\tgrid-template-columns: 30px 200px repeat(4, 150px);\n\tgrid-column-gap: 10px;\n\tgrid-template-rows: 38px 2px;\n}\n\n.data {\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tline-height: 38px;\n\toverflow: scroll;\n}\n\n.line {\n\twidth: 100%;\n\theight: 100%;\n\n\tbackground: #707070;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}",""])},function(t,e){t.exports="<div id=body> <div id=content> <select id=episodes> <option value=1>Episode 1</option> <option value=2>Episode 2</option> <option value=3>Episode 3</option> <option value=4>Episode 4</option> <option value=5>Episode 5</option> <option value=6>Episode 6</option> <option value=7>Episode 7</option> </select> <div id=delete>Delete</div> </div> </div>"},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"#body {\n\twidth: 100%;\n\theight: calc(100% - 200px);\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\talign-content: center;\n}\n\n#content {\n\twidth: 200px;\n\theight: 250px;\n}\n\n#episodes {\n\toutline: none;\n\tborder: none;\n\tborder-radius: 0;\n\tborder-bottom: solid 1.5px #707070;\n\tbackground: white;\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 5px 0;\n\ttext-align: center;\n\tfont-size: 15px;\n\t-webkit-appearance: none;\n}\n\n#delete {\n\twidth: 200px;\n\theight: 40px;\n\tmargin-top: 10px;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\tline-height: 40px;\n\ttext-align: center;\n}\n\n#delete:hover {\n\tbackground: #e9e9e9;\n\tcursor: pointer;\n\tmargin-top: 11px;\n\tmargin-left: 1px;\n}",""])},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),r=n(2),d=n.n(r);customElements.define("app-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=o.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=d.a,this.root.append(t)}addFunctionality(){this.root.querySelectorAll(".menu").forEach(t=>{t.onclick=(e=>this.fireCustomEvent(t.innerText))})}fireCustomEvent(t){const e=new CustomEvent("router",{bubbles:!0,detail:{menu:t}});document.dispatchEvent(e)}});customElements.define("router-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),document.addEventListener("router",t=>{const e=t.detail.menu;"CREATE"==e?this.root.innerHTML="<create-comp></create-comp>":"READ"==e?this.root.innerHTML="<read-comp></read-comp>":"UPDATE"==e?this.root.innerHTML="<update-comp></update-comp>":"DELETE"==e&&(this.root.innerHTML="<delete-comp></delete-comp>")})}appendHTML(){this.root.innerHTML="<div id='body'><update-comp></update-comp></div>",this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText="\n\t\t#body {\n\t\t}\n\t\t",this.root.append(t)}});var a=n(3),s=n.n(a),l=n(4),p=n.n(l);class c{constructor(){this.baseurl="http://localhost:8080/anime/rs/anime"}async create(t){return(await fetch(this.baseurl,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).status}async readAll(){const t=await fetch(this.baseurl);return await t.json()}async update(t){return(await fetch(this.baseurl,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).status}delete(t){}}customElements.define("create-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=s.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=p.a,this.root.append(t)}addFunctionality(){this.elem("#button").onclick=(t=>{let e={};e.title=this.elem("#title").value,e.airedFrom=this.elem("#airedfrom").value,e.airedTo=this.elem("#airedto").value,e.videoURL=this.elem("#video").value,e.forumURL=this.elem("#forum").value,console.log(e),(new c).create(e)}),this.elem("#airedFrom").onfocus=(t=>this.onDateFocus(t)),this.elem("#airedTo").onfocus=(t=>this.onDateFocus(t))}onDateFocus(t){t.srcElement.setAttribute("type","date")}elem(t){return this.root.querySelector(t)}});var u=n(5),h=n.n(u),m=n(6),g=n.n(m);customElements.define("read-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=h.a,this.appendCSS(),this.getAllEpisodes()}appendCSS(){let t=document.createElement("style");t.innerText=g.a,this.root.append(t)}addFunctionality(){this.root.querySelector("#id").onkeyup=(t=>{const e=this.root.querySelector("#id").value,n=this.root.querySelector("#readById>data-comp");let i=this.createDummyTag();for(let t=0;t<this.data.length;t++)if(String(this.data[t].episodeId)===e){i=this.createTag(this.data[t]);break}n.replaceWith(i)})}async getAllEpisodes(){this.data=await(new c).readAll(),this.data.forEach(t=>{this.root.querySelector("#readAll").appendChild(this.createTag(t))})}createTag(t){const e=document.createElement("data-comp");return e.setAttribute("episodeid",t.episodeId),e.setAttribute("title",t.title),e.setAttribute("airedfrom",t.airedFrom),e.setAttribute("airedto",t.airedTo),e.setAttribute("forumurl",t.forumURL),e.setAttribute("videourl",t.videoURL),e}createDummyTag(){const t=document.createElement("data-comp");return t.setAttribute("episodeid","-1"),t}});var x=n(7),f=n.n(x),v=n(8),b=n.n(v);customElements.define("update-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"}),this.worker=new c}connectedCallback(){this.appendHTML(),this.createOptions(),this.addFunctionality()}async createOptions(){this.data=await this.worker.readAll();const t=this.root.querySelector("#episodes");this.data.forEach(e=>{let n=document.createElement("option");n.setAttribute("value",e.episodeId),n.innerText=e.title,t.appendChild(n)}),this.current=this.data[0],this.loadEpisodeData()}loadEpisodeData(){this.elem("#title").value=this.current.title,this.elem("#video").value=this.current.videoURL,this.elem("#forum").value=this.current.forumURL,this.elem("#airedFrom").value=this.dateParser(this.current.airedFrom),this.elem("#airedTo").value=this.dateParser(this.current.airedTo)}appendHTML(){this.root.innerHTML=f.a,this.appendCSS()}dateParser(t){const e=t.split(" ");return e[2]+"-"+this.getMonth(e[0])+"-"+this.getDay(e[1].split(",")[0])}getMonth(t){return"Jan"==t?"01":"Feb"==t?"02":"Mar"==t?"03":"Apr"==t?"04":"May"==t?"05":"Jun"==t?"06":"Jul"==t?"07":"Aug"==t?"08":"Sep"==t?"09":"Oct"==t?"10":"Nov"==t?"11":"Dec"==t?"12":void 0}getDay(t){return t.length>1?t:1==t.length?"0"+t:0==t.length?"00":void 0}appendCSS(){let t=document.createElement("style");t.innerText=b.a,this.root.append(t)}addFunctionality(){this.elem("#button").onclick=(t=>{let e={};e.episodeid=this.choosen.id,e.title=this.elem("#title").value,e.airedFrom=this.elem("#airedfrom").value,e.airedTo=this.elem("#airedto").value,e.videoURL=this.elem("#video").value,e.forumURL=this.elem("#forum").value,(new c).create(e)}),this.elem("#episodes").onchange=(t=>{const e=this.elem("#episodes").options[this.elem("#episodes").selectedIndex];this.data.forEach(t=>{t.episodeId==e.getAttribute("value")&&(this.current=t,this.loadEpisodeData())})})}elem(t){return this.root.querySelector(t)}});var y=n(9),T=n.n(y),w=n(10),E=n.n(w);customElements.define("data-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}get episodeid(){return this.getAttribute("episodeid")}get title(){return this.getAttribute("title")}get airedfrom(){return this.dateParser(this.getAttribute("airedfrom"))}get airedto(){return this.dateParser(this.getAttribute("airedto"))}get videourlShorted(){const t=this.getAttribute("videourl");return t.slice(t.length-10,t.length)}get videourl(){return this.getAttribute("videourl")}get forumurlShorted(){const t=this.getAttribute("forumurl");return t.slice(t.length-10,t.length)}get forumurl(){return this.getAttribute("forumurl")}dateParser(t){if("Jan 1, 0001 12:00:00 AM"===t)return"no date";const e=t.split(" ");return e[0]+" "+e[1]+" "+e[2]}connectedCallback(){this.appendHTML(),this.root.querySelector("#episodeid").innerText=this.episodeid,"-1"!==this.episodeid?(this.root.querySelector("#title").innerText=this.title,this.root.querySelector("#airedfrom").innerText=this.airedfrom,this.root.querySelector("#airedto").innerText=this.airedto,this.root.querySelector("#videourl").innerText=this.videourlShorted,this.root.querySelector("#videourl").href=this.videourl,this.root.querySelector("#forumurl").innerText=this.forumurlShorted,this.root.querySelector("#forumurl").href=this.forumurl):this.root.querySelector("#body").style.visibility="hidden"}appendHTML(){this.root.innerHTML=T.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=E.a,this.root.append(t)}});var S=n(11),L=n.n(S),M=n(12),A=n.n(M);customElements.define("delete-comp",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"})}connectedCallback(){this.appendHTML(),this.addFunctionality()}appendHTML(){this.root.innerHTML=L.a,this.appendCSS()}appendCSS(){let t=document.createElement("style");t.innerText=A.a,this.root.append(t)}addFunctionality(){}})}]);