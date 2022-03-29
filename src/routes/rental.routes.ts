import { Router } from 'express';
import { CreateRentalController } from '../modules/rentals/useCase/createRental/createRentalController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { DevolutionRentalController } from '../modules/rentals/useCase/devolutionRental/DevolutionRentalController';
const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalRoutes.post('/', ensureAuthenticate, createRentalController.handle);
rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticate,
  devolutionRentalController.handle
);

export { rentalRoutes };
