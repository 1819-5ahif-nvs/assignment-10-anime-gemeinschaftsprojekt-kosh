export default class LoginWorker {
	constructor() {
		this.baseurl = "http://localhost:8080/anime/rs/login";
	}

	async login(username, password) {
		/*const resp = await fetch(this.baseurl, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		});

		for(let pair of resp.headers.entries()) {
			console.log(pair[0], ": ", pair[1]);
		}

		console.log(resp.headers.get("authorization"));
		for(let pair of resp.headers.keys()) {
			console.log(pair[0], ": ", pair[1]);
		}

		resp.headers.forEach(elem => console.log(elem)); */

		const req = new XMLHttpRequest();
		req.open("POST", this.baseurl);
		req.setRequestHeader("Content-Type", "application/json");
		req.send(JSON.stringify({
			username: username,
			password: password
		}));

		console.log(req.getResponseHeader("Authorization"));
	}
}