import axios from 'axios';
import { useState, useEffect } from 'react';
import Users from '../components/Users';

const Admin = () => {
    const [userList, setUserList] = useState([]);

    const getUsers = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/sendUser`);
        setUserList(data);
    };

    const removeUser = async (id) => {
        setUserList(userList.filter((user) => user._id !== id));
        const userToRemove = { _id: id };
        const sendForRemoval = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/deleteUser`, userToRemove);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='container-col mg-top-vlg auto size-md radius-md border-neon-red pad-lg'>
            <h1 className='text-center'>Admin Page</h1>
            <div className='underline-full mg-bot-lg mg-top-sm bg-red'></div>
            {userList.map((user) => {
                return <Users key={user._id} {...user} removeUser={removeUser} />;
            })}
        </div>
    );
};

export default Admin;
