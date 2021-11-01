import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
			<div className='home'>
				<div className='code'>
					<Link to='/about'>
						<h1 className='animate__animated animate__zoomIn'>
							emmanuel_kobara
						</h1>
					</Link>
				</div>
			</div>
		);
};

export default Home;