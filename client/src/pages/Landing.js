import { FaKey } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='container-col'>
            <div className='container-col mg-top-vlg auto border-neon-red shadow-neon-red pad-lg radius-lg '>
                <h1>Landing Page </h1>
            </div>
            <div className='container-col auto mg-top-vlg border-neon-red pad-lg radius-lg shadow-neon-red'>
                <h1>This door is locked</h1>
                <FaKey className='auto mg-top-md icon-lg red' />
                <div className='underline-full bg-red mg-top-md'></div>
                <h4 className='text-center mg-top-sm'>Register or login to open it</h4>
            </div>
            <div className='container mg-top-lg auto'>
                <Link to='/register' className='btn text-center pad-sm btn-md'>
                    Register
                </Link>
                <Link to='/login' className='btn text-center pad-sm btn-md mg-left-md'>
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Landing;
