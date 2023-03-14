import { orderService } from "../services/orderService.js";

async function add(req, res) {
  const { name, phone, address, products, email } = req.body;
  await orderService.add({ name, phone, address, products, email });
  res.sendStatus(201);
};

async function getOrders(req, res) {
  const { email, id } = req.query;

  if (!email && id) {
    const order = await orderService.getById(id);
    res.send(order);
    return;
  }

  if (!id && email) {
    const orders = await orderService.getOrders(email);
    res.send(orders);
    return;
  }

  if (!id && !email) {
    res.sendStatus(400);
  }

}

export const orderController = {
  add,
  getOrders,
}