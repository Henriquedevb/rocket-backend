import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateCarController } from '../modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecification.controller';
import { ListAvailableCarsController } from '../modules/cars/useCases/listAvailableCars/ListAvailableCarsController';

const carsRouter = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRouter.post(
  '/',
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);

carsRouter.get('/available', listAvailableCarsController.handle);

carsRouter.post(
  '/specifications/:id',
  ensureAuthenticate,
  ensureAdmin,
  createCarSpecificationController.handle
);

export { carsRouter };
