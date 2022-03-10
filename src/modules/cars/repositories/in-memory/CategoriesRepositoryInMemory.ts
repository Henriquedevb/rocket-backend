import { Category } from '../../typeorm/entities/category';
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];
  async list(): Promise<Category[]> {
    const gelAllCategories = this.categories;
    return gelAllCategories;
  }
  async findByName(name: string): Promise<Category> {
    const categoryByName = this.categories.find(
      (category) => category.name === name
    );
    return categoryByName;
  }

  async create({ name, description }: ICreateCategoryDto): Promise<void> {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
    });

    this.categories.push(newCategory);
  }
}

export { CategoriesRepositoryInMemory };
