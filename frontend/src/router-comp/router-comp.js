export default class RouterComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	connectedCallback() {
		this.appendHTML();

		document.addEventListener("router", evt => {
			console.log("catched evt");
		});
	}

	appendHTML() {
		this.root.innerHTML = "<div id='body'></div>";
		this.appendCSS();
	}

	appendCSS() {
		let style = document.createElement("style");
		style.innerText = `
		#body {
			width: 100%;
			height: 100%;
		}
		`;
		this.root.append(style);
	}
}

customElements.define("router-comp", RouterComp);