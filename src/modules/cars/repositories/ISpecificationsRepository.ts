import { Specification } from '../model/specification';

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
