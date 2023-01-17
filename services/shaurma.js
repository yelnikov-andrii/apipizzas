import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'shaurma.json');

export async function getAll() {
  const shaurmas = await functions.read(filtePath)
  return shaurmas;
};

export async function getOne(shaurmaId) {
  const shaurmas = await functions.read(filtePath);
  const foundShaurma = shaurmas.find(shaurma => shaurma.id === shaurmaId);
  return foundShaurma;
};

export async function create(shaurma) {
  const shaurmas = await functions.read(filtePath);
  shaurmas.push(shaurma);
  await functions.write(shaurmas, filtePath);
};