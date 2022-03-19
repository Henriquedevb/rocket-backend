import { inject, injectable } from 'tsyringe';
import { ICarsImageRepository } from '../../repositories/ICarsImageRepository';
import { CarsImagesRepository } from '../../typeorm/repositories/CarsImageRepository';

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject('CarsImagesRepository')
    private CarsImagesRepository: ICarsImageRepository
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.CarsImagesRepository.create(car_id, image);
    });
  }
}

export { UploadCarImageUseCase };
