import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<nav className='home-content'>
			<h1>Home Repository</h1>

			<ul>
				<li>
					<Link to='/team-one'>Team One</Link>
				</li>
				<li>
					<Link to='/team-two'>Team Two</Link>
				</li>
			</ul>
		</nav>
	);
}
