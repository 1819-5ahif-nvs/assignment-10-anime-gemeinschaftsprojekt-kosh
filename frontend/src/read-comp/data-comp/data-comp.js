import html from './data-comp.html';
import css from './data-comp.css';

export default class DataComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	get episodeId() {
		return this.getAttribute("episodeid");
	}

	get title() {
		return this.getAttribute("title");
	}
	
	get airedFrom() {
		return this.getAttribute("airedfrom");
	}

	get airedto() {
		return this.getAttribute("airedto");
	}

	get videourl() {
		return this.getAttribute("videourl");
	}

	get forumurl() {
		return this.getAttribute("forumurl");
	}

	connectedCallback() {
		this.appendHTML();
		this.addFunctionality();
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

	addFunctionality() {
		console.log(this.videourl);
	}
}

customElements.define("data-comp", DataComp);