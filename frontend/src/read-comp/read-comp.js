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
		this.root.querySelector("#id").onkeyup = evt => {
			const input = this.root.querySelector("#id").value;
			const node = this.root.querySelector("#readById>data-comp");
			let toReplace = this.createDummyTag();
			for(let i = 0; i < this.data.length; i++) {
				if(String(this.data[i].episodeId) === input) {
					toReplace = this.createTag(this.data[i]);
					break;
				}
			}

			node.replaceWith(toReplace);
		};
	}

	get token() {
		return this.getAttribute("token");
	}

	async getAllEpisodes() {
		this.data = await (new FetchWorker(this.token)).readAll();

		this.data.forEach(elem => {
			this.root.querySelector("#readAll").appendChild(this.createTag(elem));
		});
	}

	createTag(elem) {
		const tag = document.createElement("data-comp");
		tag.setAttribute("episodeid", elem.episodeId);
		tag.setAttribute("title", elem.title);
		tag.setAttribute("aired", this.createDateString(elem.airedFrom));
		tag.setAttribute("forumurl", elem.forumURL);
		tag.setAttribute("videourl", elem.videoURL);
		return tag;
	}

	createDateString(date) {
		if(date.year == "9999") {
			return "no date";
		}
		return date.day + "." + date.month + "." + date.year;
	}

	createDummyTag() {
		const tag = document.createElement("data-comp");
		tag.setAttribute("episodeid", "-1");
		return tag;
	}
}

customElements.define("read-comp", ReadComp);