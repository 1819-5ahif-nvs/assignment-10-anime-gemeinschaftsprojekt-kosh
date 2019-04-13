export default class LoginWorker {


	constructor() {
		this.baseurl = "http://localhost:8080/anime/rs/login";
	}

	async login(username, password) {
		const resp = await fetch(this.baseurl, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		});

		if(resp.status == 200)
			return await resp.json();
		
		return null;
	}
}