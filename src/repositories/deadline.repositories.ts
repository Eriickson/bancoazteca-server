import { Deadline } from '../types';
import { DeadlineModel } from '../models';
import arraySort from 'array-sort';

export class DeadlineRepository {
  async getDeadlines(): Promise<Deadline[]> {
    try {
      const productsFound = await DeadlineModel.find();
      return arraySort(productsFound, 'weeks');
    } catch (err) {
      const message = (err as Error).message;

      throw new Error(message);
    }
  }

  async createDeadline(product: Omit<Deadline, '_id'>): Promise<Deadline> {
    try {
      const newDeadline = new DeadlineModel(product);
      return newDeadline.save();
    } catch (err) {
      const message = (err as Error).message;
      throw new Error(message);
    }
  }

  async updateDeadline(id: string, product: Deadline): Promise<Deadline> {
    try {
      const response = await DeadlineModel.findByIdAndUpdate(id, product, {
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

  async deleteDeadline(id: string): Promise<boolean> {
    try {
      const response = await DeadlineModel.findByIdAndRemove(id);
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
