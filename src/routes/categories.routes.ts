import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/controllers/create-category.controller';
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository';
import { CreateCategoryService } from '../modules/cars/services/create.category-service';

const categoriesRouter = Router();
const categoriesRepository = CategoriesRepository.getInstance();
const createCategory = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategory);

categoriesRouter.get('/', (req, res) => {
  return createCategoryController.find(req, res);
});

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.create(req, res);
});

export { categoriesRouter };
