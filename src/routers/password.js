import { Router } from 'express';
import checkApiKey from '../middlewares/checkAPIKey.js';

const router = Router();

router.get('/password', checkApiKey);

export default router;
