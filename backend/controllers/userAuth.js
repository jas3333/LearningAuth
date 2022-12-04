import dotenv from 'dotenv';
dotenv.config();
import { StatusCodes } from 'http-status-codes';

import mongoose from 'mongoose';
import User from '../models/userModel.js';

mongoose.connect(`${process.env.MONGODB}/usersDB`);

const registerUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
};
const loginUser = async (req, res) => {
    res.send('nice try');
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
