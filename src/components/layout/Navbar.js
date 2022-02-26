// KC: rce
import React, { Component } from 'react';
// KC: impt
import PropTypes from 'prop-types';

export class Navbar extends Component {
	static defaultProps = {
		title: 'No Title Set',
	};

	static propTypes = {
		// kc: ptsr
		title: PropTypes.string.isRequired,
	};

	render() {
		return <div>Navbar for {this.props.title}</div>;
	}
}

export default Navbar;
