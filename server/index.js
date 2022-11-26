import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import topicRoutes from './routes/topics.js';
import userRoutes from './routes/users.js';
import setsRoutes from './routes/sets.js';
import favouritesRoutes from './routes/favourites.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/topics', topicRoutes);
app.use('/user', userRoutes);
app.use('/sets', setsRoutes);
app.use('/favourites', favouritesRoutes);

mongoose.connect("", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection has been started....');
})
app.listen(PORT, () => {
    console.log('Server has been started....');
})
