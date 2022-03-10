import { getRepository, Repository } from 'typeorm';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { User } from '../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    driver_license,
    avatar,
    id,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findById(user_id: string): Promise<User> {
    const user = await this.repository.findOne(user_id);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UsersRepository };
