// KC: rce
import React from 'react';
// KC: impt
import PropTypes from 'prop-types';
// need react-router-dom
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
	return (
		<nav>
			Navbar for {title} | <Link to='/'>Home</Link> |
			<Link to='/about'>About</Link>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'No Title Set',
};

Navbar.propTypes = {
	// kc: ptsr
	title: PropTypes.string.isRequired,
};

export default Navbar;
