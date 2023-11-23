import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import { router } from './routes/index.js';

const app = express();
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: ['https://netify--pizza3.netlify.app/', 'http://localhost:3000']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use(router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));