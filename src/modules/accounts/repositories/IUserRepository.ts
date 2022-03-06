import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { User } from '../entities/User';

interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUserRepository };
