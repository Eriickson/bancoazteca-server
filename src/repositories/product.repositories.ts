import { Product } from '../types';
import { ProductModel } from '../models';
import arraySort from 'array-sort';

export class ProductRepository {
  async getProducts(): Promise<Product[]> {
    try {
      const productsFound = await ProductModel.find();
      return arraySort(productsFound, 'name');
    } catch (err) {
      const message = (err as Error).message;
      throw new Error(message);
    }
  }

  async createProduct(product: Omit<Product, '_id'>): Promise<Product> {
    try {
      const newProduct = new ProductModel(product);
      return newProduct.save();
    } catch (err) {
      const message = (err as Error).message;
      throw new Error(message);
    }
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    try {
      const response = await ProductModel.findByIdAndUpdate(id, product, {
        new: true,
      });
      if (!response) {
        throw new Error('Error al actualizar');
      }

      return response;
    } catch (err) {
      const message = (err as Error).message;
      throw new Error(message);
    }
  }

  async deleteProduct(id: string): Promise<boolean> {
    try {
      const response = await ProductModel.findByIdAndRemove(id);
      if (!response) {
        return false;
      }

      return true;
    } catch (err) {
      const message = (err as Error).message;
      throw new Error(message);
    }
  }
}
