import express from 'express';
import { callsController } from '../controllers/callsController.js';
import { catchError } from '../utils/catchError.js';

export const callsRouter = express.Router();


callsRouter.post('/calls', catchError(callsController.add));
