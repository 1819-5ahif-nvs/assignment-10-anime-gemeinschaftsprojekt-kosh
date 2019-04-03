import html from './delete-comp.html';
import css from './delete-comp.css';

export default class DeleteComp extends HTMLElement {
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

customElements.define("delete-comp", DeleteComp);