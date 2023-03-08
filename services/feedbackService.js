import { Feedback } from "../models/feedback.js";

async function add({name, number, email, message}) {
  await Feedback.create({name, number, email, message});
}

export const feedbackService = {
  add,
}