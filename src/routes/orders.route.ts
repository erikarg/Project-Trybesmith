import express from 'express';
import OrdersController from '../controllers/orders.controller';
import validateProductsIds from '../middlewares/validateProductsIds';
import authToken from '../middlewares/validateToken';

const ordersRoute = express.Router();

const ordersController = new OrdersController();

ordersRoute.get('/', ordersController.listAllOrders);

ordersRoute.post(
  '/',
  authToken,
  validateProductsIds,
  ordersController.createOrder,
);

export default ordersRoute;
