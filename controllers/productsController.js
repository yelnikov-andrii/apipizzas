import { Product } from '../models/product.js';
import { productService } from '../services/productService.js';

const create = async (req, res) => {
  const { name, components, prices, sizes, souses, categories, dough, img, price, count, weight, typeId } = req.body;

  await productService.create({ name, components, prices, sizes, souses, categories, dough, img, price, count, weight, typeId });

  res.statusCode = 201;
  res.send({ name, components, prices, sizes, souses, categories, dough, img, price, count, weight });
};

async function getProducts(req, res) {
  const { typeId, count } = req.query;
  const products = await Product.findAll({where: {
    typeId
}});

if (count) {
  res.send(products.slice(0, count));
} else {
  res.send(products);
}
}

async function getOne(req, res) {
  const { id } = req.params;
  const product = await Product.findOne({where: {
    id
  }});
  res.send(product);
}

export const productsController = {
  create,
  getProducts,
  getOne
}