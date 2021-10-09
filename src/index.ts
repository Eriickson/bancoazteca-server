import { App } from './app';
import dotenv from 'dotenv';

const app = new App();

(() => {
  dotenv.config();
  app.listen();
})();
