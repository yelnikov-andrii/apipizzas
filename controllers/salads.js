import * as saladService from '../services/salads.js';

export const getAll = async (req, res) => {
  const salads = await saladService.getAll();
  if (req.query.count) {
    res.send(salads.slice(0, req.query.count))
  } else {
    res.send(salads);
  }
};

export const getOne = async (req, res) => {
  const { saladId } = req.params;
  const foundSalad = await saladService.getOne(saladId);
  if (!foundSalad) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSalad);
};

export const create = async (req, res) => {
  const {name, components, price, weight, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !price || !weight || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, components, price, weight, img, id};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await saladService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
};