import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validateClass = async (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingClass });
  }
  if (typeof classe !== 'string') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.classIsNotAString });
  }
  if (classe.length < 3) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidClassLength });
  }
  next();
};

export default validateClass;
