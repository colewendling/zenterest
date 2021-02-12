import React from "react";
import Greeting from './greeting/greeting_container';
import Modal from './modal/modal';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NavBarContainer from "./navbar/nav_bar_container";


const App = () => (
    <div>
        <header className="header">
          <AuthRoute exact path='/' component={Greeting} />
        </header>
      <Switch>
          <ProtectedRoute exact path='/home' component={NavBarContainer} />
      </Switch>
        <Modal />
    </div>
);
           
export default App;
        
       

 
