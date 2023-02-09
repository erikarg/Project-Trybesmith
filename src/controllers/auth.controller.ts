import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import AuthService from '../services/auth.service';

export default class AuthController {
  constructor(private authService = new AuthService()) {}

  public userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.authService.validateData(req.body);
      const token = await this.authService.createToken(result);
      res.status(statusCode.OK).json({ token });
    } catch (err) {
      next(err);
    }
  };
}
