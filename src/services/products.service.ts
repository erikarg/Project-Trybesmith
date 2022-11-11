import connection from '../database/models/connection';
import ProductsModel from '../database/models/products.model';
import { Product } from '../interfaces/index';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async insertNewProduct(product: Product): Promise<Product> {
    const products = await this.model.insertNewProduct(product);
    return products;
  }

  public async allProducts(): Promise<Product> {
    const allProducts = await this.model.getAllProducts();
    return allProducts;
  }
}