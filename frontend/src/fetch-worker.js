export default class FetchWorker {
	constructor() {
		this.baseurl = "http://localhost:8080/anime/rs/anime";
	}

	create(data) {

	}

	async readAll() {
		const resp = await fetch(this.baseurl);
		return await resp.json();
	}

	update(data) {

	}

	delete(data) {

	}
}