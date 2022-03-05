import { ICreateUserDto } from '../dtos/ICreateUserDto';

interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
}

export { IUserRepository };
