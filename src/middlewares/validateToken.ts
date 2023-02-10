import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

dotenv.config();

const secret = process.env.JWT_SECRET || 'bngu7reg7ew7fhewuifbsui';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(StatusCode.Unauthorized)
      .json({ message: ErrorMessage.tokenNotFound });
  }
  const checkToken = jwt.verify(authorization, secret);
  console.log('Check token', checkToken);
  if (!checkToken || checkToken === undefined) {
    return res
      .status(StatusCode.Unauthorized)
      .json({ message: ErrorMessage.invalidToken });
  }
  next();
};

export default authToken;