

import api from "../api/sets";
import { GET_SETS, CREATE_SET, GET_SET, SHUFFLE_SET, UPDATE_REPEAT_LIST, DELETE_SET } from "../constants/actionTypes";

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}


export const getSets = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSets();

        dispatch({ type: GET_SETS, payload: data });
    } catch (e) {
        console.log(e.message);
    }
}

//TEST ROUTE
export const createFolderSet = (folderId, setData, history) => async (dispatch) => {
    try {
        console.log(folderId, setData);
        const { data } = await api.createFolderSet(folderId, setData);

        if (data) {
            history.push(`/set/${data.slug}`);
        }
        //dispatch({ type: CREATE_SET, payload: data });
    } catch (e) {
        console.error(e.massage);
    }
}


export const createSet = (setId, setData) => async (dispatch) => {
    try {
        const { data } = await api.createSet(setId, setData);


        dispatch({ type: CREATE_SET, payload: data });

    } catch (e) {
        console.error(e.message);
    }
}

export const getSet = (slug) => async (dispatch) => {
    try {
        const { data } = await api.fetchSet(slug);

        dispatch({ type: GET_SET, payload: data });
    } catch (e) {
        console.error(e.message);
    }
}


export const shuffleSet = (cards) => async (dispatch) => {
    const shuffledArray = shuffle(cards);
    dispatch({ type: SHUFFLE_SET, payload: shuffledArray });
}

export const updateRepeatList = (cardId, setId) => async (dispatch) => {
    try {
        const { data } = await api.updateRepeatList({ setId, cardId });

        dispatch({ type: UPDATE_REPEAT_LIST, payload: data.repeatList })
    } catch (e) {
        console.log(e);
    }
}

export const deleteSet = (setId) => async (dispatch) => {
    try {
        const { data } = await api.deleteSet({ setId });

        dispatch({ type: DELETE_SET, payload: data })
    } catch (e) {
        console.error(e);
    }
}