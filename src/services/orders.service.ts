import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import { IOrder } from '../interfaces/index';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async allOrders(): Promise<IOrder> {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }
}
