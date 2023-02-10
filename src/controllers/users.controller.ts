import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import UsersService from '../services/users.service';
import { IUser } from '../interfaces';
import { createToken } from '../utils/manageToken';

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
      const token = createToken(result.id);
      res.status(statusCode.Created).json({ token });
    } catch (err) {
      next(err);
    }
  };
}
