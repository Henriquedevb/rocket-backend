import { Router } from 'express';
import multer from 'multer';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
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
categoriesRouter.post(
  '/',
  ensureAuthenticate,
  ensureAdmin,
  createCategoryController.handle
);
categoriesRouter.post(
  '/import',
  upload.single('file'),
  ensureAuthenticate,
  ensureAdmin,
  importCategoryController.handle
);

export { categoriesRouter };
