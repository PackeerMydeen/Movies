import React from 'react';

import './index.scss';
export default function SearchBox(props) {
	return (
		<div className='header-container'>
			<div className='search'>
				<input
					type='text'
					name='searchInput'
					onChange={props.onSearchInputChange}
					className='searchTerm'
					placeholder='Search More than three letters'
				/>
			</div>
		</div>
	);
}
