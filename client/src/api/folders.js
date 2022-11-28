import api from './axiosClient.js';



export default {
    fetchTopics() {
        return api.get('/topics')
    },

    createTopic(newTopic) {
        return api.post('/topics', newTopic)
    },

    fetchTopic(slug) {
        return api.get('/topics/' + slug)
    }
}