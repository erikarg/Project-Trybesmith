import { Request, Response, NextFunction } from 'express';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

const validateProductsIds = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res
      .status(StatusCode.BadRequest)
      .json({ message: ErrorMessage.missingProductsIds });
  }
  if (!Array.isArray(productsIds)) {
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