import express from 'express';
import { ProductController } from '../controllers/product.controllers';

export class ProductRoutes {
  controllers = new ProductController();
  public route(): express.Router {
    const router = express.Router();
    router.get('/', this.controllers.getProducts);
    router.post('/', this.controllers.createProduct);
    router.put('/:id', this.controllers.updateProduct);
    router.delete('/:id', this.controllers.deleteProduct);

    return router;
  }
}
