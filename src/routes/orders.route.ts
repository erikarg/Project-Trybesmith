import express from 'express';
import OrdersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import validateProductsIds from '../middlewares/validateProductsIds';

const ordersRoute = express.Router();

const ordersController = new OrdersController();

ordersRoute.get(
  '/',
  ordersController.listAllOrders,
);

ordersRoute.post(
  '/',
  validateToken,
  validateProductsIds,
  ordersController.createOrder,
);

export default ordersRoute;
