
import { GET_CARDS, CREATE_CARDS } from "../constants/actionTypes";
import * as api from "../api";


export const createCards = (id, formData) => async (dispatch) => {
    try {

        console.log(id, formData);
        console.log({ id, formData });
        const { data } = await api.createCards(id, formData);

        console.log(data);
        dispatch({ type: CREATE_CARDS, payload: data });
    } catch (e) {
        console.log(e.message);
    }
}