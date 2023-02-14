import * as mangalService from '../services/mangal.js';

export const getAll = async (req, res) => {
  const mangal = await mangalService.getAll();
  if (req.query.count) {
    res.send(mangal.slice(0, req.query.count))
  } else {
    res.send(mangal);
  }
};

export const getOne = async (req, res) => {
  const { mangalId } = req.params;
  const foundMangal = await mangalService.getOne(mangalId);
  if (!foundMangal) {
    res.sendStatus(404);
    return;
  }
  res.send(foundMangal);
};

export const create = async (req, res) => {
  const {name, components, price, weight, img} = req.body;
  const id = uuidv4();

  if (!name || !price || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, price, weight, img, id, components};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await mangalService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
};