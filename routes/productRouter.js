import express from 'express';
import { productsController } from '../controllers/productsController.js';
import { catchError } from '../utils/catchError.js';

export const productRouter = express.Router();

productRouter.post('/products', catchError(productsController.create));
productRouter.get('/products', catchError(productsController.getProducts));
productRouter.get('/products/:id', catchError(productsController.getOne));