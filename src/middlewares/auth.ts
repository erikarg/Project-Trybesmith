import { Pool } from 'mysql2/promise';
// import * as jwt from 'jsonwebtoken';
// import StatusCode from '../helpers/statusCode';
// import insertNewUser from '../services/users.service';
// import User from '../interfaces/users.interface';

// const secret = process.env.JWT_SECRET || 'bngu7reg7ew7fhewuifbsui';

class Authorization {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
}

export default Authorization;