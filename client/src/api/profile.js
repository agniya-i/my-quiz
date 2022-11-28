import api from './axiosClient.js';


export default {
    getProfile(uid) {
        return api.get('/user/' + uid);
    },

    signIn(formData) {
        return api.post('/user/signin', formData);
    },

    signUp(formData) {
        return api.post('/user/signup', formData);
    }
}

