import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validateLevel = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level < 1) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidLevel });
  }
  if (!level) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingLevel });
  }
  if (typeof level !== 'number') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.levelIsNotANumber });
  }
  next();
};

export default validateLevel;
