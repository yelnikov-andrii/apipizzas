import * as soupeService from '../services/soupes.js';

export const getAll = async (req, res) => {
  const soupes = await soupeService.getAll();
  if (req.query.count) {
    res.send(soupes.slice(0, req.query.count))
  } else {
    res.send(soupes);
  }
};

export const getOne = async (req, res) => {
  const { soupeId } = req.params;
  const foundSoupe = await soupeService.getOne(soupeId);
  if (!foundSoupe) {
    res.sendStatus(404);
    return;
  }
  res.send(foundSoupe);
};

export const create = async (req, res) => {
  const {name, components, price, weight, img, types} = req.body;
  const id = uuidv4();

  if (!name || !price || !img || !types || !components || !weight) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, price, weight, img, id, components, types};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await soupeService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
};