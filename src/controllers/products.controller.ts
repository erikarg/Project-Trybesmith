import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import ProductsService from '../services/products.service';
// import InputValidator from '../middlewares/inputValidator';
import { IProduct } from '../interfaces';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public registerNewProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { name, amount }: IProduct = req.body;
      // const nameValidator = await this.inputValidator.validateName(name);
      // const amountValidator = await this.inputValidator.validateAmount(amount);
      // if (nameValidator) nameValidator;
      // if (amountValidator) amountValidator;
      const product: IProduct = await this.productsService.insertNewProduct({
        name,
        amount,
      });
      res.status(statusCode.Created).json(product);
    } catch (error) {
      next(error);
    }
  };

  public listAllProducts = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const products = await this.productsService.allProducts();
      res.status(statusCode.OK).json(products);
    } catch (error) {
      next(error);
    }
  };
}
