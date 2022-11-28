import React, { Component, useEffect } from 'react';
import './style.less';
import bcg from '../../../img/hmpg1.png';
import Auth from '../../Auth/Auth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../../actions/auth';

export default function Homepage() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getProfile(history));
    }, [history]);

    return (

        <div className="Homepage">
            <div className="auth-wrapper">
                <Auth />
            </div>
            <div className="background">
                <img src={bcg} />
            </div>
        </div>

    );
}
