interface ICreateRentalDto {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

export { ICreateRentalDto };
