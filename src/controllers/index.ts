import { LoginController } from './login.controller';
import { ProductController } from './product.controllers';

export const controllers = {
  login: new LoginController(),
  product: new ProductController(),
};
