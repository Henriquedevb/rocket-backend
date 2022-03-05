import { Category } from '../entities/category';

export interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDto): void;
}

export { ICategoriesRepository };
