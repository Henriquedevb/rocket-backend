import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    username,
    password,
    driver_license,
  }: ICreateUserDto): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      username,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
