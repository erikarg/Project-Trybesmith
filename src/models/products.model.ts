import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/index';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertNewProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAllProducts(): Promise<IProduct> {
    const list = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [rows] = list;
    return rows as IProduct;
  }

  async update(id: number, orderId: number): Promise<void> {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );
  }
}
