import { Category } from '../entities/category';

export interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  create({ name, description }: ICreateCategoryDto): Promise<void>;
}

export { ICategoriesRepository };
