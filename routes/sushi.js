import express from 'express';
import * as sushiController from '../controllers/sushi.js';
export const router = express.Router();


router.get('/sushi', sushiController.getAll);
router.get('/sushi/:sushiId', sushiController.getOne);
router.post('/sushi', sushiController.create);