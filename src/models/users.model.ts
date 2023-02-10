import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/index';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertNewUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    console.log('AAAAAAA', insertId);
    return { id: insertId, username, classe, level, password };
  }
}
