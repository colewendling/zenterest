import React from "react";
import NavSplashContainer from './navbars/nav_splash_container';
import Modal from './modal/modal';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NavBarContainer from "./navbars/nav_internal_container";


const App = () => (
<div> 
  <div>
    <Modal />
    <header>
    </header>
  </div>
  <AuthRoute exact path='/' component={NavSplashContainer} />
  <ProtectedRoute exact path='/home' component={NavBarContainer} />
  <div>
      <img src={window.animation} className="animation" />
  </div>
  <Switch>
  </Switch>
</div>
);
           
export default App;
        
       

 
