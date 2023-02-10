import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import OrdersService from '../services/orders.service';
import { decodeToken } from '../utils/manageToken';

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
    req: Request,
    res: Response,
  ) => {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    const { id } = decodeToken(authorization as string);
    const result = await this.ordersService.createOrder(id as number, productsIds);
    res.status(statusCode.Created).json(result);
  };
}