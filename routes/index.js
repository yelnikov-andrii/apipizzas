import express from 'express';
import { authRouter } from './authRouter.js';
import { callsRouter } from './callsRouter.js';
import { feedabackRouter } from './feedbackRouter.js';
import { ordersRouter } from './ordersRouter.js';
import { productRouter } from './productRouter.js';
import { typeRouter } from './typeRouter.js';


export const router = express.Router();

router.use(authRouter);
router.use(callsRouter);
router.use(feedabackRouter);
router.use(ordersRouter);
router.use(productRouter);
router.use(typeRouter);