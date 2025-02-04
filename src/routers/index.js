import { Router } from 'express';

import studentsRouter from './students.js';
import passwordRouter from './password.js';

const router = Router();

router.use('/password', passwordRouter);

// router.use('/students', studentsRouter);
router.use(studentsRouter);


export default router;
