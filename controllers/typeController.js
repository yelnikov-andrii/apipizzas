import { typeService } from "../services/typeService.js";

async function createType(req, res) {
  const { name } = req.body;
  await typeService.createType({name});

  res.send({message: 'OK'});
};

export const typeController = {
  createType
}