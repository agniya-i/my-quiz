import express from 'express';
import { auth } from '../middleware/auth.js';
import { getFavourites, updateFavourites } from '../controllers/favourites.controller.js';

const router = express.Router();

router.get('/:folderId', auth, getFavourites);
router.post('/', auth, updateFavourites);

//router.post('/', auth, addToFavourites);
//router.post('/', auth, removeFromFavourites);

export default router;