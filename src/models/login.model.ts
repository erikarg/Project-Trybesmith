import { Pool } from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/index';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async validateLogin(username: string, password: string): Promise<IUser> {
    const [[user]] = await this.connection.execute<[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return user;
  }
}
