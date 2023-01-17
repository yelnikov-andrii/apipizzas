import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'salads.json');

export async function getAll() {
  const salads = await functions.read(filtePath)
  return salads;
};

export async function getOne(saladId) {
  const salads = await functions.read(filtePath);
  const foundSalad = salads.find(salad => salad.id === saladId);
  return foundSalad;
};

export async function create(salad) {
  const salads = await functions.read(filtePath);
  salads.push(salad);
  await functions.write(salads, filtePath);
};