export default class FetchWorker {
	constructor(token) {
		this.token = token;
		this.baseurl = "http://localhost:8080/anime/rs/episode";
	}

	async create(data) {
		const resp = await fetch(this.baseurl, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: "Bearer " + this.token
			}
		});

		return resp.status;
	}

	async readAll() {
		const resp = await fetch(this.baseurl, {
			headers: {
				Authorization: "Bearer " + this.token
			}
		});
		return await resp.json();
	}

	async update(data) {
		const resp = await fetch(this.baseurl, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: "Bearer " + this.token
			}
		});

		return resp.status;
	}

	async delete(data) {
		const resp = await fetch(this.baseurl + "/" + data, {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + this.token
			}
		});

		return resp.status;
	}
}