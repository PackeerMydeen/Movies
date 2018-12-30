import axios from 'axios';

export function getMovies(searchText) {
	console.log(searchText);
	const url = 'http://www.omdbapi.com/';
	return axios.get(url, {
		params: {
			s: searchText,
			type: 'movie',
			apikey: 'b7048067'
		}
	});
}
