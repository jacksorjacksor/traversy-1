import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { useParams } from 'react-router-dom';

// v6 means this HAS to be function based, not class based

const User = ({ user, loading, getUser }) => {
	// useParams gets values from URL
	let params = useParams();
	console.log(params);
	const { login } = params;
	useEffect(() => {
		getUser(login);
	}, []);
	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div>
				<p>{name}</p>
				<img src={avatar_url} alt='' />
				<p>{location}</p>
				<p>{bio}</p>
				<p>{blog}</p>
				<p>{html_url}</p>
				<p>{followers}</p>
				<p>{following}</p>
				<p>{public_repos}</p>
				<p>{public_gists}</p>
				<p>{hireable}</p>
			</div>
		);
	}
};

export default User;
