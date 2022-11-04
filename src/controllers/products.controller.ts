import { Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public registerNewProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const product = { name, amount };
    const result = await this.productsService.insertNewProduct(product);
    res.status(statusCode.Created).json(result);
  };
}

export default ProductsController;