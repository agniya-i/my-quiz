
import { GET_CARDS, CREATE_CARDS } from "../constants/actionTypes";
import * as api from "../api";


export const createCards = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.createCards(id, formData);

        dispatch({ type: CREATE_CARDS, payload: data });
    } catch (e) {
        console.log(e.message);
    }
}