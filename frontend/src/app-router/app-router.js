export default class AppRouter extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	connectedCallback() {
		this.appendHTML();
		this.heading();

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
			background: blue;
		}
		`;
		this.root.append(style);
	}
}

customElements.define("app-comp", AppRouter);