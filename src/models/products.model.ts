import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertNewProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAllProducts(): Promise<Product> {
    const list = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = list;
    return rows as Product;
  }
}

export default ProductsModel;