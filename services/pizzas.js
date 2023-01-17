import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'pizzas.json');

export async function getAll() {
  const pizzas = await functions.read(filtePath)
  return pizzas;
};

export async function getOne(pizzaId) {
  const pizzas = await functions.read(filtePath);
  const foundPizza = pizzas.find(pizza => pizza.id === pizzaId);
  return foundPizza;
};

export async function create(pizza) {
  const pizzas = await functions.read(filtePath);
  pizzas.push(pizza);
  await functions.write(pizzas, filtePath);
};