import { SpecificationsRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecification.controller';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRespository = new SpecificationsRepository();
const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationsRespository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationController };
