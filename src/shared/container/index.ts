import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/typeorm/repositories/UsersRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/typeorm/repositories/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/typeorm/repositories/SpecificationRepository';

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
