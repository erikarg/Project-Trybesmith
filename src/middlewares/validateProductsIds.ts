import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validateProductsIds = async (req: Request, res: Response, next: NextFunction):
Promise<void | Response> => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingProductsIds });
  }
  if (typeof productsIds !== 'object') {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidProductsIdsType });
  }
  if (productsIds.length === 0) {
    return res
      .status(StatusCode.UnprocessableEntity)
      .json({ message: ErrorMessage.invalidProductsIdsFormat });
  }
  next();
};

export default validateProductsIds;
