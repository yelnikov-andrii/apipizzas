import { Product } from "../models/index.js";

async function create({ name, components, prices, sizes, souses, categories, dough, img, price, count, weight, typeId }) {
  await Product.create({ name, components, prices, sizes, souses, categories, dough, img, price, count, weight, typeId });
};

export const productService = {
  create
}