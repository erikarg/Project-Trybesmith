import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import { IOrder } from '../interfaces/index';
import ProductsModel from '../models/products.model';

export default class OrdersService {
  public model: OrdersModel;

  public prodModel: ProductsModel;

  constructor() {
    this.model = new OrdersModel(connection);
    this.prodModel = new ProductsModel(connection);
  }

  public async allOrders(): Promise<IOrder> {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }

  async createOrder(userId: number, productsIds: number[]): Promise<IOrder> {
    const result = await this.model.create(userId);
    const insert = await Promise.all(
      productsIds.map(async (productId) => {
        await this.prodModel.update(productId, result);
      }),
    );
    await Promise.all(insert);
    return { userId, productsIds };
  }
}
