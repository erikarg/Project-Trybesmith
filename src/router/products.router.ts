import express from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = express.Router();

const productsController = new ProductsController();

productsRouter.post(
  '/',
  productsController.registerNewProduct,
);

export default productsRouter;
