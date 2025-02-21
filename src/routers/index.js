import express from 'express';

import passwordRouter from './password.js';
import studentsRouter from './students.js';
import authRouter from './auth.js';

const router = express.Router();

// router.use('/password', passwordRouter);

router.use('/', studentsRouter);
router.use('/auth', authRouter);

export default router;
