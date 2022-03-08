import { AppError } from '../../../../../errors/AppErros';
import { CategoriesRepositoryInMemory } from '../../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from '../CreateCategoryUseCase';

describe('Should created category correctly', () => {
  let createCategoryUseCase: CreateCategoryUseCase;
  let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('Should be able to create a new category', async () => {
    const category = {
      name: 'Compacto',
      description: 'Carros compactos',
    };

    await createCategoryUseCase.execute(category);

    const categoryFindExist = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryFindExist).toHaveProperty('id');
    expect(categoryFindExist).not.toBeNull();
  });

  it('Should not be able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'Compacto',
        description: 'Carros compactos',
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
