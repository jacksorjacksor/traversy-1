import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};

	// Takes the name of whatever fired the onChange event, then stores the value in state
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.text);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} action=''>
					<input
						type='text'
						name=''
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
