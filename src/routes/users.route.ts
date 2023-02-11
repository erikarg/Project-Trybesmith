import express from 'express';
import UsersController from '../controllers/users.controller';
import {
  authorization,
  validateUsername,
  validatePassword,
} from '../middlewares/validateCredentials';
import {
  validateClass,
  validateLevel,
} from '../middlewares/validateProperties';

const usersRoute = express.Router();

const usersController = new UsersController();

usersRoute.use(authorization);

usersRoute.post(
  '/',
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
  usersController.registerNewUser,
);

export default usersRoute;
