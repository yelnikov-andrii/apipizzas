import express from 'express';
import cors from 'cors';
import { v4 as uuidv4, v4 } from 'uuid';
import * as pizzaService from './services/pizzas.js';

import pkg from 'pg';
const { Client } = pkg;
const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'kozak1488'
})
await client.connect()

const result = await client.query(`
  SELECT * from todos
`);

console.log(result.rows)

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true} ));

app.get('/todos', async (req, res) => {
  const todos = await client.query(`
  SELECT * from todos
`);
res.send(todos.rows)
})

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