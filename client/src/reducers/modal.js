import { SHOW_MODAL, CLOSE_MODAL } from "../constants/actionTypes";


const initialState = {
    modalType: null,
    modalProps: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            console.log('f', action);
            return {
                ...state,
                modalType: action.data.modalType,
                modalProps: action.data.modalProps
            }
        case CLOSE_MODAL:
            return initialState;
        default:
            return state;

    }
}

export default modalReducer;