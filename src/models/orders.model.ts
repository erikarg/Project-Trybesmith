import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/index';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder> {
    const orders = await this.connection
      .execute(`SELECT t1.id, t1.userId, JSON_ARRAYAGG(t2.id)
    AS productsIds FROM Trybesmith.Orders AS t1 INNER JOIN Trybesmith.Products AS t2 
    ON t2.orderId = t1.id GROUP BY t1.id;`);
    const [rows] = orders;
    return rows as IOrder;
  }

  public async create(order: IOrder): Promise<IOrder> {
    const { userId, productsIds } = order;
    console.log('PRODUCTS', productsIds);
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    console.log('insert id', insertId);
    return { userId: insertId, ...order };
  }
}
