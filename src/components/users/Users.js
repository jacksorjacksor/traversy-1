import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// kc: impt
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div>
				{/* Map: used to iterate over list with callback function  */}
				{users.map((newUser) => (
					// Each item of iterated map needs a unique key
					<UserItem key={newUser.id} user={newUser} />
				))}
			</div>
		);
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Users;
