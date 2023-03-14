import express from 'express';
import { typeController } from '../controllers/typeController.js';
import { catchError } from '../utils/catchError.js';

export const typeRouter = express.Router();

typeRouter.post('/types', catchError(typeController.createType));
