import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
	// Lifecycle method
	render() {
		const name = 'John Doe';
		const loading = false;
		const showName = true;

		return (
			<Fragment>
				{loading ? (
					<h4>Loading...</h4>
				) : (
					<h1>Hello {showName && name + '!'}</h1>
				)}
			</Fragment>
		);
	}
}

export default App;
