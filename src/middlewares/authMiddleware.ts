import { Request, Response, NextFunction } from 'express';
import { User } from '../interfaces/index';
import statusCode from '../helpers/statusCode';
import errorMessage from '../helpers/errorMessage';

export default function authorization(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body as User;
  if (!username) {
    return res.status(statusCode.BadRequest).json({ message: errorMessage.missingUsername });
  }
  if (!password) {
    return res.status(statusCode.BadRequest).json({ message: errorMessage.missingPassword });
  }
  next();
}
