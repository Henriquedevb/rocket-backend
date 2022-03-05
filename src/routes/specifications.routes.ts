import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecifications';

const specificationRouter = Router();

specificationRouter.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificationRouter };
