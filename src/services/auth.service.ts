import Joi from 'joi';
import * as jwt from 'jsonwebtoken';
import connection from '../database/models/connection';
import LoginModel from '../database/models/login.model';
import { User } from '../interfaces/index';

export default class AuthService {
  loginModel = new LoginModel(connection);

  validateData = async (params: User): Promise<User> => {
    const schema = Joi.object<User>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = schema.validate(params);
    const userData = await this.loginModel.validateLogin(params.username, params.password);
    if (result.error) throw result.error;
    return userData;
  };

  createToken = async (user: User) => {
    const userData = await this.loginModel.validateLogin(user.username, user.password);
    const token = jwt.sign({ 
      username: userData.username,
      password: userData.password,
    }, process.env.JWT_SECRET as string);
    return token;
  };
}