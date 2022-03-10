import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppErros';
import { IUserRepository } from '../../repositories/IUserRepository';
import env from '../../../../app.env';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    const token = sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: `${env.JWT_EXPIRES_IN}d`,
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthUserUseCase };
