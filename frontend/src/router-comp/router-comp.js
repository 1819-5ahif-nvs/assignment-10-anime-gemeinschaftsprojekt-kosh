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
		this.root.innerHTML = "<div id='body'><create-comp></create-comp></div>";
		this.appendCSS();
	}

	appendCSS() {
		let style = document.createElement("style");
		style.innerText = `
		#body {
		}
		`;
		this.root.append(style);
	}
}

customElements.define("router-comp", RouterComp);