import express from 'express';
import cors from 'cors';
import { callsRouter } from './routes/callsRouter.js';
import { feedabackRouter } from './routes/feedbackRouter.js';
import { ordersRouter } from './routes/ordersRouter.js';
import { authRouter } from './routes/authRouter.js';
import { typeRouter } from './routes/typeRouter.js';
import { productRouter } from './routes/productRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import { router } from './routes/index.js';

const app = express();
app.use(cookieParser());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use(router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));