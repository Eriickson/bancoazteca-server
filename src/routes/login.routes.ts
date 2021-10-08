import express from 'express';
import { constrollers } from '../controllers';
import { body } from 'express-validator';

export class LoginRoutes {
  public route() {
    const router = express.Router();
    router.post('/register', constrollers.login.register);

    return router;
  }
}
