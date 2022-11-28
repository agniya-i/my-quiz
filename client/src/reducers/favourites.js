import { GET_FAVOURITES, UPDATE_FAVOURITES } from '../constants/actionTypes';

const favourites = (state = [], action) => {
    switch (action.type) {

        case GET_FAVOURITES: {
            return action.payload;
        }

        case UPDATE_FAVOURITES: {
            return action.payload;
        }

        default:
            return state;
    }
}

export default favourites;