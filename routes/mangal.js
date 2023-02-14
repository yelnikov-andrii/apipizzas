import express from 'express';
import * as mangalController from '../controllers/mangal.js';
export const router = express.Router();


router.get('/mangal', mangalController.getAll);
router.get('/mangal/:mangalId', mangalController.getOne);
router.post('/mangal', mangalController.create);