import express from 'express';
import * as pizzaController from '../controllers/pizzas.js';
export const router = express.Router();


router.get('/pizzas', pizzaController.getAll);
router.get('/pizzas/:pizzaId', pizzaController.getOne);
router.post('/pizzas', pizzaController.create);