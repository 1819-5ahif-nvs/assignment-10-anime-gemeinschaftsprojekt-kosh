import html from './create-comp.html';
import css from './create-comp.css';
import FetchWorker from './../fetch-worker';

export default class CreateComp extends HTMLElement {
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
		this.elem("#button").onclick = _ => {
			let elem = {};
			elem.title = this.elem("#title").value;
			elem.airedFrom = this.elem("#aired").value;
			elem.videoURL = this.elem("#video").value;
			elem.forumURL = this.elem("#forum").value;

			this.elem("#title").value = "";
			this.elem("#aired").value = "";
			this.elem("#video").value = "";
			this.elem("#forum").value = "";

			(new FetchWorker(this.getAttribute("token"))).create(elem);
		};

		this.elem("#aired").onfocus = evt => this.onDateFocus(evt);
	}

	onDateFocus(evt) {
		evt.srcElement.setAttribute("type", "date");
	}

	elem(str) {
		return this.root.querySelector(str);
	}
}

customElements.define("create-comp", CreateComp);