import mongoose from 'mongoose';
import CardSet from './set.model.js';
import Card from './card.model.js';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: { type: String },
    favourites: {
        type: [
            { type: mongoose.Schema.Types.ObjectId, ref: Card }
        ],
        validate: [arrayLimit, '{PATH} exceeds the limit of 140']
    }
}, {
    timestamps: true
});

function arrayLimit(val) {
    return val.length <= 140;
}


const User = mongoose.model('User', userSchema);

export default User;