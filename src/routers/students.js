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

const studentsRouter = express.Router();

const jsonParser = express.json({
  type: ['application/json', 'application/vnd.api+json'],
  limit: '100kb',
});

studentsRouter.use('/students/:studentId', isValidId('studentId'));

studentsRouter.get('/students', ctrlWrapper(getStudentsController));
studentsRouter.get(
  '/students/:studentId',
  ctrlWrapper(getStudentByIdController),
);
studentsRouter.post(
  '/students',
  jsonParser,
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

studentsRouter.delete(
  '/students/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(deleteStudentController),
);
studentsRouter.put(
  '/students/:studentId',
  jsonParser,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);
studentsRouter.patch(
  '/students/:studentId',
  jsonParser,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default studentsRouter;
