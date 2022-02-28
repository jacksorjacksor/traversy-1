import React, { Fragment, Component } from 'react';
// $ npm i react-router-dom
// ALSO: "Switch" is now called "Routes" as of react-router-dom v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import axios from 'axios';

let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientID = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
	};
	// For later - look into:
	// - async & await
	// - promises
	getUser = async (username) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
		);
		this.setState({ user: res.data, loading: false });
	};

	// Search GitHub users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
		);

		this.setState({ users: res.data.items, loading: false });
	};

	clearUsers = () => this.setState({ users: [], loading: false });

	setAlert = (msg, type) => {
		// nb: it was "msg: msg, type:type", but you can condense to "msg, type"
		this.setState({ alert: { msg, type } });

		setTimeout(() => {
			this.setState({ alert: null });
		}, 2000);
	};

	// Lifecycle method
	render() {
		// Destructuring
		const { users, user, loading, alert } = this.state;
		return (
			<Router>
				<Fragment>
					<Navbar title='GitHub Finder' />
					<div className='container'>
						<Alert alert={alert} />
					</div>
					{/* "Switch" is now called "Routes" as of react-router-dom v6 */}
					<Routes>
						<Route
							exact
							path='/'
							element={
								<Fragment>
									<Search
										searchUsers={this.searchUsers}
										clearUsers={this.clearUsers}
										showClear={
											users.length > 0 ? true : false
										}
										setAlert={this.setAlert}
									/>
									<Users loading={loading} users={users} />
								</Fragment>
							}
						/>
						<Route exact path='/about' element={<About />} />
						<Route
							exact
							path='/user/:login'
							element={
								<User
									user={user}
									loading={loading}
									getUser={this.getUser}
								/>
							}
						/>
					</Routes>
				</Fragment>
			</Router>
		);
	}
}

export default App;
