import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    title: { type: String, required: true },
    definition: { type: String },
    folderId: { type: mongoose.Types.ObjectId }

}, {
    timestamps: true
})

const Card = mongoose.model('cardSchema', cardSchema);

export default Card;