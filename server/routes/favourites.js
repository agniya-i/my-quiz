import express from 'express';
const router = express.Router();
import { auth } from '../middleware/auth.js';

import { getFavourites, updateFavourites } from '../controllers/favourites.js';

router.get('/:folderId', auth, getFavourites);
router.post('/', auth, updateFavourites);

//router.post('/', auth, addToFavourites);
//router.post('/', auth, removeFromFavourites);


export default router;