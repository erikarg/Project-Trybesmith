import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/users.interface';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async insertNewUser(user: User): Promise<User> {
    const userData = await this.model.insertNewUser(user);
    return userData;
  }

  // public async allUsers(): Promise<User> {
  //   const all = await this.model.getAllUsers();
  //   return all;
  // }
}

export default UsersService;