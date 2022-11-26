import express from 'express';
const router = express.Router();
import { auth } from '../middleware/auth.js';

import { getSets, createSet, getSet, repeatCard, createSetWithCards, deleteSet } from '../controllers/sets.js';
import { createCards, getCards } from '../controllers/cards.js';

router.get('/', auth, getSets);
router.post('/', auth, createSet);
router.get('/:slug', auth, getSet);
router.get('/cards/:ids', auth, getCards);
router.post('/cards/', auth, createCards);
router.post('/repeatList/', auth, repeatCard);
router.post('/createSet/', auth, createSetWithCards);
router.delete('/deleteSet/', auth, deleteSet)

export default router;