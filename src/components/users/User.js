import React, { Component } from 'react';

// v6 means this HAS to be function based, not class based

class User extends Component {
	componentDidMount() {
		// match.params used to get the url - this then looks for :login
		// https://v5.reactrouter.com/web/api/match
		console.log(this.props);
		// this.props.getUser(this.props.match.params.login);
	}

	render() {
		// const {
		// 	name,
		// 	avatar_url,
		// 	location,
		// 	bio,
		// 	blog,
		// 	login,
		// 	html_url,
		// 	followers,
		// 	following,
		// 	public_repos,
		// 	public_gists,
		// 	hireable,
		// } = this.props.singleUser;

		// const { loading } = this.props;

		return (
			<div>
				THIS WON'T WORK UNTIL FUNCTION BASED THANKS TO REACT ROUTER V6
			</div>
		);
	}
}

export default User;
