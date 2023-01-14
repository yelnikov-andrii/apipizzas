import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import * as pizzaService from './services/pizzas.js';
import * as sushiService from './services/sushi.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.get('/sushi', async (req, res) => {
  const sushi = await sushiService.getAll();
  res.send(sushi)
});

app.get('/sushi/:sushiId', async (req, res) => {
  const { sushiId } = req.params;
  const foundSushi = await sushiService.getOne(sushiId);
  if (!foundSushi) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSushi);
});

app.post('/sushi', async (req, res) => {
  const {name, components, price, types, weight, count, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !price || !weight || !count || !types || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, components, price, weight, count, types, img, id};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await sushiService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
});

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