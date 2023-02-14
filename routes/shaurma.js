import express from 'express';
import * as shaurmaController from '../controllers/shaurma.js';
export const router = express.Router();


router.get('/shaurma', shaurmaController.getAll);
router.get('/shaurma/:shaurmaId', shaurmaController.getOne);
router.post('/shaurma', shaurmaController.create);