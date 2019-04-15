import html from './delete-comp.html';
import css from './delete-comp.css';
import FetchWorker from './../fetch-worker';

export default class DeleteComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
		this.worker = new FetchWorker();
	}

	connectedCallback() {
		this.appendHTML();
		this.addFunctionality();
		this.createOptions();
	}

	async createOptions() {
		this.data = await this.worker.readAll();
		const select = this.root.querySelector("#episodes");
		this.data.forEach(elem => {
			let tag = document.createElement("option");
			tag.setAttribute("value", elem.episodeId);
			tag.innerText = elem.title;
			select.appendChild(tag);
		});

		this.current = this.data[0];
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

	elem(str) {
		return this.root.querySelector(str);
	}

	addFunctionality() {
		this.elem("#episodes").onchange = _ => {
			const selected = this.elem("#episodes").options[this.elem("#episodes").selectedIndex];
			this.data.forEach(elem => {
				if(elem.episodeId == selected.getAttribute("value")) {
					this.current = elem;
				}
			})
		};

		this.elem("#delete").onclick = async _ => {
			await this.worker.delete(this.current.episodeId);

			const customEvent = new CustomEvent("router", {
				bubbles: true,
				detail: {
					menu: "DELETE"
				}
			});

			setTimeout(_ => document.dispatchEvent(customEvent), 500);
		}
	}
}

customElements.define("delete-comp", DeleteComp);