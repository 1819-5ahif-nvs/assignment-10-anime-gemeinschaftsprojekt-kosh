import html from './update-comp.html';
import css from './update-comp.css';

export default class UpdateComp extends HTMLElement {
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
	}

	appendCSS() {
		let style = document.createElement("style");
		style.innerText = css;
		this.root.append(style);
	}

	addFunctionality() {
	}
}

customElements.define("update-comp", UpdateComp);