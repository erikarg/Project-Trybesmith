import { Pool } from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import { User } from '../../interfaces/index';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async validateLogin(username: string, password: string): Promise<User> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';
    const [[user]] = await this.connection.execute<
    [] & RowDataPacket[]>(query, [username, password]);
    return user;
  }
}
