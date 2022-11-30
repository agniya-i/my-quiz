import { AUTH } from '../constants/actionTypes';

import api from "../api/profile";

// return async function 
export const signUp = (formData, navigation) => async (dispatch) => {

    try {
        const { data } = await api.signUp(formData);

        localStorage.setItem('profile', JSON.stringify({ ...data }))

        dispatch({ type: AUTH, data })

        navigation('/dashboard');
    } catch (e) {
        console.error(e);
    }
}

export const signIn = (formData, navigation) => async (dispatch) => {

    try {
        const { data } = await api.signIn(formData);

        localStorage.setItem('profile', JSON.stringify({ ...data }))

        dispatch({ type: AUTH, data })

        navigation('/dashboard');
    } catch (e) {
        console.error(e);
    }

}

export const getProfile = (history) => async (dispatch) => {
    const userData = JSON.parse(localStorage.getItem('profile'));


    if (userData) {
        dispatch({ type: 'AUTH', data: userData });
        history.push('/dashboard');
    } else {
        history.push('/');
    }

}