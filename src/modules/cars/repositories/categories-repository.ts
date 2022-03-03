import { Category } from '../model/category';
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  findAll() {
    return this.categories;
  }

  async create({ name, description }: ICreateCategoryDto): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  findByName(name: string): Category {
    const categoryName = this.categories.find(
      (category) => category.name === name
    );
    return categoryName;
  }
}

export { CategoriesRepository };
