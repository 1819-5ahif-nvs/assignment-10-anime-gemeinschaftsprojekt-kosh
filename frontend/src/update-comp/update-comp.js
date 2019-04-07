import html from './update-comp.html';
import css from './update-comp.css';

export default class UpdateComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	connectedCallback() {
		this.appendHTML();
		//this.addFunctionality();
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
			elem.episodeid = this.choosen.id
			elem.title = this.elem("#title").value;
			elem.airedFrom = this.elem("#airedfrom").value;
			elem.airedTo = this.elem("#airedto").value;
			elem.videoURL = this.elem("#video").value;
			elem.forumURL = this.elem("#forum").value;

			console.log(elem);
			(new FetchWorker()).create(elem);
		};

		this.elem("#airedFrom").onfocus = evt => this.onDateFocus(evt);
		this.elem("#airedTo").onfocus = evt => this.onDateFocus(evt);
	}

	onDateFocus(evt) {
		evt.srcElement.setAttribute("type", "date");
	}

	elem(str) {
		return this.root.querySelector(str);
	}
}

customElements.define("update-comp", UpdateComp);