import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/index.js";
import { emailService } from './emailService.js';
import { ApiError } from "../exceptions/ApiError.js";
import bcrypt from 'bcrypt';

async function registerUser({email, password}) {
  const activationToken = uuidv4();

  const existingUser = await getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('User with this email already exist', {email: 'Email is already taken' });
  }

  const hash = await bcrypt.hash(password, 10);

  await User.create({email, password: hash, activationToken});

  emailService.sendActivationLink(activationToken, email);
}

function normalize({ email, id, role }) {
  return { email, id, role };
}

async function getByEmail(email) {
  const user = await User.findOne({where: {
    email
  }});

  return user;
}

export const userService = {
  registerUser,
  normalize,
  getByEmail
}