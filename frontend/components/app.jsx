import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Link } from 'react-router-dom';

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Navbar from "./navbar/nav_bar_container"
import Greeting from './greeting/greeting_container';
import Modal from './modal/modal';




const App = () => (
    <div>
        <header>
            <Navbar />
            <h1>Welcome to Zenterest!</h1>
            <AuthRoute path='/' component={Greeting} />
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </header>
        
        <Modal />
       

 
    </div>
);

export default App;