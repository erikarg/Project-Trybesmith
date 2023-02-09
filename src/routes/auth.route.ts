import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/authMiddleware';

const authRoute = Router();

const authController = new AuthController();

authRoute.use(authMiddleware);

authRoute.post('/', authController.userLogin);

export default authRoute;
