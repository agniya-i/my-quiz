import express from 'express';
const router = express.Router();
import { auth } from '../middleware/auth.js';

import { getTopics, createTopic, getTopic } from '../controllers/topics.js';


router.get('/', auth, getTopics);
router.post('/', auth, createTopic);
router.get('/:slug', auth, getTopic);




export default router;