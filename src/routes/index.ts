import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationRouter);
router.use('/users', usersRouter);
router.use(authRoutes);

export { router };
