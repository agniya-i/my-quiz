export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TOPIC':
            return action.payload;
        default:
            return state;
    }
}
