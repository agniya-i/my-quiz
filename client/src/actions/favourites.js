import { GET_FAVOURITES, UPDATE_FAVOURITES } from '../constants/actionTypes';
import api from "../api/favourites";




export const updateFavourites = (cardId, folderId) => async (dispatch) => {
    try {
        console.log(folderId)
        const { data } = await api.updateFavourites(cardId, folderId);

        console.log(data);

        dispatch({ type: UPDATE_FAVOURITES, payload: data.favourites });

    } catch (e) {
        console.log(e);
    }
}

export const getFavourites = (folderId) => async (dispatch) => {
    try {

        const { data } = await api.getFavourites(folderId);

        dispatch({ type: GET_FAVOURITES, payload: data.favourites });
    } catch (e) {
        console.log(e)
    }
}