import { Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public listAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.allOrders();
    res.status(statusCode.OK).json(orders);
  };
}