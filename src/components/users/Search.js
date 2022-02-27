import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	// useState hook
	const [text, setText] = useState('');

	// Takes the name of whatever fired the onChange event, then stores the value in state
	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();

		// Alert if empty:
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	// HTML
	return (
		<div>
			<form onSubmit={onSubmit} action=''>
				<input
					type='text'
					name='text'
					id=''
					value={text}
					onChange={onChange}
				/>
				<input type='submit' value='Search' />
			</form>
			{/* Conditional: if showClear then do the thing */}
			{showClear && <button onClick={clearUsers}>Clear</button>}
		</div>
	);
};

// PropType Checks
Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
