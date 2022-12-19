import express from 'express';
import { auth } from '../middleware/auth.js';
import { getTopics, createTopic, getTopic } from '../controllers/topics.controller.js';

const router = express.Router();

router.get('/', auth, getTopics);
router.post('/', auth, createTopic);
router.get('/:slug', auth, getTopic);


export default router;