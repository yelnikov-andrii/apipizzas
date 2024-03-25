import { Order } from "../models/index.js";
import { orderService } from "../services/orderService.js";

async function add(req, res) {
  const { name, phone, address, products, email } = req.body;
  await orderService.add({ name, phone, address, products, email, status: 'в обробці' });
  res.sendStatus(201);
};

async function getOrders(req, res) {
  const { email, id, role } = req.query;

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
  console.log(role)

  if (role === 'admin') {
    const orders = await Order.findAll();
    res.send(orders);
  }

  if (!id && !email && role !== 'admin') {
    res.sendStatus(400);
  }

}

async function setOrderFinished(req, res) {
  const { isFinished } = req.body;
  const { orderId } = req.params;
  try {
    const foundOrder = await Order.findOne({ where: { id: orderId } });
    if (!foundOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    foundOrder.status = isFinished;
    await foundOrder.save();
    return res.status(200).json({ message: "Order status updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const orderController = {
  add,
  getOrders,
  setOrderFinished
}