import { Request, Response } from 'express';
import { CreateCategoryService } from '../services/create.category-service';

class CreateCategoryController {
  constructor(private createCategory: CreateCategoryService) {}

  create(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createCategory.execute({ name, description });

    return res.status(201).send();
  }

  find(req: Request, res: Response): Response {
    const categories = this.createCategory.findAll();

    return res.status(200).json(categories);
  }
}

export { CreateCategoryController };
