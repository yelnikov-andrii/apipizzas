import path from 'path';
import fs from 'fs';

const filtePath = path.resolve('data', 'pizzas.json');

function read() {
    const data = fs.readFileSync(filtePath, 'utf-8');
  
    return JSON.parse(data);
  };

  function write(pizzas) {
      const data = JSON.stringify(pizzas, null, 2);
    
      fs.writeFileSync(filtePath, data);
    }

export function getAll() {
  const pizzas = read();
  return pizzas;
}

export function getOne(pizzaId) {
  const pizzas = read();
  const foundPizza = pizzas.find(pizza => pizza.id === pizzaId);
  return foundPizza;
}

export function create(pizza) {
  const pizzas = read();

  pizzas.push(pizza);
  write(pizzas);
}