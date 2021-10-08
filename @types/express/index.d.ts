import * as express from 'express';
import { User } from '../../src/entities/user';

declare global {
  namespace Express {
    interface Request {
      user: IUser;
      isAuth: boolean;
    }
  }
}
