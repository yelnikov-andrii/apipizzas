import { Type } from "../models/index.js";

async function createType({ name }) {
  await Type.create({ name });
}

export const typeService = {
  createType
}