import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import jsonParser from '../middlewares/jsonParser.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  jsonParser,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/login',
  jsonParser,
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

authRouter.post(
  '/refresh',
  jsonParser,
  ctrlWrapper(refreshUserSessionController),
);

authRouter.post(
  '/logout',
  // jsonParser,
  ctrlWrapper(logoutUserController),
);

authRouter.post(
  '/refresh',
  jsonParser,
  ctrlWrapper(refreshUserSessionController),
);
authRouter.post(
  '/request-reset-email',
  jsonParser,
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);
authRouter.post('/request-reset-email', jsonParser, ctrlWrapper());

export default authRouter;
