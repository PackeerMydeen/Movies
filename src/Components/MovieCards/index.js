import React, { Fragment } from 'react';

import './index.scss';

export default function MovieCards(props) {
	const { movies } = props;
	return (
		<div className='movie-cards-wrapper'>
			{movies && movies.Response === 'True' ? (
				<Fragment>
					{movies &&
						movies.Search &&
						movies.Search.slice(0, 5).map(item => (
							<div className='poster'>
								<div
									className='img'
									alt={item.Title}
									style={{ backgroundImage: `url(${item.Poster})` }}
								/>
								<div className='info'>
									<h1 className='title'>{item.Title}</h1>
									<p className='text'>{item.Type}</p>
								</div>
							</div>
						))}
				</Fragment>
			) : (
				<Fragment>{movies.Error && movies.Error}</Fragment>
			)}
		</div>
	);
}
