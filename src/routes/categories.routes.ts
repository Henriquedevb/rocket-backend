import { response, Router } from 'express';
import { CreateCategoryController } from '../modules/cars/controllers/create-category.controller';
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository';
import { CreateCategoryService } from '../modules/cars/services/create.category-service';
import { ImportCategoryController } from '../modules/cars/controllers/import-category.controller';

import multer from 'multer';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

const categoriesRepository = CategoriesRepository.getInstance();
const createCategory = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategory);
const importCategoryController = new ImportCategoryController(
  categoriesRepository
);

categoriesRouter.get('/', (req, res) => {
  return createCategoryController.find(req, res);
});

categoriesRouter.post('/', (req, res) => {
  return createCategoryController.create(req, res);
});

categoriesRouter.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.importCategory(req, res);
});

export { categoriesRouter };
