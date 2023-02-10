import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import OrdersService from '../services/orders.service';
import { CustomRequest } from '../interfaces';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public listAllOrders = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const orders = await this.ordersService.allOrders();
      res.status(statusCode.OK).json(orders);
    } catch (err) {
      next(err);
    }
  };

  public createOrder = async (
    req: CustomRequest,
    res: Response,
  ): Promise<void> => {
    const order = req.body;
    const newOrder = await this.ordersService.createOrder({
      userId: 1, productsIds: order.productsIds,
    });
    res.status(statusCode.Created).json(newOrder);
  };
}
