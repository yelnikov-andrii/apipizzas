import { Order } from "../models/order.js";

async function add({name, phone, address, products}) {
  console.log(products, 'service')
  await Order.create({name, phone, address, products});
}

export const orderService = {
  add,
}