import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';

import mongoose from 'mongoose';
import User from '../models/userModel.js';

mongoose.connect(`${process.env.MONGODB}/usersDB`);

const saltRounds = 10;

const registerUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(StatusCodes.OK).json({ user });

    // bcrypt.hash(password, saltRounds, (error, hash) => {
    //     User.create({ username: username, password: hash });
    // });
};
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username }, (error, foundUser) => {
        if (error) {
            console.log(error);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, (error, result) => {
                    result ? console.log('Ok you may enter') : console.log('Nope, get out.');
                });
            }
        }
    });
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
