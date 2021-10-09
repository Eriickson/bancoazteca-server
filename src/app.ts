import express from 'express';
import cors from 'cors';
import { startMongoose } from './db';
import { DeadlineRoutes, ProductRoutes } from './routes';

export class App {
  public app: express.Application;

  private products = new ProductRoutes();
  private deadlines = new DeadlineRoutes();
  port = process.env.PORT || 9000;

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
    this.app.listen(this.port, () => {
      console.log(`Listening on http://localhost:${this.port}`);
    });
  }
}
