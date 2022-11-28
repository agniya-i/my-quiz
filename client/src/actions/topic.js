import api from "../api/folders";


export const getTopic = (slug) => async (dispatch) => {
    try {
        const { data } = await api.fetchTopic(slug);
        ///???
        console.log(data);
        dispatch({ type: "FETCH_TOPIC", payload: data });

    } catch (e) {
        console.error(e);
    }
}