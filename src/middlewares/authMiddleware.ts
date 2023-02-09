import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/index';
import statusCode from '../helpers/statusCode';
import errorMessage from '../helpers/errorMessage';

export default function authorization(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as IUser;
  if (!username) {
    return res
      .status(statusCode.BadRequest)
      .json({ message: errorMessage.missingUsername });
  }
  if (!password) {
    return res
      .status(statusCode.BadRequest)
      .json({ message: errorMessage.missingPassword });
  }
  next();
}
