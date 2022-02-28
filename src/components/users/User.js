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
				<p>Name: {name}</p>
				<img src={avatar_url} alt='' />
				<p>Location: {location}</p>
				<p>Bio: {bio}</p>
				<p>Blog: {blog}</p>
				<a href={html_url} target='_blank' rel='noreferrer'>
					<p>GitHub page: {html_url}</p>
				</a>
				<p>Followers: {followers}</p>
				<p>Following: {following}</p>
				<p>Public repos: {public_repos}</p>
				<p>Public repos: {public_gists}</p>
				{hireable ? (
					<p>Currently hireable!</p>
				) : (
					<p>Not hireable at present</p>
				)}
			</div>
		);
	}
};

export default User;
