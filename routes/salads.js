import express from 'express';
import * as saladController from '../controllers/salads.js';
export const router = express.Router();


router.get('/salads', saladController.getAll);
router.get('/salads/:saladId', saladController.getOne);
router.post('/salads', saladController.create);