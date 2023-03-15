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

const app = express();
app.use(cookieParser());

app.use(cors({
  credentials: true,
  // origin: 'https://yelnikov-andrii.github.io/pizza2'
  origin:
    process.env.NODE_ENV === "production"
      ? 'https://yelnikov-andrii.github.io/pizza2'
      : "http://localhost:3000",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.use(callsRouter);
app.use(feedabackRouter);
app.use(ordersRouter);
app.use(authRouter);
app.use(typeRouter);
app.use(productRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));