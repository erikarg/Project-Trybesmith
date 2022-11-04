import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Product from '../interfaces/products.interface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async insertNewProduct(product: Product): Promise<Product> {
    const products = await this.model.insertNewProduct(product);
    return products;
  }
}

export default ProductsService;