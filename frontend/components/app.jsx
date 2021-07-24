import React from "react";
import Modal from './modal/modal';
import { Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import NavBar from "./navbars/nav_internal_container";
import NavSplash from './navbars/nav_splash_container';
import Profile from '../components/profile/profile_container';

import ProfilePins from '../components/pin/profile_pins_container';
import ProfileBoards from '../components/board/profile_boards_container';

const App = () => (
<div> 
  <AuthRoute exact path='/' component={NavSplash} /> 
  <ProtectedRoute path='/' component={NavBar} /> 
  <ProtectedRoute path='/users/:userId' component={Profile} />
  <Modal />

  <Switch>
    <ProtectedRoute exact path='/users/:userId/boards' component={ProfileBoards} />
    <ProtectedRoute exact path='/users/:userId/pins' component={ProfilePins} />
  </Switch>
</div>
);
           
export default App;
        
       

 
