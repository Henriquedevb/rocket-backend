import { AppError } from '../../../../../errors/AppErros';
import { CarsRepositoryInMemory } from '../../../repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '../../../repositories/in-memory/SpecificationRepositoryInMemory';
import { CreateCarSpecificationUseCase } from '../CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it('Should be able to add a new specification to a now-existent car', async () => {
    expect(async () => {
      const car_id = '1234';
      const specifications_id = ['12345'];
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      brand: 'Brand',
      category_id: 'category',
      daily_rate: 20,
      description: 'description',
      fine_amount: 100,
      license_plate: 'ABC-1234',
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: 'description',
      name: 'Name specification',
    });

    const specifications_id = [specification.id];

    const specificationCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationCars).toHaveProperty('specifications');
    expect(specificationCars.specifications.length).toBe(1);
  });
});
