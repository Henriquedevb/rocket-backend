import { RentalsRepositoryInMemory } from '../../../repositories/in-memory/RentalsRepositoryInMemory';
import { CreateRentalUseCase } from '../CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalsRepositoryInMemory;

describe('Create Rental', () => {
  beforeEach(() => {
    rentalRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory);
  });

  it('Should be able to create a new rental', async () => {
    await createRentalUseCase.execute({
      user_id: '123455',
      car_id: '1',
      expected_return_date: new Date(),
    });
  });
});
