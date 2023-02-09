import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import UsersService from '../services/users.service';
import { IUser } from '../interfaces';

const secret = process.env.JWT_SECRET || 'bngu7reg7ew7fhewuifbsui';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public registerNewUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { username, classe, level, password }: IUser = req.body;
      const result = await this.usersService.insertNewUser({
        username,
        classe,
        level,
        password,
      });
      const tokenData = jwt.sign({ result }, secret);
      res.status(statusCode.Created).json({ token: tokenData });
    } catch (err) {
      next(err);
    }
  };
}
