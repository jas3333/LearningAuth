import axios from 'axios';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = { username: username, password: password };
        setUsername('');
        setPassword('');

        const checkUser = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/loginUser`, user);
    };

    const forLogin = {
        username,
        password,
        setUsername,
        setPassword,
        handleSubmit,
    };
    return (
        <div className='container'>
            <LoginForm {...forLogin} />
        </div>
    );
};

export default Login;
