import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UsersRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDto): Promise<void> {
    const newUser = new User();

    Object.assign(newUser, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(newUser);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(user_id: string): Promise<User> {
    return this.users.find((user) => user.id === user_id);
  }
}

export { UsersRepositoryInMemory };
