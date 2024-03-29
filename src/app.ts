import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import './database';
import { AppError } from './errors/AppErros';
import { router } from './routes';
import './shared/container';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
});

export { app };
