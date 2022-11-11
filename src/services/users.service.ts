import connection from '../database/models/connection';
import UsersModel from '../database/models/users.model';
import { User } from '../interfaces/index';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async insertNewUser(user: User): Promise<User> {
    const userData = await this.model.insertNewUser(user);
    return userData;
  }
}