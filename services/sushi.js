import path from 'path';
import fs from 'fs/promises';

const filtePath = path.resolve('data', 'sushi.json');

async function read() {
    const data = await fs.readFile(filtePath, 'utf-8');
  
    return JSON.parse(data);
  };

  async function write(arr) {
      const data = JSON.stringify(arr, null, 2);
    
      await fs.writeFile(filtePath, data);
    }

export async function getAll() {
  const sushi = await read();
  return sushi;
}

export async function getOne(sushiId) {
  const sushi = await read();
  const foundSushi = sushi.find(el => el.id === sushiId);
  return foundSushi;
}

export async function create(product) {
  const sushi = await read();

  sushi.push(product);
  await write(sushi);
}