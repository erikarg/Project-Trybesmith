import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

export const validateAmount = async (req: Request, res: Response, next: NextFunction) => {
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

export const validateClass = async (req: Request, res: Response, next: NextFunction) => {
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

export const validateLevel = async (req: Request, res: Response, next: NextFunction) => {
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

export const validateName = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingName });
  }
  if (typeof name !== 'string') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.nameIsNotAString });
  }
  if (name.length < 3) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidNameLength });
  }
  next();
};
