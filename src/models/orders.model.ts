import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public async findById(orderId: number): Promise<IOrder> {
    const [[command]] = await this.connection.execute<(
    IOrder & RowDataPacket)[]
    >(
      `SELECT o.userId, json_arrayagg(p.id) AS productsIds FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products as p
        ON o.id = p.orderId
      WHERE o.id = ?
      GROUP BY o.id`,
      [orderId],
      );
    return command;
  }

  create = async (userId: number) => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUE (?)',
      [userId],
    );
    return insertId as number;
  };
}
