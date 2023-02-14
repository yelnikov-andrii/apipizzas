import * as shaurmaService from '../services/shaurma.js';

export const getAll = async (req, res) => {
  const shaurmas = await shaurmaService.getAll();
  if (req.query.count) {
    res.send(shaurmas.slice(0, req.query.count))
  } else {
    res.send(shaurmas);
  }
};

export const getOne = async (req, res) => {
  const { shaurmaId } = req.params;
  const foundShaurma = await shaurmaService.getOne(shaurmaId);
  if (!foundShaurma) {
    res.sendStatus(404);
    return;
  }
  res.send(foundShaurma);
};

export const create = async (req, res) => {
  const {name, components, price, souses, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !price || !souses || !img) {
    res.sendStatus(404);
    return;
  }

  const newProduct = {name, components, price, souses, img, id};

  if (!newProduct) {
    res.sendStatus(422);
    return;
  }

  await shaurmaService.create(newProduct)

  res.statusCode = 201;
  res.send(newProduct);
};