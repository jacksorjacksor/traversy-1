import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
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
		const res = await axios.get('https://api.github.com/users');
		this.setState({ users: res.data, loading: true });
	}

	// Lifecycle method
	render() {
		const name = 'John Doe';
		const loading = false;
		const showName = true;

		return (
			<Fragment>
				<Navbar title='My title' />
				{loading ? (
					<h4>Loading...</h4>
				) : (
					<h1>Hello {showName && name + '!'}</h1>
				)}
				<Users loading={this.state.loading} users={this.state.users} />
			</Fragment>
		);
	}
}

export default App;
