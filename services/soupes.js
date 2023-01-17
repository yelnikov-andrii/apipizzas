import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'soupes.json');

export async function getAll() {
  const soupes = await functions.read(filtePath)
  return soupes;
};

export async function getOne(soupeId) {
  const soupes = await functions.read(filtePath);
  const foundSoupe = soupes.find(soupe => soupe.id === soupeId);
  return foundSoupe;
};

export async function create(soupe) {
  const soupes = await functions.read(filtePath);
  soupes.push(soupe);
  await functions.write(soupes, filtePath);
};