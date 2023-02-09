import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { IProduct } from '../interfaces/index';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async insertNewProduct(product: IProduct): Promise<IProduct> {
    const products = await this.model.insertNewProduct(product);
    return products;
  }

  public async allProducts(): Promise<IProduct> {
    const allProducts = await this.model.getAllProducts();
    return allProducts;
  }
}
