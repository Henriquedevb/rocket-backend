import { Router } from 'express';
import { CreateRentalController } from '../modules/rentals/useCase/createRental/createRentalController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { DevolutionRentalController } from '../modules/rentals/useCase/devolutionRental/DevolutionRentalController';
import { ListRentalsByUserController } from '../modules/rentals/useCase/listRentalsByUser/test/ListRentalsByUserController';
const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post('/', ensureAuthenticate, createRentalController.handle);
rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticate,
  devolutionRentalController.handle
);

rentalRoutes.get(
  '/user',
  ensureAuthenticate,
  listRentalsByUserController.handle
);

export { rentalRoutes };
