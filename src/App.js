import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		loading: false,
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

	// Lifecycle method
	render() {
		// Destructuring
		const { users, loading } = this.state;
		return (
			<Fragment>
				<Navbar title='My title' />
				<Search
					searchUsers={this.searchUsers}
					clearUsers={this.clearUsers}
					showClear={users.length > 0 ? true : false}
				/>
				<Users loading={loading} users={users} />
			</Fragment>
		);
	}
}

export default App;
