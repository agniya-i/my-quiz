import mongoose from 'mongoose';
import Card from './card.model.js';

const topicSchema = mongoose.Schema({
    creator: { type: String },
    slug: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    tags: [String],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: Card }],
}, {
    timestamps: true
})

const Topic = mongoose.model('topicSchema', topicSchema);

export default Topic;