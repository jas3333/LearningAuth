import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import encrypt from 'mongoose-encryption';
import User from '../models/userModel.js';
mongoose.connect(`${process.env.MONGODB}/usersDB`);

const registerUser = async (req, res) => {
    User.create(req.body);
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
