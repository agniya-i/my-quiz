import express from 'express';
import { auth } from '../middleware/auth.js';
import { getSets, createSet, getSet, updateRepeatList, deleteSet } from '../controllers/sets.controller.js';
// import { createCards, getCards } from '../controllers/cards.js';

const router = express.Router();

router.get('/', auth, getSets);
router.post('/', auth, createSet);
router.delete('/', auth, deleteSet);

router.get('/:id', auth, getSet);

router.post('/repeatList/', auth, updateRepeatList);

// router.get('/cards/:ids', auth, getCards);
// router.post('/cards/', auth, createCards);
// router.post('/createSet/', auth, createSetWithCards);

export default router;