import { getRepository, Repository } from 'typeorm';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
