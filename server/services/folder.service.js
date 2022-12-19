import Topic from '../models/topic.model.js';
import CardSet from '../models/set.model.js';
import slugify from 'slugify';

export const folder = async (req, res) => {

    try {
        const topics = await Topic.find({ creator: req.userId });

        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}