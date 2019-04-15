import html from './login-comp.html';
import css from './login-comp.css';
import LoginWorker from './../login-worker';

export default class  LoginComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
		this.worker = new LoginWorker();
	}

	get username() {
		return this.root.querySelector("#username").value;
	}

	get password() {
		return this.root.querySelector("#password").value;
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
		this.root.querySelector("#submit").onclick = async _ => {
			const elem = document.createElement("app-comp");
			//this.replaceWith(elem);
			const resp = await this.worker.login(this.username, this.password);
			if(resp == null) {
				this.root.querySelector("#username").value = "";
				this.root.querySelector("#username").classList.add("error");
				this.root.querySelector("#password").value = "";
				this.root.querySelector("#password").classList.add("error");
			}
			else {
				elem.setAttribute("token", resp);
				this.replaceWith(elem);
			}
		}
	}
}

customElements.define("login-comp", LoginComp);