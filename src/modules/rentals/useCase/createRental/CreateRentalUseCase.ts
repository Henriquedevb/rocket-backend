interface IRequest {
  user_id: string;
  car_id: string;
  expected_return__date: Date;
}

class CreateRentalUseCase {
  async execute({}: IRequest): Promise<void> {}
}

export { CreateRentalUseCase };
