import { Request, Response } from 'express';
import statusCode from '../helpers/statusCode';
import LoginService from '../services/login.service';
import { createToken } from '../utils/manageToken';
import ErrorMessage from '../helpers/errorMessage';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public userLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const result = await this.loginService.validateData({ username, password });
    if (result) {
      const token = createToken(result.id);
      res.status(statusCode.OK).json({ token });
    } else {
      return res
        .status(statusCode.Unauthorized)
        .json({ message: ErrorMessage.invalidPassword });
    }
  };
}
