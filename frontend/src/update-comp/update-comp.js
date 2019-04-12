import html from './update-comp.html';
import css from './update-comp.css';
import FetchWorker from './../fetch-worker';

export default class UpdateComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
		this.worker = new FetchWorker();
	}

	connectedCallback() {
		this.appendHTML();
		this.createOptions();
		this.addFunctionality();
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
		this.loadEpisodeData();
	}

	loadEpisodeData() {
		this.elem("#title").value = this.current.title;
		this.elem("#video").value = this.current.videoURL;
		this.elem("#forum").value = this.current.forumURL;
		this.elem("#airedFrom").value = this.dateParser(this.current.airedFrom);
		this.elem("#airedTo").value = this.dateParser(this.current.airedTo);
	}

	appendHTML() {
		this.root.innerHTML = html;
		this.appendCSS();
	}

	dateParser(date) {
		if(date.year == "9999")
			return "0001-01-01";

		return this.getYearNum(date.year) + "-" + this.getNum(date.month) + "-" + this.getNum(date.day);
	}

	getYearNum(num) {
		let str = num.toString();
		if(str.length == 3) {
			str = "0" + str;
		}
		else if(str.length == 2) {
			str = "00" + str;
		}
		else if(str.length == 1) {
			str = "000" + str;
		}
		
		return str;
	}

	getNum(num) {
		if(num > 9) {
			return num;
		}
		else if(num > 0) {
			return "0" + num;
		}
		else {
			return "00";
		}
	}

	appendCSS() {
		let style = document.createElement("style");
		style.innerText = css;
		this.root.append(style);
	}

	addFunctionality() {
		this.elem("#button").onclick = _ => {
			let elem = {};
			elem.episodeId = this.current.episodeId
			elem.title = this.elem("#title").value;
			elem.airedFrom = this.elem("#airedfrom").value;
			elem.airedTo = this.elem("#airedto").value;
			elem.videoURL = this.elem("#video").value;
			elem.forumURL = this.elem("#forum").value;
			
			this.worker.update(elem);


			const customEvent = new CustomEvent("router", {
				bubbles: true,
				detail: {
					menu: "UPDATE"
				}
			});

			document.dispatchEvent(customEvent);
		};

		this.elem("#episodes").onchange = _ => {
			const selected = this.elem("#episodes").options[this.elem("#episodes").selectedIndex];
			this.data.forEach(elem => {
				if(elem.episodeId == selected.getAttribute("value")) {
					this.current = elem;
					this.loadEpisodeData();
				}
			})
		}
	}

	elem(str) {
		return this.root.querySelector(str);
	}
}

customElements.define("update-comp", UpdateComp);