
import api from "../api/folders";


export const getTopics = () => async (dispatch) => {

    try {
        const { data } = await api.fetchTopics();
        console.log('action', data);

        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (e) {
        console.log(e.message);
    }
}

export const createTopic = (topic) => async (dispatch) => {
    try {

        const { data } = await api.createTopic(topic);

        console.log(data);
        dispatch({ type: 'CREATE', payload: data })

    } catch (e) {

    }
}

