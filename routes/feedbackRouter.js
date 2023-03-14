import express from 'express';
import { feedbackController } from '../controllers/feedbackController.js';
import { catchError } from '../utils/catchError.js';

export const feedabackRouter = express.Router();


feedabackRouter.post('/feedback', catchError(feedbackController.add));