import { Category } from '../../typeorm/entities/category';
import { CategoriesRepository } from '../../typeorm/repositories/CategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
