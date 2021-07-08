import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { login, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {



    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser } 
        },
        session: { currentUser: window.currentUser }
      };
    store = configureStore(preloadedState)
    delete window.currentUser;
    } else {
      store = configureStore();
    }


    // const root = document.getElementById('root');
    // let preloadedState = undefined;
    // if (window.currentUser) {
    //   preloadedState = {
    //     session: {
    //       currentUser: window.currentUser
    //     }
    //   };
    // }
    // const store = configureStore(preloadedState);



    //testing
    
    window.login = login;
    window.logout = logout;
    window.state = store.getState;
    window.dispatch = store.dispatch; 
 
    ReactDOM.render(<Root store={store} />, root);

});