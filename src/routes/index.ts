import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { carsRouter } from './cars.routes';
import { categoriesRouter } from './categories.routes';
import { rentalRoutes } from './rental.routes';
import { specificationRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationRouter);
router.use('/users', usersRouter);
router.use('/cars', carsRouter);
router.use('/rentals', rentalRoutes);
router.use(authRoutes);

export { router };
