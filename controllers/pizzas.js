import * as pizzaService from '../services/pizzas.js';

export const getAll = async(req, res) => {
  const pizzas = await pizzaService.getAll();
  if (req.query.count) {
    res.send(pizzas.slice(0, req.query.count))
  } else {
    res.send(pizzas);
  }
}

export const getOne = async (req, res) => {
  const { pizzaId } = req.params;
  const foundPizza = await pizzaService.getOne(pizzaId);
  if (!foundPizza) {
    res.sendStatus(404);
    return;
  }
  res.send(foundPizza);
};

export const create = async (req, res) => {
  const {name, components, prices, sizes, souses, types, dough, img} = req.body;
  const id = uuidv4();

  if (!name || !components || !prices || !sizes || !souses || !types || ! dough || !img) {
    res.sendStatus(404);
    return;
  }

  const newPizza = {name, components, prices, sizes, souses, types, img, dough, id};

  if (!newPizza) {
    res.sendStatus(422);
    return;
  }

  await pizzaService.create(newPizza)

  res.statusCode = 201;
  res.send(newPizza);
};