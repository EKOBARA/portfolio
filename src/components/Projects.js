import React from 'react';
import { Card, CardGroup, CardImg } from 'react-bootstrap';

const Projects = () => {
    return (
			<div className='Projects'>
				<CardGroup>
					<a href='https://ekobara.github.io/guess-the-region/'>
						Guess The Region
					</a>
					<CardImg src="../images/Screen Shot 2021-09-15 at 5.51.38 PM.png" alt="Guess the Region" />
				</CardGroup>
				<CardGroup>
					<a href='https://optimistic-murdock-828ba3.netlify.app/'>
						Views From Mars
					</a>
						<CardImg src="../images/Screen Shot 2021-09-23 at 11.35.54 AM.png" alt="Views From Mars" />
				</CardGroup>
				<CardGroup>
					<a href='https://pricelessapp.netlify.app/'>
                        Priceless
                    </a>
					<CardImg src="../images/Screen Shot 2021-11-01 at 8.50.36 AM.png" alt="Priceless" />
				</CardGroup>
				{/* <section>Project 4</section> */}
			</div>
		);
};

export default Projects;