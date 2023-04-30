import { feedbackService } from "../services/feedbackService.js";

async function add(req, res) {
  const { name, number, email, message } = req.body;
  console.log(req.body, 'feedback')
  await feedbackService.add({ name, number, email, message });
  res.sendStatus(201);

};

export const feedbackController = {
  add,
}