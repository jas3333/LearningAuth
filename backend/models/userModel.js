import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Must provide a name'], unique: true },
    password: { type: String, required: [true, 'Must provide a password'], minLength: 8 },
});

export default mongoose.model('User', userSchema);
