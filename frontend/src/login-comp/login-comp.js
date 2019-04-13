import html from './login-comp.html';
import css from './login-comp.css';
import LoginWorker from './../login-worker';

export default class  LoginComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
		this.worker = new LoginWorker();
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
		this.root.querySelector("#submit").onclick = _ => {
			const elem = document.createElement("app-comp");
			//this.replaceWith(elem);
			this.worker.login("admin", "passme");
		}
	}
}

customElements.define("login-comp", LoginComp);