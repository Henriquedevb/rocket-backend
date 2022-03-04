import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaagerFile from './swagger.json';

import { router } from './routes';
const app = express();

app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaagerFile));

app.listen(3000, () => {
  console.log('Server is runner');
});
