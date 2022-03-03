import { Category } from '../model/category';

export interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findAll(): Category[];
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDto): void;
}

export { ICategoriesRepository };
