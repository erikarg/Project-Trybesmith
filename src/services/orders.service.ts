import connection from '../database/models/connection';
import OrdersModel from '../database/models/orders.model';
import { Order } from '../interfaces/index';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async allOrders(): Promise<Order> {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }
}
