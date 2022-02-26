import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
	};

	// Takes the name of whatever fired the onChange event, then stores the value in state
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};

	render() {
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
			</div>
		);
	}
}

export default Search;
