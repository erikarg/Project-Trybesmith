import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validatePassword = async (req: Request, res: Response, next: NextFunction) => {
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

export default validatePassword;
