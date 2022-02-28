import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Changed to functional component
const UserItem = ({ user: { login } }) => {
	return (
		<div className='card'>
			<h1 className='NameOfPerson'>- {login}</h1>
			<Link to={`/user/${login}`}>More</Link>
		</div>
	);
};

UserItem.propTypes = {
	// kc: ptor
	user: PropTypes.object.isRequired,
};

export default UserItem;
