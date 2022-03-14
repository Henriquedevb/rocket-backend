import { CarsRepositoryInMemory } from '../../../repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from '../ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('Should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Vw Polo',
      description: 'Polo boladão',
      brand: 'VW',
      category_id: 'cf3b30c5-876d-4c77-9053-55f2dd2d722f',
      daily_rate: 340,
      fine_amount: 120,
      license_plate: 'ABCD-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Vw Polo',
      description: 'Polo boladão',
      brand: 'VW VW',
      category_id: 'cf3b30c5-876d-4c77-9053-55f2dd2d722f',
      daily_rate: 340,
      fine_amount: 120,
      license_plate: 'ABCD-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'VW VW',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Vw Polo 2020',
      description: 'Polo boladão',
      brand: 'VW VW',
      category_id: 'cf3b30c5-876d-4c77-9053-55f2dd2d722f',
      daily_rate: 340,
      fine_amount: 120,
      license_plate: 'ABCD-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Vw Polo 2020',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Vw Polo 2020',
      description: 'Polo boladão',
      brand: 'VW VW',
      category_id: 'cf3b30c5-876d-4c77-9053-55f2dd2d722f',
      daily_rate: 340,
      fine_amount: 120,
      license_plate: 'ABCD-1234',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: 'cf3b30c5-876d-4c77-9053-55f2dd2d722f',
    });

    expect(cars).toEqual([car]);
  });
});
