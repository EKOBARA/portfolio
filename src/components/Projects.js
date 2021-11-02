import React from 'react';
import Mars from '../assets/mars.png';
import Region from '../assets/region.png';
import Price from '../assets/priceless.png';

const Projects = () => {
    return (
			<div className='Projects'>
				<li className='pro'>
					<a classname='title' href='https://ekobara.github.io/guess-the-region/'>
						Guess The Region
					</a>
					<img src={Region} alt="Guess the Region" />
				</li>
				<li className='pro'>
					<a classname='title' href='https://viewsfrommars.netlify.app/'>
						Views From Mars
					</a>
						<img src={Mars} alt="Views From Mars" />
				</li>
				<li className='pro'>
					<a classname='title' href='https://pricelessapp.netlify.app/'>
                        Priceless
                    </a>
					<img src={Price} alt="Priceless" />
				</li>
			</div>
		);
};

export default Projects;