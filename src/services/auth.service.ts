import Joi from 'joi';
import * as jwt from 'jsonwebtoken';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { IUser } from '../interfaces/index';

export default class AuthService {
  loginModel = new LoginModel(connection);

  validateData = async (params: IUser): Promise<IUser> => {
    const schema = Joi.object<IUser>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = schema.validate(params);
    const userData = await this.loginModel.validateLogin(
      params.username,
      params.password,
    );
    if (result.error) throw result.error;
    console.log(result);
    return userData;
  };

  createToken = async (user: IUser): Promise<string> => {
    const userData = await this.loginModel.validateLogin(
      user.username,
      user.password,
    );
    const token = jwt.sign(
      {
        username: userData.username,
        password: userData.password,
      },
      process.env.JWT_SECRET as string,
    );
    return token;
  };
}
