import express from 'express';
import { feedbackController } from '../controllers/feedback.js';

export const feedabackRouter = express.Router();


feedabackRouter.post('/feedback', feedbackController.add);