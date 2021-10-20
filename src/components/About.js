import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const About = () => {
    return (
        <div className='about'>
            <div >
                <p className='info'>
                    I am a full stack software developer with a passion for innovation. I am driven by the desire to help create and drive the technological wheel to move society forward. From building user friendly applications to help make lives easier to finding ways to improve established works, I love finding creative ways to solve problems.
                </p>
            </div>
            <div>
               <Link to='/projects'>
                    <h3>
                        Projects
                    </h3>
               </Link>
            </div>
            <Contact />
        </div>

    );
};

export default About;