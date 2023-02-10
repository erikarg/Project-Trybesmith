import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IUser {
  id?: number;
  username: string;
  classe?: string;
  level?: number;
  password: string;
}

export interface IProduct {
  id?: number;
  name?: string;
  amount?: string;
}

export interface IOrder {
  id?: number;
  userId?: number;
  productsIds?: Array<number>;
}

export interface CustomRequest extends Request {
  user?: JwtPayload,
}