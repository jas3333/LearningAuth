import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import userRouter from './routes/routes.js';

import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

const testing = (req, res, next) => {
    console.log('test test');
    next();
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(testing);
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Routes
app.use('/api/', userRouter);

// Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
