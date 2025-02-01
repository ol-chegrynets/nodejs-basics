import { Router } from 'express';
import { studentsRouter } from './students.js';

const router = Router();

router.use(studentsRouter);

// router.use(authRouter);

export default router;
