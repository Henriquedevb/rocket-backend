import { getRepository, Repository } from 'typeorm';
import { Category } from '../entities/category';
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from '../../repositories/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDto): Promise<void> {
    const category = this.repository.create({ description, name });
    this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
