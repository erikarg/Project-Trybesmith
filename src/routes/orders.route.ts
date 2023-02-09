import express from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRoute = express.Router();

const ordersController = new OrdersController();

ordersRoute.get(
  '/',
  ordersController.listAllOrders,
);

export default ordersRoute;

// Commit