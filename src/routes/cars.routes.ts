import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateCarController } from '../modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableCarsController } from '../modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { UploadCarImageController } from '../modules/cars/useCases/uploadImage/UploadCarImageController';

const carsRouter = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImageController();

const uploadImageCar = multer(uploadConfig.upload('./tmp/cars'));

carsRouter.post(
  '/',
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle
);

carsRouter.get('/available', listAvailableCarsController.handle);

carsRouter.post(
  '/specifications/:id',
  ensureAuthenticate,
  ensureAdmin,
  createCarSpecificationController.handle
);

carsRouter.post(
  '/images/:id',
  ensureAuthenticate,
  ensureAdmin,
  uploadImageCar.array('images'),
  uploadCarImagesController.handle
);

export { carsRouter };
