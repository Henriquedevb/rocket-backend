import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/typeorm/repositories/UsersRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/typeorm/repositories/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/typeorm/repositories/SpecificationRepository';
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository';
import { CarsRepository } from '../../modules/cars/typeorm/repositories/CarsRepository';
import { ICarsImageRepository } from '../../modules/cars/repositories/ICarsImageRepository';
import { CarsImagesRepository } from '../../modules/cars/typeorm/repositories/CarsImageRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImageRepository>(
  'CarsImagesRepository',
  CarsImagesRepository
);
