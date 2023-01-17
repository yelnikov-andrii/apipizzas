import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import * as pizzaService from './services/pizzas.js';
import * as sushiService from './services/sushi.js';
import * as shaurmaService from './services/shaurma.js';
import * as saladService from './services/salads.js';
import * as mangalService from './services/mangal.js';
import * as snackService from './services/snacks.js';
import * as soupeService from './services/soupes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.get('/soupes', async (req, res) => {
  const soupes = await soupeService.getAll();
  if (req.query.count) {
    res.send(soupes.slice(0, req.query.count))
  } else {
    res.send(soupes);
  }
});

app.get('/soupes/:soupeId', async (req, res) => {
  const { soupeId } = req.params;
  const foundSoupe = await soupeService.getOne(soupeId);
  if (!foundSoupe) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSoupe);
});

app.post('/soupes', async (req, res) => {
  const {name, components, price, weight, img, types} = req.body;
  const id = uuidv4();

  if (!name || !price || !img || !types || !components || !weight) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, price, weight, img, id, components, types};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await soupeService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
});

app.get('/snacks', async (req, res) => {
  const snacks = await snackService.getAll();
  if (req.query.count) {
    res.send(snacks.slice(0, req.query.count))
  } else {
    res.send(snacks);
  }
});

app.get('/snacks/:snackId', async (req, res) => {
  const { snackId } = req.params;
  const foundSnack = await snackService.getOne(snackId);
  if (!foundSnack) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSnack);
});

app.post('/snacks', async (req, res) => {
  const {name, components, price, weight, img, count, types} = req.body;
  const id = uuidv4();

  if (!name || !price || !img || !types) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, price, weight, img, id, components, count, types};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await snackService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
});

app.get('/mangal', async (req, res) => {
  const mangal = await mangalService.getAll();
  if (req.query.count) {
    res.send(mangal.slice(0, req.query.count))
  } else {
    res.send(mangal);
  }
});

app.get('/mangal/:mangalId', async (req, res) => {
  const { mangalId } = req.params;
  const foundMangal = await mangalService.getOne(mangalId);
  if (!foundMangal) {
    res.sendStatus(404);
    return;
  }
  res.send(foundMangal);
});

app.post('/mangal', async (req, res) => {
  const {name, components, price, weight, img} = req.body;
  const id = uuidv4();

  if (!name || !price || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, price, weight, img, id, components};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await mangalService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
});

app.get('/salads', async (req, res) => {
  const salads = await saladService.getAll();
  if (req.query.count) {
    res.send(salads.slice(0, req.query.count))
  } else {
    res.send(salads);
  }
});

app.get('/salads/:saladId', async (req, res) => {
  const { saladId } = req.params;
  const foundSalad = await saladService.getOne(saladId);
  if (!foundSalad) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSalad);
});

app.post('/salads', async (req, res) => {
  const {name, components, price, weight, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !price || !weight || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, components, price, weight, img, id};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await saladService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
});

app.get('/shaurma', async (req, res) => {
  const shaurmas = await shaurmaService.getAll();
  if (req.query.count) {
    res.send(shaurmas.slice(0, req.query.count))
  } else {
    res.send(shaurmas);
  }
});

app.get('/shaurma/:shaurmaId', async (req, res) => {
  const { shaurmaId } = req.params;
  const foundShaurma = await shaurmaService.getOne(shaurmaId);
  if (!foundShaurma) {
    res.sendStatus(404);
    return;
  }
  res.send(foundShaurma);
});

app.post('/shaurma', async (req, res) => {
  const {name, components, price, souses, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !price || !souses || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, components, price, souses, img, id};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await shaurmaService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
});

app.get('/sushi', async (req, res) => {
  const sushi = await sushiService.getAll();
  if (req.query.count) {
    res.send(sushi.slice(0, req.query.count))
  } else {
    res.send(sushi);
  }
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
  if (req.query.count) {
    res.send(pizzas.slice(0, req.query.count))
  } else {
    res.send(pizzas);
  }
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