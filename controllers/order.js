import { orderService } from "../services/orderService.js";

async function add(req, res) {
  const { name, phone, address, products } = req.body;
  console.log(products, 'controller')
  await orderService.add({ name, phone, address, products });
  res.sendStatus(201);

};

export const orderController = {
  add,
}