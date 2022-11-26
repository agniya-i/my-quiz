import React, { Component, useEffect, FC } from 'react';
// import './style.less';
// import bcg from '../../../img/hmpg1.png';
// import Auth from '../../Auth/Auth';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getProfile } from '../../../actions/auth';
// const dispatch = useDispatch();
// const history = useHistory();

// useEffect(() => {
//     dispatch(getProfile(history));
// }, [history]);

const Homepage: FC = () => {
    return (
        <div className="Homepage" >
            <div className="auth-wrapper" >
                {/* <Auth /> */}
            </div>
            <div className="background" >
                HELLO
                {/* <img src={bcg} /> */}
            </div>
        </div>

    );
}


export default Homepage;