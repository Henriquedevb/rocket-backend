import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { User } from '../typeorm/entities/User';

interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;
}

export { IUserRepository };
