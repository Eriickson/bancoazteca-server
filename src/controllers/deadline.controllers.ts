import { Request, Response } from 'express';
import { DeadlineRepository } from '../repositories';
import { Deadline } from '../types';

const repository: DeadlineRepository = new DeadlineRepository();

export class DeadlineController {
  async getDeadlines(_: Request, res: Response): Promise<void> {
    const deadlinesFound = await repository.getDeadlines();
    res.json(deadlinesFound);
  }
  async createDeadline(req: Request, res: Response): Promise<void> {
    const { weeks, punctualRate, normalRate } = req.body;

    try {
      const deadlineCreated = await repository.createDeadline({
        weeks,
        punctualRate,
        normalRate,
      });
      res.json(deadlineCreated);
    } catch (err) {
      const message = (err as Error).message;
      throw new Error(message);
    }
  }
  async updateDeadline(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const deadline: Deadline = req.body;

    const deadlineUpdated = await repository.updateDeadline(id, deadline);

    res.json(deadlineUpdated);
  }
  async deleteDeadline(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await repository.deleteDeadline(id);

    res.json({ msg: 'Deadlineo eliminado' });
  }
}
