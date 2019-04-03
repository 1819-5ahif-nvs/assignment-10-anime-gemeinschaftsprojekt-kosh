import html from './read-comp.html';
import css from './read-comp.css';

export default class ReadComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	connectedCallback() {
		this.appendHTML();
		this.addFunctionality();
	}

	appendHTML() {
		this.root.innerHTML = html;
		this.appendCSS();
		this.getAllEpisodes();
	}

	appendCSS() {
		let style = document.createElement("style");
		style.innerText = css;
		this.root.append(style);
	}

	addFunctionality() {
	}

	getAllEpisodes() {
		const elem = this.root.querySelector("#readAll");
		for(let i = 0; i < 100; i++) {
			elem.innerHTML += "<data-comp></data-comp>"
		}
	}
}

customElements.define("read-comp", ReadComp);