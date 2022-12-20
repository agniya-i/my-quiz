
import { SHOW_MODAL, CLOSE_MODAL } from '../constants/actionTypes';

export const hideModal = () => async (dispatch) => {
    dispatch({ type: CLOSE_MODAL });
}

export const showModal = (data) => async (dispatch) => {
    dispatch({ type: SHOW_MODAL, data });
}