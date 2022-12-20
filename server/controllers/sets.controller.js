
import slugify from 'slugify';
import Card from '../models/card.model.js';
import Set from '../models/set.model.js';
import setService from '../services/sets.service.js';
import Controller from './Controller.js';

export const getSets = async (req, res) => {

    try {
        const { page = 1, limit = 10 } = req.query;

        const sets = await setService.getSets({
            userId: req.userId,
            folderId: req.body.folderId,
            page,
            limit
        });

        res.status(200).json(sets);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


export const getSet = async (req, res) => {
    try {

        const set = await setService.getSetById({
            userId: req.userId,
            setId: req.id
        })

        res.status(200).json(set);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const createSet = async (req, res) => {
    try {
        const { set } = req.body;
        set.creator = req.userId;

        const newSet = await setService.createSet({ ...set });

        res.status(201).json(newSet);
    } catch (e) {
        res.status(500).json({ message: e.message });

    }
}


export const deleteSet = async (req, res) => {
    try {
        const { setId } = req.body;

        const deletedSet = await setService.deletedSet({ setId });

        return res.status(200).send(deletedSet);
    } catch (e) {
        res.status(500).json({ message: e.message });

    }
}


export const updateRepeatList = async (req, res) => {
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
