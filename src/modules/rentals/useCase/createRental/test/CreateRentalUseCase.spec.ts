import dayjs from 'dayjs';
import { AppError } from '../../../../../errors/AppErros';
import { DayjsDateProvider } from '../../../../../shared/container/providers/DateProvider/implementations/DayJsDateProvider';
import { RentalsRepositoryInMemory } from '../../../repositories/in-memory/RentalsRepositoryInMemory';
import { CreateRentalUseCase } from '../CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalsRepositoryInMemory;
let dayJsProvider: DayjsDateProvider;

describe('Create Rental', () => {
  const completeDayInHours = dayjs().add(1, 'day').toDate();

  beforeEach(() => {
    rentalRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalRepositoryInMemory,
      dayJsProvider
    );
  });

  it('Should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '123455',
      car_id: '1',
      expected_return_date: completeDayInHours,
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('Should be able to create a new rental if there is another open to the same user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123455',
        car_id: '1',
        expected_return_date: completeDayInHours,
      });

      await createRentalUseCase.execute({
        user_id: '123455',
        car_id: '1',
        expected_return_date: completeDayInHours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to create a new rental if there is another open to the same car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '1212',
        car_id: '123',
        expected_return_date: completeDayInHours,
      });

      await createRentalUseCase.execute({
        user_id: '2020',
        car_id: '123',
        expected_return_date: completeDayInHours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to create a new rental with invalid time', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '1212',
        car_id: '123',
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
