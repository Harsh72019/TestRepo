import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

import connectDB from './src/config/db.config.js';
import redisClient from './src/config/redis.config.js';

import mainRouter from "./src/routes/index.js";
import errorHandler from './src/middlewares/errorHandler.js';
import { swaggerUi, swaggerSpec } from './src/config/swagger.config.js';


dotenv.config();
const app = express();

connectDB();

redisClient.connect();

app.use(cors());

app.use(express.json({ limit: '10mb' }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

app.use("/" , (req , res) => {
    res.send(`Task for Idea Usher`)
});
// Routes
app.use('/api/v1', mainRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Error handler
app.use(errorHandler);

export default app;
