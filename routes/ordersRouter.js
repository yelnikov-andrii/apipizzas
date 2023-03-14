import express from 'express';
import { orderController } from '../controllers/orderController.js';
import { catchError } from '../utils/catchError.js';

export const ordersRouter = express.Router();


ordersRouter.post('/orders', catchError(orderController.add));
ordersRouter.get('/orders', catchError(orderController.getOrders));

