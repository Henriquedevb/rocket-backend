import { Specification } from '../entities/specification';

export interface ICreateSpecificationsDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDto): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository };
