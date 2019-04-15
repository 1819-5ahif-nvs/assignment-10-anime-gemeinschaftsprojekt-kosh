import html from './data-comp.html';
import css from './data-comp.css';

export default class DataComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	get episodeid() {
		return this.getAttribute("episodeid");
	}

	get title() {
		return this.getAttribute("title");
	}
	
	get aired() {
		return this.getAttribute("aired");
	}

	get videourlShorted() {
		const data = this.getAttribute("videourl")
		return data.slice(data.length - 10, data.length);
	}

	get videourl() {
		return this.getAttribute("videourl");
	}

	get forumurlShorted() {
		const data = this.getAttribute("forumurl")
		return data.slice(data.length - 10, data.length);
	}

	get forumurl() {
		return this.getAttribute("forumurl");
	}

	connectedCallback() {
		this.appendHTML();

		this.root.querySelector("#episodeid").innerText = this.episodeid;

		if(this.episodeid === "-1") {
			this.root.querySelector("#body").style.visibility = "hidden";
			return;
		}

		this.root.querySelector("#title").innerText = this.title;
		this.root.querySelector("#aired").innerText = this.aired;
		this.root.querySelector("#videourl").innerText = this.videourlShorted;
		this.root.querySelector("#videourl").href = this.videourl;
		this.root.querySelector("#forumurl").innerText = this.forumurlShorted;
		this.root.querySelector("#forumurl").href = this.forumurl;
	}

	appendHTML() {
		this.root.innerHTML = html;
		this.appendCSS();
	}

	appendCSS() {
		let style = document.createElement("style");
		style.innerText = css;
		this.root.append(style);
	}
}

customElements.define("data-comp", DataComp);