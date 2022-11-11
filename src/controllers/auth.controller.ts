import { Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import errorMessage from '../helpers/errorMessage';
import AuthService from '../services/auth.service';

export default class AuthController {
  constructor(private authService = new AuthService()) { }

  public userLogin = async (req: Request, res: Response) => {
    const result = await this.authService.validateData(req.body);
    if (result === undefined) {
      return res.status(statusCode.Unauthorized).json({ message: errorMessage.invalidUsername });
    }
    const token = await this.authService.createToken(result);
    res.status(statusCode.OK).json({ token }); 
  };
}