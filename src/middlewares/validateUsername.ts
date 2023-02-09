import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validateUsername = async (req: Request, res: Response, next: NextFunction) => {
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

export default validateUsername;
