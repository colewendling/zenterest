import React from "react";
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NavBarContainer from "./navbar/nav_bar_container";


const App = () => (
<div> 
  <div>
    <Modal />
    <header>
    </header>
  </div>
  <AuthRoute exact path='/' component={GreetingContainer} />
  <ProtectedRoute exact path='/home' component={NavBarContainer} />
  <Switch>
  </Switch>
</div>
);
           
export default App;
        
       

 
