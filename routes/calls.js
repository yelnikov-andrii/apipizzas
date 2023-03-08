import express from 'express';
import { callsController } from '../controllers/calls.js';

export const callsRouter = express.Router();


callsRouter.post('/calls', callsController.add);
