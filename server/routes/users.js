import express from 'express';

import { signin, signup } from '../controllers/user.js';
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

// let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {

//     const username = req.body.username;

//     console.log(username);

//     const newUser = new User({ username });

//     newUser.save()
//         .then(() => res.json('User added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

export default router;
