import path from 'path';
import fs from 'fs/promises';

const filtePath = path.resolve('data', 'pizzas.json');

async function read() {
    const data = await fs.readFile(filtePath, 'utf-8');
  
    return JSON.parse(data);
  };

  async function write(pizzas) {
      const data = JSON.stringify(pizzas, null, 2);
    
      await fs.writeFile(filtePath, data);
    }

export async function getAll() {
  const pizzas = await read();
  return pizzas;
}

export async function getOne(pizzaId) {
  const pizzas = await read();
  const foundPizza = pizzas.find(pizza => pizza.id === pizzaId);
  return foundPizza;
}

export async function create(pizza) {
  const pizzas = await read();

  pizzas.push(pizza);
  await write(pizzas);
}