import jwt from "jsonwebtoken";

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET)
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET)
}

function validateRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  }

  catch(e)  {
    return null;
  }
}

function validateAccessToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  }

  catch(e)  {
    return null;
  }
}

export const jwtService = {
  generateAccessToken,
  validateAccessToken,
  generateRefreshToken,
  validateRefreshToken
}