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

import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};
	// For later - look into:
	// - async & await
	// - promises

	// Search GitHub users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
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
		const { users, loading, alert } = this.state;
		return (
			<Router>
				<Fragment>
					<Navbar title='My title' />
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
					</Routes>
				</Fragment>
			</Router>
		);
	}
}

export default App;
