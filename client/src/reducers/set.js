import { GET_SET, SHUFFLE_SET, UPDATE_REPEAT_LIST } from "../constants/actionTypes";


const set = (state = {}, action) => {

    switch (action.type) {
        case GET_SET:
            return action.payload;

        case SHUFFLE_SET:
            return { ...state, cards: action.payload };

        case UPDATE_REPEAT_LIST:
            return { ...state, repeatList: action.payload };

        default:
            return state;
    }
}

export default set;