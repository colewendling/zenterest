import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;






//React
// import React from 'react';
// import ReactDOM from 'react-dom';
// //Components
// import Root from './components/root';
// import configureStore from './store/store';


// document.addEventListener('DOMContentLoaded', () => {
//     let store;
//     if (window.currentUser) {
//         const preloadedState = { session: { currentUser: window.currentUser } };
//         store = configureStore(preloadedState);
//         delete window.currentUser;
//     } else {
//         store = configureStore();
//     }
//     const root = document.getElementById('root');
//     ReactDOM.render(<Root store={store} />, root);
// });