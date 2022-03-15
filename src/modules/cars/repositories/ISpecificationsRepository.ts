import { Specification } from '../typeorm/entities/specification';

export interface ICreateSpecificationsDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({
    name,
    description,
  }: ICreateSpecificationsDto): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepository };
