import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar space'>
            <div className='container '>
                <Link to='/' className='btn radius-lg text-center pad-lg shadow-neon-red border-neon-red'>
                    Learn2Auth
                </Link>
            </div>
            <div className='container'>
                <Link to='/admin'>
                    <FaCog className='icon' />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
