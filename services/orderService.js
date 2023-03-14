import { Order } from "../models/order.js";

async function add({name, phone, address, products, email}) {
  await Order.create({name, phone, address, products, email});
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