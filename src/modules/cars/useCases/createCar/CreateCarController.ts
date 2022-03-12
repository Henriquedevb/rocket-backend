import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateCarUseCase } from './CreateCarUsecase';

class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
    } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const newCar = await createCarUseCase.execute({
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
    });

    return res.status(201).json(newCar);
  }
}

export { CreateCarController };
