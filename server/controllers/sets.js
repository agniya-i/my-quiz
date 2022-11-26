
import slugify from 'slugify';
import Card from '../models/card.model.js';
import Set from '../models/set.model.js';

export const getSets = async (req, res) => {

    const { folderId } = req.body;
    console.log(folderId);

    try {
        const sets = await Set.find({ creator: req.userId, folderId });

        res.status(200).json(sets);

    } catch (e) {
        res.status(500).json({ message: e.message });

    }
}


// TEST FOLDER
export const createSetWithCards = async (req, res) => {

    const { body, userId } = req;
    const { setData, folderId } = body;
    const { title, cards } = setData;
    const slug = slugify(title, {
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        trim: true
    })

    try {
        const newCards = await Promise.all(cards.map(async (item) => {
            const card = new Card(item);
            await card.save();
            return card;
        }));

        const newSet = new Set({ title, slug, cards: newCards, creator: userId, folder: folderId });
        await newSet.save();
        res.status(201).json(newSet);

    } catch (error) {
        console.log(error);
    }
}


export const createSet = async (req, res) => {
    const set = req.body;
    set.slug = slugify(set.title, {
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        trim: true
    }
    );
    set.creator = req.userId;

    const newSet = new Set({ ...set, createdAt: new Date().toISOString() });

    try {

        await newSet.save();

        res.status(201).json(newSet);

    } catch (error) {

        console.log(error);
    }

}

export const getSet = async (req, res) => {
    try {

        const set = await Set.findOne({ creator: req.userId, slug: req.params.slug }).populate('cards').populate('folder');

        res.status(200).json(set);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const deleteSet = async (req, res) => {
    try {
        const { setId } = req.body;
        console.log(setId);
        const deletedSet = await Set.findByIdAndRemove(setId);
        return res.status(200).send(deletedSet);
    } catch (e) {
        res.status(500).json({ message: e.message });

    }
}

export const repeatCard = async (req, res) => {
    try {
        const { setId, cardId } = req.body;

        const set = await Set.findOne({ _id: setId, creator: req.userId });


        const index = set.repeatList.findIndex((id) => String(id) === String(cardId));


        if (index === -1) {
            set.repeatList.push(cardId);
        } else {
            set.repeatList = set.repeatList.filter((id) => String(id) !== String(cardId));
        }

        const updatedSet = await Set.findByIdAndUpdate(setId, set, { new: true });

        res.status(200).json(updatedSet);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}







//folder/: id / cards ? favorite = true
