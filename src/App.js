import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
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
				<Users />
			</Fragment>
		);
	}
}

export default App;
