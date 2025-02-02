import { Router } from 'express';
import studentsRouter from './students.js';
import passwordRouter from './password.js';

const router = Router();

router.use(passwordRouter);

router.use(studentsRouter);

export default router;
