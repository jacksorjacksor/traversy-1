import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	render() {
		return (
			<div>
				{/* Map: used to iterate over list with callback function  */}
				{this.props.users.map((newUser) => (
					// Each item of iterated map needs a unique key
					<UserItem key={newUser.id} user={newUser} />
				))}
			</div>
		);
	}
}

export default Users;
