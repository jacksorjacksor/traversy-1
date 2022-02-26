// KC: rce
import React from 'react';
// KC: impt
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return <div>Navbar for {title}</div>;
};

Navbar.defaultProps = {
	title: 'No Title Set',
};

Navbar.propTypes = {
	// kc: ptsr
	title: PropTypes.string.isRequired,
};

export default Navbar;
