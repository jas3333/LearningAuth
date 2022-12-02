import { redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (regUsername && regPassword) {
            const newUser = { username: regUsername, password: regPassword };

            setRegUsername('');
            setRegPassword('');
            setLoggedIn(true);

            const send = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/registerUser`, newUser);
        }
    };

    useEffect(() => {
        if (loggedIn) {
            navigate('/loggedIn');
        }
    }, [loggedIn, navigate]);

    const forRegister = {
        regUsername,
        regPassword,
        setRegUsername,
        setRegPassword,
        handleSubmit,
    };

    return (
        <div className='container'>
            <RegisterForm {...forRegister} />
        </div>
    );
};
export default Register;
