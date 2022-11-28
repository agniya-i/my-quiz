import axios from "axios";


const API = axios.create({ baseURL: 'http://localhost:3000/' });

API.interceptors.request.use(req => {

    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})



export const fetchTopics = () => API.get('/topics');
export const createTopic = (newTopic) => API.post('/topics', newTopic);
export const fetchTopic = (slug) => API.get('/topics/' + slug);

export const fetchSets = () => API.get('/sets');
export const createSet = (newSet) => API.post('/sets', newSet);
export const fetchSet = (slug) => API.get('/sets/' + slug);
export const updateRepeatList = ({ setId, cardId }) => API.post('/sets/repeatList', { setId, cardId });
export const createCards = (setId, cards) => API.post('/sets/cards', { setId, cards });


export const getProfile = (uid) => API.get('/user/' + uid);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const addToFavourites = (cardId) => API.post('/favourites', { cardId });
export const updateFavourites = (cardId) => API.post('/favourites', { cardId })
export const getFavourites = () => API.get('/favourites');