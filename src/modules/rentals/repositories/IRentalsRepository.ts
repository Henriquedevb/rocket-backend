import { ICreateRentalDto } from '../dto/ICreateRentalDto';
import { Rental } from '../typeorm/entities/Rental';

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create(data: ICreateRentalDto): Promise<Rental>;
}

export { IRentalsRepository };