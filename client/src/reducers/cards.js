

import { GET_CARDS, CREATE_CARDS } from '../constants/actionTypes';

const cards = (state = [], action) => {

    switch (action.type) {
        case GET_CARDS: {
            return action.payload;
        }
        case CREATE_CARDS: {
            return [...state, action.payload];
        }
        default:
            return state;

    }
}

export default cards;