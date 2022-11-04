import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertNewUser(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, username, classe, level, password };
  }

  // public async getAllUsers(): Promise<User> {
  //   const list = await this.connection.execute('SELECT * FROM Trybesmith.Users');
  //   const [rows] = list;
  //   return rows as User;
  // }
}

export default UsersModel;