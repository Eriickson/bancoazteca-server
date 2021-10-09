import express from 'express';
import { DeadlineController } from '../controllers/deadline.controllers';

export class DeadlineRoutes {
  controllers = new DeadlineController();
  public route() {
    const router = express.Router();
    router.get('/', this.controllers.getDeadlines);
    // router.get('/:id', this.controllers.getDeadline);
    router.post('/', this.controllers.createDeadline);
    router.put('/:id', this.controllers.updateDeadline);
    router.delete('/:id', this.controllers.deleteDeadline);

    return router;
  }
}
