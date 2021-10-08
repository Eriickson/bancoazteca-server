import { Request, Response } from 'express';
import { DeadlineRepository } from '../repositories';
import { Deadline } from '../types';

const repository: DeadlineRepository = new DeadlineRepository();

export class DeadlineController {
  async getDeadline() {}
  async getDeadlines(_: Request, res: Response) {
    const deadlinesFound = await repository.getDeadlines();
    res.json(deadlinesFound);
  }
  async createDeadline(req: Request, res: Response) {
    const { weeks, punctualRate, normalRate } = req.body;

    try {
      const deadlineCreated = await repository.createDeadline({
        weeks,
        punctualRate,
        normalRate,
      });
      res.json(deadlineCreated);
    } catch (err: any) {
      return new Error(err.message);
    }
  }
  async updateDeadline(req: Request, res: Response) {
    const { id } = req.params;

    const deadline: Deadline = req.body;

    const deadlineUpdated = await repository.updateDeadline(id, deadline);

    res.json(deadlineUpdated);
  }
  async deleteDeadline(req: Request, res: Response) {
    const { id } = req.params;
    await repository.deleteDeadline(id);

    res.json({ msg: 'Deadlineo eliminado' });
  }
}
