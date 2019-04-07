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
		const resp = await fetch(this.baseurl, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return resp.status;
	}

	async delete(data) {
		const resp = await fetch(this.baseurl + "/" + data, {
			method: "DELETE",
			mode: "cors"
		});

		return resp.status;
	}
}