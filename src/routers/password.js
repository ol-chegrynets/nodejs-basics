import { Router } from 'express';
import checkApiKey from '../middlewares/checkAPIKey.js';

const router = Router();

router.get('/', checkApiKey);

export default router;
