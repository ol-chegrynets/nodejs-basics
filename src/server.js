import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import studentsRouter from './routers/students.js';
import { ENV_VARS } from './constants/env.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(getEnvVar(ENV_VARS.PORT, 3000));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('====================================');
    next();
  });
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello, Home Page!',
    });
  });

  app.use(studentsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on port ${PORT}`);
    console.log('====================================');
  });
};
