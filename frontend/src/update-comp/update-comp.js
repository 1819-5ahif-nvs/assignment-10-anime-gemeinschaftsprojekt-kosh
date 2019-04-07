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
		const splits = date.split(" ");
		return splits[2] + "-" + this.getMonth(splits[0]) + "-" + this.getDay(splits[1].split(",")[0]);
	}

	getMonth(num) {
		if(num == "Jan") {
			return "01";
		}
		else if(num == "Feb") {
			return "02";
		}
		else if(num == "Mar") {
			return "03";
		}
		else if(num == "Apr") {
			return "04";
		}
		else if(num == "May") {
			return "05";
		}
		else if(num == "Jun") {
			return "06";
		}
		else if(num == "Jul") {
			return "07";
		}
		else if(num == "Aug") {
			return "08";
		}
		else if(num == "Sep") {
			return "09";
		}
		else if(num == "Oct") {
			return "10";
		}
		else if(num == "Nov") {
			return "11";
		}
		else if(num == "Dec") {
			return "12";
		}
	}

	getDay(num) {
		if(num.length > 1) {
			return num;
		}
		else if(num.length == 1) {
			return "0" + num;
		}
		else if(num.length == 0) {
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