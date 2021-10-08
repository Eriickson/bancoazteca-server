import { Request, Response } from 'express';
import { ProductRepository } from '../repositories';
import { Product } from '../types';

const repository: ProductRepository = new ProductRepository();

export class ProductController {
  async getProduct() {}
  async getProducts(_: Request, res: Response) {
    const productsFound = await repository.getProducts();
    res.json(productsFound);
  }
  async createProduct(req: Request, res: Response) {
    const {
      sku,
      name,
      description,
      price,
      size,
      material,
      color,
      typeGarment,
    } = req.body;

    try {
      const productCreated = await repository.createProduct({
        sku,
        name,
        description,
        price,
        size,
        material,
        color,
        typeGarment,
      });

      res.json(productCreated);
    } catch (err: any) {
      return new Error(err.message);
    }
  }
  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;

    const product: Product = req.body;

    const productUpdated = await repository.updateProduct(id, product);

    res.json(productUpdated);
  }
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    await repository.deleteProduct(id);

    res.json({ msg: 'Producto eliminado' });
  }
}
