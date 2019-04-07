export default class FetchWorker {
	constructor() {
		this.baseurl = "http://localhost:8080/anime/rs/anime";
	}

	async create(data) {
		const resp = await fetch(this.baseurl, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return resp.status;
	}

	async readAll() {
		const resp = await fetch(this.baseurl);
		return await resp.json();
	}

	async update(data) {
		console.log(JSON.stringify(data));

		const resp = await fetch(this.baseurl, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return resp.status;
	}

	delete(data) {

	}
}