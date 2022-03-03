import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/controllers/create-specification.controller';

import { SpecificationsRepository } from '../modules/cars/repositories/specification-repository';
import { CreateSpecificationService } from '../modules/cars/services/create.specification-service';

const specificationRouter = Router();
const specificationRepository = new SpecificationsRepository();
const createSpecification = new CreateSpecificationService(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecification
);

specificationRouter.get('/', (req, res) => {
  return createSpecificationController.find(req, res);
});

specificationRouter.post('/', (req, res) => {
  return createSpecificationController.create(req, res);
});

export { specificationRouter };
