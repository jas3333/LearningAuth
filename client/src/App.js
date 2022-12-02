import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import LoggedIn from './pages/LoggedIn';
import Admin from './pages/Admin';

function App() {
    return (
        <div className='container-col'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/loggedIn' element={<LoggedIn />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
