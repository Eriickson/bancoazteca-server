require('dotenv').config({});
import express from 'express';
import cors from 'cors';
import { envs, startMongoose } from './configs';
import { DeadlineRoutes, ProductRoutes } from './routes';

export class App {
  public app: express.Application;

  private port: number;

  private products = new ProductRoutes();
  private deadlines = new DeadlineRoutes();

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
    this.app.get('/', (req, res) => res.send('Recibido'));
    this.app.use('/product', this.products.route());
    this.app.use('/deadline', this.deadlines.route());
  }

  public listen() {
    this.app.listen(envs.PORT, () => {
      console.log(`Listening on http://localhost:${this.port}`);
    });
  }
}
