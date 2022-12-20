import api from './axiosClient.js';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    fetchTopics() {
        return api.get('/topics')
    },

    createTopic(newTopic) {
        return api.post('/topics', newTopic)
    },

    fetchTopic(slug) {
        return api.get('/topics/' + slug)
    },

    getFolders() {
        return api.get('/topics')
    },

    createFolder(newFolder) {
        return api.post('/topics', newFolder)
    },

    getFolder(slug) {
        return api.get('/topics/' + slug)
    },

    updateFolder(slug) {
        return api.put('/topics/' + slug)
    }
}