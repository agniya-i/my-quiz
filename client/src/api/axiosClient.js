import axios from "axios";


const axiosClient = axios.create({ baseURL: 'http://localhost:3001/' });

axiosClient.interceptors.request.use(req => {

    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export default axiosClient;
