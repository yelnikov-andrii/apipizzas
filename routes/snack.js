import express from 'express';
import * as snackController from '../controllers/snacks.js';
export const router = express.Router();


router.get('/snacks', snackController.getAll);
router.get('/snacks/:snackId', snackController.getOne);
router.post('/snacks', snackController.create);