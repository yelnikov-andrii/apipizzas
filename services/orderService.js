import { Order } from "../models/index.js";

async function add(order) {
  await Order.create(order);
}

async function getOrders(email) {
  const orders = await Order.findAll({where: {
    email
  }});
  return orders;
}

async function getById(id) {
  const order = await Order.findOne({where: {
    id
  }})
  return order;
}

export const orderService = {
  add,
  getOrders,
  getById
}