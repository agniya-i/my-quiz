import User from '../models/user.model.js';
import Topic from '../models/topic.model.js';

export const getFavourites = async (req, res) => {
    try {
        const favourites = await Topic.findOne({ _id: req.params.folderId }).populate('favourites');;

        res.status(200).json(favourites);

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export const updateFavourites = async (req, res) => {
    try {

        const { cardId, folderId } = req.body;

        console.log(folderId);
        const folder = await Topic.findOne({ _id: folderId });

        const index = folder.favourites.findIndex((id) => String(id) === String(cardId));

        if (index === -1) {
            folder.favourites.push(cardId);
        } else {
            folder.favourites = folder.favourites.filter((id) => String(id) !== String(cardId));
        }

        const updatedFolder = await Topic.findByIdAndUpdate(folderId, folder, { new: true });

        res.status(200).json(updatedFolder);


    } catch (e) {
        res.status(500).json({ message: e.message })
    }

}


export const addToFavourites = async (req, res) => {
    try {

        await User.updateOne({
            _id: req.userId
        }, {
            $push: {
                favourites: req.body.cardId
            }
        });

        const favourites = await User.findOne({ _id: req.userId });


        // console.log(updatedUser);
        res.status(200).json(favourites);

    } catch (e) {
        console.error(e);
    }
}

