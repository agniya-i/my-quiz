import api from './axiosClient.js';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    addToFavourites(cardId) {
        return api.post('/favourites', { cardId });
    },

    updateFavourites(cardId, folderId) {
        return api.post('/favourites', { cardId, folderId });
    },

    getFavourites(folderId) {
        return api.get('/favourites/' + folderId);
    }
}