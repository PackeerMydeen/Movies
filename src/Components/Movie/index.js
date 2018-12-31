import React, { Component } from 'react';

import './index.scss';
import SearchBox from '../SearchBox';
import MovieCards from '../MovieCards';
import { getMovies } from '../../Actions'; //API

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
			movies: []
		};
	}

	componentWillMount() {
		this.setState(
			{
				searchInput: 'man'
			},
			() => this.getMovies()
		);
	}

	onSearchInputChange = e => {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => {
				if (this.state.searchInput.length > 2) {
					this.getMovies();
				}
			}
		);
	};

	getMovies = () => {
		getMovies(this.state.searchInput).then(res => {
			this.setState({
				movies: res.data
			});
		});
	};

	render() {
		const { movies } = this.state;
		return (
			<div className='movie-wrapper'>
				<div className='movie-container'>
					<SearchBox onSearchInputChange={this.onSearchInputChange} />
					<div className='main'>
						<MovieCards movies={movies} />
					</div>
				</div>
			</div>
		);
	}
}
