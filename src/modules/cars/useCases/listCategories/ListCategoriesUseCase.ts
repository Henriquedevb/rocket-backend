import { Category } from '../../entities/category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
