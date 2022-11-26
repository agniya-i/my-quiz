import Topic from '../models/topic.model.js';
import CardSet from '../models/set.model.js';
import slugify from 'slugify';

export const getTopics = async (req, res) => {

    try {
        const topics = await Topic.find({ creator: req.userId });

        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getTopic = async (req, res) => {
    try {

        const topic = await Topic.findOne({ slug: req.params.slug, creator: req.userId }).lean();
        const sets = await CardSet.find({ folder: topic._id, creator: req.userId }).lean();


        // const dumpTopic = (topic) => {
        //     return {
        //         id: topic._id,
        //         title: topic.title,
        //         description: topic.description,
        //     }
        // }

        // const topicData = topic.map(dumpTopic);


        res.status(200).json({ ...topic, sets });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createTopic = async (req, res) => {
    const topic = req.body;
    topic.slug = slugify(topic.title, {
        lower: true,
        trim: true
    }
    );
    topic.creator = req.userId;


    const newTopic = new Topic({ ...topic, createdAt: new Date().toISOString() });

    try {

        await newTopic.save();

        res.status(201).json(newTopic);

    } catch (error) {

        console.log(error);
    }
}