import express from 'express';
import UsersController from '../controllers/users.controller';

const usersRoute = express.Router();

const usersController = new UsersController();

usersRoute.post(
  '/',
  usersController.registerNewUser,
);

export default usersRoute;
