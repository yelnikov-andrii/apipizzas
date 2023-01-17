import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'sushi.json');

export async function getAll() {
  const sushi = await functions.read(filtePath);
  return sushi;
}

export async function getOne(sushiId) {
  const sushi = await functions.read(filtePath);
  const foundSushi = sushi.find(el => el.id === sushiId);
  return foundSushi;
}

export async function create(product) {
  const sushi = await functions.read(filtePath);

  sushi.push(product);
  await functions.write(sushi, filtePath);
}