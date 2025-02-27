import express from 'express';
import {
  createStudentController,
  deleteStudentController,
  getStudentByIdController,
  getStudentsController,
  patchStudentController,
  upsertStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { isValidId } from '../middlewares/imValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';
import jsonParser from '../middlewares/jsonParser.js';

const studentsRouter = express.Router();

// studentsRouter.use(authenticate);

studentsRouter.use('/students/:studentId', isValidId('studentId'));

studentsRouter.get(
  '/students',
  // checkRoles(ROLES.TEACHER),
  ctrlWrapper(getStudentsController),
);

studentsRouter.get(
  '/students/:studentId',
  // checkRoles(ROLES.TEACHER, ROLES.PARENT),
  ctrlWrapper(getStudentByIdController),
);

studentsRouter.post(
  '/students',
  // checkRoles(ROLES.TEACHER),
  jsonParser,
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

studentsRouter.delete(
  '/students/:studentId',
  // checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(deleteStudentController),
);

studentsRouter.put(
  '/students/:studentId',
  // checkRoles(ROLES.TEACHER),
  jsonParser,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

studentsRouter.patch(
  '/students/:studentId',
  // checkRoles(ROLES.TEACHER, ROLES.PARENT),
  jsonParser,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default studentsRouter;
