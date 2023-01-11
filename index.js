import express from 'express';
import cors from 'cors';
import path from 'path';
import { v4 as uuidv4, v4 } from 'uuid';
// import fileUpload from 'express-fileupload';
// import {fileURLToPath} from 'url';
import * as pizzaService from './services/pizzas.js';
import fs from 'fs';

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true} ));
// app.use(fileUpload());

// const filtePath = path.resolve('data', 'pizzas.json');

// function read() {
//     const data = fs.readFileSync(filtePath, 'utf-8');
  
//     return JSON.parse(data);
//   };

//   function write(pizzas) {
//       const data = JSON.stringify(pizzas, null, 2);
    
//       fs.writeFileSync(filtePath, data);
//     }

// export function createPizza(pizza) {
//   const pizzas = read();

//   pizzas.push(pizza);
//   write(pizzas);
// }

app.get('/pizzas', (req, res) => {
  const pizzas = pizzaService.getAll();
  res.send(pizzas);
});

app.get('/pizzas/:pizzaId', (req, res) => {
  const { pizzaId } = req.params;
  const foundPizza = pizzaService.getOne(pizzaId);
  if (!foundPizza) {
    res.sendStatus(404);
    return;
  }
  res.send(foundPizza);
});

app.post('/pizzas', (req, res) => {
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

  pizzaService.create(newPizza)

  res.statusCode = 201;
  res.send(newPizza);
});

app.listen(PORT);