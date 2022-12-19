
import Card from '../models/card.model.js';
import Set from '../models/set.model.js';


export const getCardsByIds = async ({ cardIds }) => {
    if (!Array.isArray(cardIds)) {
        throw 'Cards Ids must be array';
    }

    return await Card.find({ '_id': { $in: cardIds } });
}


export const createCards = async ({ cards, userId, setId }) => {
    const set = await Set.findOne({ creator: userId, _id: setId });

    const cardsInstances = [];
    for (let i = 0; i < cards.length; i++) {
        const newCard = new Card({ ...cards[i], folderId: set.folderId });
        await newCard.save();
        cardsInstances.push(newCard);
    }

    await set.updateOne(
        {
            $push: {
                cards: cardsInstances
            }
        });

    return set.save();
}
