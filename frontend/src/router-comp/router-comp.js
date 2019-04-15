export default class RouterComp extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({mode: "closed"})
	}

	connectedCallback() {
		this.appendHTML();

		document.addEventListener("router", evt => {
			const menu = evt.detail.menu;
			if(menu == "CREATE") {
				this.root.innerHTML = "<create-comp></create-comp>";
			}
			else if(menu == "READ") {
				this.root.innerHTML = "<read-comp></read-comp>";
			}
			else if(menu == "UPDATE") {
				this.root.innerHTML = "<update-comp></update-comp>";
			}
			else if(menu == "DELETE") {
				this.root.innerHTML = "<delete-comp></delete-comp>";
			}
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