import { ICreateCarDto } from '../dtos/ICreateCarDto';
import { Car } from '../typeorm/entities/car';

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
