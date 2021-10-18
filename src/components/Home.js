import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <section classname='code'>
                <Link to='/about'>
                    <img src='../images/code.png' alt='code_kobara' />
                </Link>
            </section>
        </div>
    );
};

export default Home;