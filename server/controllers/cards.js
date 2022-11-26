import Set from '../models/set.model.js';
import Card from '../models/card.model.js';
import Controller from './Controller.js'

export const getCards = Controller(async (res, req) => {
    return await Card.find({ '_id': { $in: req.params.cards } });
})
// export const getCards = (req, res) => Controller(req, res, async () => {
//     return await Card.find({ '_id': { $in: req.params.cards } });
// })

export const createCards = Controller(async (req, res) => {
    const cards = req.body.cards;
    const set = await Set.findOne({ creator: req.userId, _id: req.body.setId });

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
})
