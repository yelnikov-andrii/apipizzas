import { Call } from "../models/call.js";

async function add({name, number}) {
  await Call.create({name, number});
}

export const callService = {
  add,
}