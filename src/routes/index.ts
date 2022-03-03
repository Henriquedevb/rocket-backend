import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.router';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationRouter);

export { router };
