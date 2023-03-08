import express from 'express';
import { orderController } from '../controllers/order.js';

export const ordersRouter = express.Router();


ordersRouter.post('/orders', orderController.add);