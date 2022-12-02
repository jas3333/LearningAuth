import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setRegUsername('');
        setRegPassword('');
    };

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
