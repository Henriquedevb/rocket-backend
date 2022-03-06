import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthUserUseCase } from './AuthUserUseCase';

class AuthUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const authUserUseCase = container.resolve(AuthUserUseCase);

    const token = await authUserUseCase.execute({ password, email });

    return res.json(token);
  }
}

export { AuthUserController };
