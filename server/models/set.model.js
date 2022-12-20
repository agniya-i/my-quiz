import mongoose from 'mongoose';
import Card from './card.model.js';
import Topic from './topic.model.js';
import slugify from 'slugify';

const cardSetSchema = mongoose.Schema({
    creator: { type: String, required: true },
    slug: {
        type: String
    },
    title: { type: String, required: true },
    description: { type: String },
    tags: [String],
    folder: { type: mongoose.Schema.Types.ObjectId, ref: Topic },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: Card }],
    repeatList: [{ type: mongoose.Schema.Types.ObjectId, ref: Card }]

}, {
    timestamps: true
})

const CardSet = mongoose.model('cardSetSchema', cardSetSchema);

export default CardSet;