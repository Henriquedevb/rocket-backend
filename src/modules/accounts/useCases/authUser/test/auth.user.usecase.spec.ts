<<<<<<< Updated upstream
import { AppError } from '../../../../../errors/AppErros';
=======
>>>>>>> Stashed changes
import { ICreateUserDto } from '../../../dtos/ICreateUserDto';
import { UsersRepositoryInMemory } from '../../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../../createUser/CreateUserUseCase';
import { AuthUserUseCase } from '../AuthUserUseCase';

let authenticateUserUseCase: AuthUserUseCase;
<<<<<<< Updated upstream
let userRespositoryInMemory: UsersRepositoryInMemory;
=======
let userRepositoryInMemory: UsersRepositoryInMemory;
>>>>>>> Stashed changes
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
<<<<<<< Updated upstream
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
=======
    userRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able to authenticate an user', async () => {
    const user: ICreateUserDto = {
      driver_license: '0001',
      email: 'user@spec.com',
      password: '12345',
      name: 'User Spec',
>>>>>>> Stashed changes
    };

    await createUserUseCase.execute(user);

<<<<<<< Updated upstream
    const result = await authenticateUserUseCase.execute({
=======
    const resultUserAuth = await authenticateUserUseCase.execute({
>>>>>>> Stashed changes
      email: user.email,
      password: user.password,
    });

<<<<<<< Updated upstream
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
=======
    expect(resultUserAuth).toHaveProperty('token');
>>>>>>> Stashed changes
  });
});
