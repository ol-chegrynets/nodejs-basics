import express from 'express';

import passwordRouter from './password.js';
import studentsRouter from './students.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.json({
//     message: 'Hello, Home Page!',
//   });
// });
router.use('/password', passwordRouter);

router.use(studentsRouter);

export default router;
