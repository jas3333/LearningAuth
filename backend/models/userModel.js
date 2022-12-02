import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
// import encrypt from 'mongoose-encryption';

const secret = process.env.SECRET;

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });

export default mongoose.model('User', userSchema);
