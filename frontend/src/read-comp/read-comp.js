import html from './read-comp.html';
import css from './read-comp.css';
import FetchWorker from './../fetch-worker';

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

	async getAllEpisodes() {
		const data = await (new FetchWorker()).readAll();
		console.log(data.length);
	}
}

customElements.define("read-comp", ReadComp);