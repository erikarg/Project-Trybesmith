import express from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = express.Router();

const productsController = new ProductsController();

productsRouter.post(
  '/',
  productsController.registerNewProduct,
);

productsRouter.get(
  '/',
  productsController.listAllProducts,
);

export default productsRouter;
