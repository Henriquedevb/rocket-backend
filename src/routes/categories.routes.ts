import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/cars/useCases/createCategories/CreateCategory.controller';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategory.controller';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.get('/', listCategoriesController.handle);
categoriesRouter.post('/', createCategoryController.handle);
categoriesRouter.post('/import', importCategoryController.handle);

export { categoriesRouter };
