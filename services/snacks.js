import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'snacks.json');

export async function getAll() {
  const snacks = await functions.read(filtePath)
  return snacks;
};

export async function getOne(snackId) {
  const snacks = await functions.read(filtePath);
  const foundSnack = snacks.find(snack => snack.id === snackId);
  return foundSnack;
};

export async function create(snack) {
  const snacks = await functions.read(filtePath);
  snacks.push(snack);
  await functions.write(snacks, filtePath);
};