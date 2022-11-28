import { CREATE_SET, GET_SETS, GET_SET, DELETE_SET } from "../constants/actionTypes";

const sets = (state = [], action) => {

    switch (action.type) {

        case GET_SETS:
            return action.payload;

        case CREATE_SET:
            return [...state, action.payload];

        case DELETE_SET:
            return state.filter(set => set._id !== action.payload._id);

        default:
            return state;
    }
}

export default sets;