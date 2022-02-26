import React from 'react';
import PropTypes from 'prop-types';

// Changed to functional component
const UserItem = ({ user: { login } }) => {
	return (
		<div className='card'>
			<h1 className='NameOfPerson'>Hai: {login}</h1>
		</div>
	);
};

UserItem.propTypes = {
	// kc: ptor
	user: PropTypes.object.isRequired,
};

export default UserItem;
