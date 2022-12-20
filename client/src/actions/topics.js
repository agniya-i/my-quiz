import api from "../api/folders";

export const getTopics = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTopics();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (e) {
        console.log(e.message);
    }
}

export const createTopic = (topic) => async (dispatch) => {
    try {
        const { data } = await api.createTopic(topic);

        dispatch({ type: 'CREATE', payload: data })
    } catch (e) {
        console.log(e.message);
    }
}

