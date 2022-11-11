import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/index';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order> {
    const orders = await this.connection.execute(`SELECT t1.id, t1.userId, JSON_ARRAYAGG(t2.id)
    AS productsIds FROM Trybesmith.Orders AS t1 INNER JOIN Trybesmith.Products AS t2 
    ON t2.orderId = t1.id GROUP BY t1.id;`);
    const [rows] = orders;
    return rows as Order;
  }
}
