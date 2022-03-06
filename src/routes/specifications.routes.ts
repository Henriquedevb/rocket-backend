import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecification.controller';

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRouter.use(ensureAuthenticate);
specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
