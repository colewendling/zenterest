import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { Link } from 'react-router-dom';

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Navbar from "./navbar/nav_bar_container"
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';




const App = () => (
    <div>
        <Modal />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/' component={NavBarContainer} />
        
        <header>
            <Navbar />
            <h1>Welcome to Zenterest!</h1>
        </header>
        
        <GreetingContainer />
    </div>
);

export default App;