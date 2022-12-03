import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import userRouter from './routes/routes.js';
app.use('/api/', userRouter);

// Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
