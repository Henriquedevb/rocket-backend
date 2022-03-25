import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { AppError } from '../../../../errors/AppErros';
import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider';
import { IRentalsRepository } from '../../repositories/IRentalsRepository';
import { Rental } from '../../typeorm/entities/Rental';

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(
    private rentalsRepository: IRentalsRepository,
    private dateProvider: IDateProvider
  ) {}

  async execute({
    car_id,
    user_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    const minimalHoursExpected = 24;

    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError('Car is unavailable');
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpenToUser) {
      throw new AppError("There's a rental in progress for user.");
    }

    const expectedReturnDateFormate = this.dateProvider.convertToUtc();

    const dateNow = dayjs().utc().local().format();

    const compare = this.dateProvider.compareInHours();

    if (compare < minimalHoursExpected) {
      throw new AppError('invalid return time.');
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}

export { CreateRentalUseCase };
