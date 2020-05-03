const ApiService = {

	listSuggestion: () => {
		return fetch('http://localhost:8000/api/suggestion')
			.then(res => ApiService.handlesErrors(res))
			.then(res => res.json())

	},
	createSuggestion: suggestion => {
		return fetch('http://localhost:8000/api/suggestion',
			{ method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: suggestion })
			.then(res => ApiService.handlesErrors(res))
			.then(res => res.json());
	},
	updateSuggestion: id => {
		return fetch(`http://localhost:8000/api/autor/${id}`,
			{ method: 'PUT',
				headers: { 'content-type': 'application/json' },
			})
			.then(res => ApiService.handlesErrors(res))
			.then(res => res.json());
	},
	deleteSuggestion: id => {
		return fetch(`http://localhost:8000/api/autor/${id}`,
			{ method: 'DELETE',
				headers: { 'content-type': 'application/json' },
			})
			.then(res => ApiService.handlesErrors(res))
			.then(res => res.json());
	},
	handlesErrors: res => {
		if (!res.ok) {
			throw Error(res.responseText);
		}
		return res;
	}

}
export default ApiService