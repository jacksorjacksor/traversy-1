import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';

// v6 means this HAS to be function based, not class based

const User = ({ user, loading, getUser }) => {
	useEffect(() => {
		getUser();
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	// const { loading } = this.props;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div>
				THIS WON'T WORK UNTIL FUNCTION BASED THANKS TO REACT ROUTER V6
			</div>
		);
	}
};

export default User;
