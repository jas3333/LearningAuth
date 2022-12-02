import { AiFillDelete } from 'react-icons/ai';

const Users = ({ _id, username, removeUser }) => {
    return (
        <div className='container space mg-top-sm'>
            <div className='container'>
                <h3>{username}</h3>
            </div>
            <div className='container'>
                <AiFillDelete className='icon red pointer' onClick={() => removeUser(_id)} />
            </div>
        </div>
    );
};

export default Users;
