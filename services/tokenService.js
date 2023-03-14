import { Token } from "../models/token.js";

async function save(userId, refreshToken) {
  const token = await Token.findOne({where: {
    userId
  }});

  if (!token) {
    await Token.create({userId, refreshToken})
  } else {
    token.refreshToken = refreshToken;
    await token.save();
  }
}

async function getByToken(refreshToken) {
  return Token.findOne({where: {
    refreshToken
  }})
}

async function remove(userId) {
  await Token.destroy({where: {
    userId
  }})
}

export const tokenService = {
  save,
  getByToken,
  remove
}