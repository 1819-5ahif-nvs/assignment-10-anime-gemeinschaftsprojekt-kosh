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

		data.forEach(elem => {
			const tag = document.createElement("data-comp");
			tag.setAttribute("episodeid", elem.episodeId);
			tag.setAttribute("title", elem.title);
			tag.setAttribute("airedfrom", elem.airedFrom);
			tag.setAttribute("airedto", elem.airedTo);
			tag.setAttribute("forumurl", elem.forumURL);
			tag.setAttribute("videourl", elem.videoURL);
			this.root.querySelector("#readAll").appendChild(tag);
		});
	}
}

customElements.define("read-comp", ReadComp);