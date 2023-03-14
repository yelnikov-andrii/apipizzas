import { Type } from "../models/type.js";

async function createType({ name }) {
  await Type.create({ name });
}

export const typeService = {
  createType
}