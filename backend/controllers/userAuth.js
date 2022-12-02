import mongoose from 'mongoose';

mongoose.connect(`${process.env.MONGODB}/usersDB`);
