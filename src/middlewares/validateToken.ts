import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import StatusCode from '../helpers/statusCode';
import ErrorMessage from '../helpers/errorMessage';

dotenv.config();

const secret = process.env.JWT_SECRET || 'bngu7reg7ew7fhewuifbsui';

const authToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(StatusCode.Unauthorized)
      .json({ message: ErrorMessage.tokenNotFound });
  }
  try {
    const checkToken = jwt.verify(authorization as string, secret as string);
    req.body.user = checkToken;
    next();
  } catch (error) {
    return res.status(StatusCode.Unauthorized).json({ message: ErrorMessage.invalidToken });
  }
};

export default authToken;