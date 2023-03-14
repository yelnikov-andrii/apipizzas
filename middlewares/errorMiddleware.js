import { ApiError } from "../exceptions/ApiError.js"

export const errorMiddleware = (error, req, res, next) => {
  console.log(error, 'error middleware')
  if (error instanceof ApiError) {
    const {status, message, errors} = error;
    res.status(status).send({message, errors})
  }

  res.status(500).send({message: 'unexpected error'})
}