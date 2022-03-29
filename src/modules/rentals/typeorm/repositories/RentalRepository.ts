import { getRepository, Repository } from 'typeorm';
import { ICreateRentalDto } from '../../dto/ICreateRentalDto';
import { IRentalsRepository } from '../../repositories/IRentalsRepository';
import { Rental } from '../entities/Rental';

class RentalRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const rentalOpenByCar = await this.repository.findOne({
      where: { car_id, end_date: null },
    });

    return rentalOpenByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = this.repository.findOne({
      where: { user_id, end_date: null },
    });

    return openByUser;
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
    id,
    end_date,
    total,
  }: ICreateRentalDto): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
      id,
      end_date,
      total,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne({ id });

    return rental;
  }
}

export { RentalRepository };
