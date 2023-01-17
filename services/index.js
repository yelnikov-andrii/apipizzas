import fs from 'fs/promises';

export async function read(filtePath) {
  const data = await fs.readFile(filtePath, 'utf-8');
  return JSON.parse(data);
  };

export async function write(pizzas, filtePath) {
  const data = JSON.stringify(pizzas, null, 2);
  await fs.writeFile(filtePath, data);
  };