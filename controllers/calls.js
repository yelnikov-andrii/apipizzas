import { callService } from "../services/callService.js";

async function add(req, res) {
  const { name, number } = req.body;
  await callService.add({name, number});
  res.sendStatus(201);

};

export const callsController = {
  add,
}