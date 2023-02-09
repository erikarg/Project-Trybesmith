import express from 'express';
import ProductsController from '../controllers/products.controller';
import validateAmount from '../middlewares/validateAmount';
import validateName from '../middlewares/validateName';

const productsRoute = express.Router();

const productsController = new ProductsController();

productsRoute.post(
  '/',
  validateAmount,
  validateName,
  productsController.registerNewProduct,
);

productsRoute.get(
  '/',
  productsController.listAllProducts,
);

export default productsRoute;
