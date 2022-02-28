import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<p>Welcome to my page</p>
			<p>
				Notice how the filters on the previous page are remembered when
				you go <Link to='/'>back to the home page</Link>?
			</p>
			<p>Cool huh?</p>
		</div>
	);
};

export default About;
