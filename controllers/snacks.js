import * as snackService from '../services/snacks.js';

export const getAll = async (req, res) => {
  const snacks = await snackService.getAll();
  if (req.query.count) {
    res.send(snacks.slice(0, req.query.count))
  } else {
    res.send(snacks);
  }
};

export const getOne = async (req, res) => {
  const { snackId } = req.params;
  const foundSnack = await snackService.getOne(snackId);
  if (!foundSnack) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSnack);
};

export const create = async (req, res) => {
  const {name, components, price, weight, img, count, types} = req.body;
  const id = uuidv4();

  if (!name || !price || !img || !types) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, price, weight, img, id, components, count, types};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await snackService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
};