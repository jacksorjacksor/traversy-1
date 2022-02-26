import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

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
				<UserItem />
			</Fragment>
		);
	}
}

export default App;
