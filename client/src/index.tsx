import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import './index.css';

// import { configureStore } from '@reduxjs/toolkit';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
// import ReduxPromise from "redux-promise";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
