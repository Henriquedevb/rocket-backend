import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecification.controller';

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
