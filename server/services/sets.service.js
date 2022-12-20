import Card from '../models/card.model.js';
import Set from '../models/set.model.js';

const getSets = async ({ userId, folderId, page, limit }) => {

    const sets = await Set.find({ creator: userId, folderId }).limit(limit).skip((page - 1) * limit);

    return sets;
}

const getSetById = async ({ userId, setId }) => {

    const set = await Set.findOne({ creator: userId, id: setId }).populate('cards').populate('folder');

    return set;
}

const createSet = async ({ ...set }) => {

    const newCards = await Promise.all(set.cards.map(async (item) => {
        const card = new Card(item);
        await card.save();
        return card;
    }));

    const newSet = new Set({ ...set, createdAt: new Date().toISOString(), cards: newCards });

    await newSet.save();

    return newSet;
}

const deletedSet = async ({ setId }) => {

    const deletedSet = await Set.findByIdAndRemove(setId);

    return deletedSet;
}

export default {
    getSets,
    getSetById,
    createSet,
    deletedSet
}
