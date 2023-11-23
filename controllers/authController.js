import { userService } from "../services/userService.js";
import { User } from "../models/index.js";
import { jwtService } from "../services/jwtService.js";
import { ApiError } from "../exceptions/ApiError.js";
import { tokenService } from "../services/tokenService.js";
import bcrypt from 'bcrypt';

function validateEmail(str) {
  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (regexEmail.test(str)) {
    return ''
} else {
    return 'Email is not valid'
}
}  

function validatePassword(str) {
  if (!str) {
    return 'Password can not be empty'
  }
  if (str.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return ''
}

async function register(req, res) {
  const { email, password } = req.body;

  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  if (!email || !password) {
    throw ApiError.BadRequest('Validation error', {email: emailError, password: passwordError})
  }

  await userService.registerUser({email, password});
  res.send({message: 'OK'});
};

async function login(req, res) {
  const { email, password } = req.body;
  console.log(email);
  const user = await userService.getByEmail(email)
  if (!user) {
    throw ApiError.BadRequest('User with this email does not exist', {email: 'User with this email does not exist'})
  }

  if (user.activationToken) {
    throw ApiError.BadRequest('User was not activated');
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    throw ApiError.BadRequest('Wrong password', {password: 'Wrong password'});
  }

  await sendAuthentication(res, user);
}

async function activate(req, res) {
  const { activationToken } = req.params;

  const user = await User.findOne({where: {
    activationToken
  }});

  user.activationToken = null;
  await user.save();
  await sendAuthentication(res, user);
};

async function sendAuthentication(res, user) {
  const userData = userService.normalize(user);
  const accessToken = jwtService.generateAccessToken(userData);
  const refreshToken = jwtService.generateRefreshToken(userData);
  await tokenService.save(user.id, refreshToken);

  res.cookie('refreshToken', refreshToken, {
    maxAge: 1000 * 15,
    // httpOnly: true,
    // sameSite: 'none',
    // secure: true
  });

    res.send({user: userData, accessToken});
}

async function refresh(req, res) {
  const { refreshToken } = req.cookies;
  const userData = jwtService.validateRefreshToken(refreshToken);
  console.log(userData, refreshToken)
  if (!userData) {
    throw ApiError.Unauthorized();
  }

  const token = await tokenService.getByToken(refreshToken);

  if (!token) {
    throw ApiError.Unauthorized();
  }

  const user = await userService.getByEmail(userData.email);
  await sendAuthentication(res, user);
}

async function logout(req, res) {
  const { refreshToken } = req.cookies;
  console.log(refreshToken, 'logout');
  const userData = jwtService.validateRefreshToken(refreshToken);
  res.clearCookie('refreshToken');

  if (userData) {
    await tokenService.remove(userData.id);
    res.sendStatus(204);
    return;
  }

  res.sendStatus(205);
}

export const authController = {
  register,
  activate,
  login,
  refresh,
  logout
}