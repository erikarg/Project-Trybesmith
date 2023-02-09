import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import UsersController from '../controllers/users.controller';
import validateUsername from '../middlewares/validateUsername';
import validateClass from '../middlewares/validateClass';
import validateLevel from '../middlewares/validateLevel';
import validatePassword from '../middlewares/validatePassword';

const usersRoute = express.Router();

const usersController = new UsersController();

usersRoute.use(authMiddleware);

usersRoute.post(
  '/',
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
  usersController.registerNewUser,
);

export default usersRoute;
