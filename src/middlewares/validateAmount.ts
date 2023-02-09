import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validateAmount = async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingAmount });
  }
  if (typeof amount !== 'string') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.amountIsNotAString });
  }
  if (amount.length < 3) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidAmountLength });
  }
  next();
};

export default validateAmount;
