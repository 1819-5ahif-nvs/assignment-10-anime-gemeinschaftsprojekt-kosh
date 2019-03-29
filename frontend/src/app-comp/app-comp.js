import html from './app-comp.html';
import css from './app-comp.css';

export default class AppComp extends HTMLElement {
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
		const lis = this.root.querySelectorAll("li");
		lis.forEach(elem => {
			elem.onclick = _ => this.fireCustomEvent(elem.innerText);
		})
	}

	fireCustomEvent(item) {
		const customEvent = new CustomEvent("router", {
			bubbles: true,
			detail: {
				menu: item
			}
		});

		document.dispatchEvent(customEvent);
	}
}

customElements.define("app-comp", AppComp);