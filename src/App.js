import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	// For later - look into:
	// - async & await
	// - promises
	async componentDidMount() {
		this.setState({ loading: true });

		// const res = await axios.get('https://api.github.com/users');
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		//

		this.setState({ users: res.data, loading: false });
	}

	// Lifecycle method
	render() {
		return (
			<Fragment>
				<Navbar title='My title' />
				<Users loading={this.state.loading} users={this.state.users} />
			</Fragment>
		);
	}
}

export default App;
