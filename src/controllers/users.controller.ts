import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import UsersService from '../services/users.service';

const secret = process.env.JWT_SECRET || 'bngu7reg7ew7fhewuifbsui';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public registerNewUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const user = { username, classe, level, password };
    const result = await this.usersService.insertNewUser(user);
    const tokenData = jwt.sign({ result }, secret);
    res.status(statusCode.Created).json({ token: tokenData }); 
  };

  // public listAllProducts = async (_req: Request, res: Response) => {
  //   const products = await this.UsersService.allProducts();
  //   res.status(statusCode.OK).json(products);
  // };
}

export default UsersController;