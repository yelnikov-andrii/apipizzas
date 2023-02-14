import express from 'express';
import * as soupesController from '../controllers/soupes.js';
export const router = express.Router();


router.get('/soupes', soupesController.getAll);
router.get('/soupes/:soupeId', soupesController.getOne);
router.post('/soupes', soupesController.create);