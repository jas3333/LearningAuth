import { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
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
