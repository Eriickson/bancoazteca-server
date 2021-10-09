import express from 'express';
import cors from 'cors';
import { startMongoose } from './db';
import { DeadlineRoutes, ProductRoutes } from './routes';

export class App {
  public app: express.Application;

  private products = new ProductRoutes();
  private deadlines = new DeadlineRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.configRoutes();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    startMongoose(String(process.env.URI_MONGODB));
  }

  private configRoutes() {
    this.app.get('/', (req, res) => res.send('Recibido'));
    this.app.use('/product', this.products.route());
    this.app.use('/deadline', this.deadlines.route());
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(`Listening on http://localhost:${process.env.PORT}`);
    });
  }
}
