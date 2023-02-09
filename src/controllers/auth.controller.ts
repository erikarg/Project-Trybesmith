import { NextFunction, Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import AuthService from '../services/auth.service';
import ErrorMessage from '../helpers/errorMessage';

export default class AuthController {
  constructor(private authService = new AuthService()) {}

  public userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.authService.validateData(req.body);
      if (result === undefined) {
        res
          .status(statusCode.Unauthorized)
          .json({ message: ErrorMessage.invalidUsername });
      }
      const token = await this.authService.createToken(result);
      res.status(statusCode.OK).json({ token });
    } catch (err) {
      next(err);
    }
  };
}
