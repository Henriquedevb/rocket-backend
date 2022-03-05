import { Specification } from '../entities/specification';

export interface ICreateSpecificationsDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findAll(): Specification[];
  findByName(name: string): Specification;
  create({ name, description }: ICreateSpecificationsDto): void;
}

export { ISpecificationsRepository };
