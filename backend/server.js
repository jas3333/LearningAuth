import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import userRouter from './routes/routes.js';
app.use('/api/', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
