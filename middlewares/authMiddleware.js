import { jwtService } from '../services/jwtService.js';
import { ApiError } from '../exceptions/ApiError.js';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    console.log('not authheader')
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtService.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
}