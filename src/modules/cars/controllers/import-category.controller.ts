import { Request, Response } from 'express';
import { parse } from 'csv-parse';
import fs from 'fs';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryController {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  importCategory(req: Request, res: Response): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const { file } = req;
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);

          categories.map(async (category) => {
            const { name, description } = category;
            const existCategory = this.categoriesRepository.findByName(name);

            if (!existCategory) {
              this.categoriesRepository.create({ name, description });
            }
          });
        })
        .on('error', (error) => {
          reject(error);
        });

      return res.send();
    });
  }
}
export { ImportCategoryController };
