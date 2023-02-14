import * as sushiService from '../services/sushi.js';

export const getAll = async (req, res) => {
  const sushi = await sushiService.getAll();
  if (req.query.count) {
    res.send(sushi.slice(0, req.query.count))
  } else {
    res.send(sushi);
  }
};

export const getOne = async (req, res) => {
  const { sushiId } = req.params;
  const foundSushi = await sushiService.getOne(sushiId);
  if (!foundSushi) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSushi);
};

export const create = async (req, res) => {
  const {name, components, price, types, weight, count, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !price || !weight || !count || !types || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, components, price, weight, count, types, img, id};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await sushiService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
};