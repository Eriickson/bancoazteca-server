require('dotenv').config({});
import express from 'express';
import cors from 'cors';
import { envs, startMongoose } from './configs';
import { LoginRoutes } from './routes';
import { authenticateToken } from './middleware';

export class App {
  public app: express.Application;

  private port: number;

  private loginRoutes = new LoginRoutes().route();

  constructor() {
    this.app = express();
    this.port = envs.PORT;
    this.config();
    this.configRoutes();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    startMongoose(envs.URI_MONGODB);
  }

  private configRoutes() {
    this.app.use('/login', this.loginRoutes);
  }

  public listen() {
    this.app.listen(envs.PORT, () => {
      console.log(`Listening on http://localhost:${this.port}`);
    });
  }
}
