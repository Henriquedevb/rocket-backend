import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecification.controller';

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRouter.post(
  '/',
  ensureAuthenticate,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRouter };
