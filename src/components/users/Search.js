import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	// Takes the name of whatever fired the onChange event, then stores the value in state
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();

		// Alert if empty:
		if (this.state.text === '') {
			this.props.setAlert('Please enter something', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		// Destructuring
		const { showClear, clearUsers } = this.props;
		return (
			<div>
				<form onSubmit={this.onSubmit} action=''>
					<input
						type='text'
						name='text'
						id=''
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input type='submit' value='Search' />
				</form>
				{/* Conditional: if showClear then do the thing */}
				{showClear && <button onClick={clearUsers}>Clear</button>}
			</div>
		);
	}
}

export default Search;
