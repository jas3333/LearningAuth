import dotenv from 'dotenv';
dotenv.config();

import md5 from 'md5';

import mongoose from 'mongoose';
import User from '../models/userModel.js';
mongoose.connect(`${process.env.MONGODB}/usersDB`);

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    User.create({ username: username, password: md5(password) });
    console.log(`User: ${req.body} created`);
};
const loginUser = async (req, res) => {
    res.send('Login User');
    console.log('Login user');
};

const deleteUser = async (req, res) => {
    User.deleteOne(req.body, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Removing user');
        }
    });
};

const sendUserList = async (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            console.log(error);
        } else {
            res.send(users);
        }
    });
};

export { registerUser, loginUser, deleteUser, sendUserList };
