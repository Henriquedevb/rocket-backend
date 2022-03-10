import { AppError } from '../../../../../errors/AppErros';
import { ICreateUserDto } from '../../../dtos/ICreateUserDto';
import { UsersRepositoryInMemory } from '../../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../../createUser/CreateUserUseCase';
import { AuthUserUseCase } from '../AuthUserUseCase';

let authenticateUserUseCase: AuthUserUseCase;
let userRespositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    userRespositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthUserUseCase(userRespositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRespositoryInMemory);
  });

  it('Shold be able to authenticate an user', async () => {
    const user: ICreateUserDto = {
      driver_license: '0001',
      email: 'user@spec.test',
      name: 'User Spec',
      password: '123456',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user ', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'ubaluba@email.com',
        password: 'aoba',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password ', () => {
    expect(async () => {
      const user: ICreateUserDto = {
        driver_license: '0001',
        email: 'user@spec.test',
        name: 'User Spec',
        password: '123456',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'aoba',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
