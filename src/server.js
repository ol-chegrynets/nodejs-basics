import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { ENV_VARS } from './constants/env.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandlerMiddlewares } from './middlewares/errorHandler.js';

import cookieParser from 'cookie-parser';
import router from './routers/index.js';


const PORT = Number(getEnvVar(ENV_VARS.PORT, 8081));

export const startServer = () => {
  const app = express();

  // app.use(express.json());

  app.use(cors());
  app.use(cookieParser());

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );

  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('====================================');
    next();
  });

  // app.get('/auth', (req, res) => {
  //   res.json({
  //     message: 'Hello, Home Page!',
  //   });
  // });

  app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandlerMiddlewares);

  app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on port ${PORT}`);
    console.log('====================================');
  });
};
