import express from 'express';
import cors from 'cors';
import path from 'path';
import { v4 as uuidv4, v4 } from 'uuid';
import * as pizzaService from './services/pizzas.js';
import fs from 'fs';

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true} ));

app.get('/pizzas', async (req, res) => {
  const pizzas = await pizzaService.getAll();
  res.send(pizzas);
});

app.get('/pizzas/:pizzaId', async (req, res) => {
  const { pizzaId } = req.params;
  const foundPizza = await pizzaService.getOne(pizzaId);
  if (!foundPizza) {
    res.sendStatus(404);
    return;
  }
  res.send(foundPizza);
});

app.post('/pizzas', async (req, res) => {
  const {name, components, prices, sizes, souses, types, dough, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !prices || !sizes || !souses || !types || ! dough || !img) {
    res.sendStatus(404);
    return;
  }

  const newPizza = {name, components, prices, sizes, souses, types, img, dough, id};

  if (!newPizza) {
    res.sendStatus(422);
    return;
  }

  await pizzaService.create(newPizza)

  res.statusCode = 201;
  res.send(newPizza);
});

app.listen(PORT);