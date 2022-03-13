import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateCarController } from '../modules/cars/useCases/createCar/CreateCarController';

const carsRouter = Router();

const createCarController = new CreateCarController();

carsRouter.post(
  '/',
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);

export { carsRouter };
