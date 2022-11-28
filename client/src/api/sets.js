import api from './axiosClient.js';

export default {
    fetchSet(slug) {
        return api.get('/sets/' + slug);
    },
    fetchSets() {
        return api.get('/sets');
    },
    createSet(newSet) {
        return api.post('/sets', newSet);
    },
    updateRepeatList({ setId, cardId }) {
        return api.post('/sets/repeatList', { setId, cardId });
    },

    createCards(setId, cards) {
        return api.post('/sets/cards', { setId, cards })
    },

    createFolderSet(folderId, setData) {
        return api.post('/sets/createSet', { folderId, setData });
    },
    deleteSet(setId) {
        return api.delete('/sets/deleteSet', { data: setId });
    }

}