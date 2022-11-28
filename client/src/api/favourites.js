import api from './axiosClient.js';


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