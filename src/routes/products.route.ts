import express from 'express';
import ProductsController from '../controllers/products.controller';

const productsRoute = express.Router();

const productsController = new ProductsController();

productsRoute.post(
  '/',
  productsController.registerNewProduct,
);

productsRoute.get(
  '/',
  productsController.listAllProducts,
);

export default productsRoute;
