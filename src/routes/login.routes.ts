import express from 'express';
import { controllers } from '../controllers';

export class LoginRoutes {
  public route() {
    const router = express.Router();
    router.post('/register', controllers.login.register);

    return router;
  }
}
