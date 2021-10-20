import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='code'>
                <Link to='/about'>
                    <img src='../images/code.png' alt='code_kobara' />
                </Link>
            </div>
        </div>
    );
};

export default Home;