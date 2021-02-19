import React from 'react';

export default function Search(props) {
	return (
		<div>
			<form align="center">
				<input
					value={props.query}
					onChange={props.handleChange}
					type="text"
					className="search"
					style={{ fontSize: '30px' }}
					placeholder="Search State"
				/>
			</form>
		</div>
	);
}
