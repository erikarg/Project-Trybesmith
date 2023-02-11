import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/index';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body as IUser;
  if (!username) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingUsername });
  }
  if (!password) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingPassword });
  }
  next();
};

export const validateUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.body;
  if (typeof username !== 'string') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidUsernameType });
  }
  if (username.length < 3) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidUsernameLength });
  }
  next();
};

export const validatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password } = req.body;
  if (typeof password !== 'string') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidPasswordType });
  }
  if (password.length < 8) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidPasswordLength });
  }
  next();
};
