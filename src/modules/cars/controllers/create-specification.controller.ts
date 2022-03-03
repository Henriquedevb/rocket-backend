import { Request, Response } from 'express';
import { CreateSpecificationService } from '../services/create.specification-service';

class CreateSpecificationController {
  constructor(private createSpecification: CreateSpecificationService) {}

  create(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createSpecification.execute({ name, description });

    return res.status(201).send();
  }

  find(req: Request, res: Response): Response {
    const specifications = this.createSpecification.findAll();

    return res.status(200).json(specifications);
  }
}

export { CreateSpecificationController };
