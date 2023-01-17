import path from 'path';
import * as functions from './index.js';

const filtePath = path.resolve('data', 'mangal.json');

export async function getAll() {
  const mangal = await functions.read(filtePath)
  return mangal;
};

export async function getOne(mangalId) {
  const mangal = await functions.read(filtePath);
  const foundMangal = mangal.find(mang => mang.id === mangalId);
  return foundMangal;
};

export async function create(mangalItem) {
  const mangal = await functions.read(filtePath);
  mangal.push(mangalItem);
  await functions.write(mangal, filtePath);
};