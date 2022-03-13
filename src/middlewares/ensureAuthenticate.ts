import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppErros';
import { UsersRepository } from '../modules/accounts/typeorm/repositories/UsersRepository';

interface IPayload {
  id: string;
}

export async function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id } = verify(token, process.env.JWT_HASH_SECRET) as IPayload;

    const usersRepository = new UsersRepository();
    const userExist = await usersRepository.findById(id);

    if (!userExist) {
      throw new AppError('User does not exists.', 401);
    }

    req.user = {
      id,
    };

    next();
  } catch (error) {
    throw new AppError('Invalid token!', 401);
  }
}
