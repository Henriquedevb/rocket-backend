import { container } from 'tsyringe';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UsersRepository } from '../../modules/accounts/typeorm/repositories/UsersRepository';
import { ICarsImageRepository } from '../../modules/cars/repositories/ICarsImageRepository';
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { CarsImagesRepository } from '../../modules/cars/typeorm/repositories/CarsImageRepository';
import { CarsRepository } from '../../modules/cars/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '../../modules/cars/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/typeorm/repositories/SpecificationRepository';
import { IRentalsRepository } from '../../modules/rentals/repositories/IRentalsRepository';
import { RentalRepository } from '../../modules/rentals/typeorm/repositories/RentalRepository';
import './providers/';

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

container.registerSingleton<IRentalsRepository>(
  'RentalRepository',
  RentalRepository
);
