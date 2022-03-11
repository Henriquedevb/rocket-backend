import { AppError } from '../../../../../errors/AppErros';
import { CarsRepositoryInMemory } from '../../../repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarUseCase } from '../CreateCarUsecase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it('Should be able a to create new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car',
      brand: 'Brand',
      category_id: 'category',
      daily_rate: 20,
      description: 'description',
      fine_amount: 100,
      license_plate: 'ABC-1234',
    });

    expect(car).toHaveProperty('id');
  });

  it('Should not be able to create a car with exists license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Name Car one',
        brand: 'Brand',
        category_id: 'abbbc61c-aa7c-4c3c-a5f8-a88ed91a693c',
        daily_rate: 20,
        description: 'description',
        fine_amount: 100,
        license_plate: 'ABC-1234',
      });

      await createCarUseCase.execute({
        name: 'Name Car two',
        brand: 'Brand',
        category_id: 'abbbc61c-aa7c-4c3c-a5f8-a88ed91a693b',
        daily_rate: 20,
        description: 'description',
        fine_amount: 100,
        license_plate: 'ABC-1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car',
      brand: 'Brand',
      category_id: 'abbbc61c-aa7c-4c3c-a5f8-a88ed91a693c',
      daily_rate: 20,
      description: 'description',
      fine_amount: 100,
      license_plate: 'ABCD-1234',
    });

    expect(car.available).toBe(true);
  });
});
