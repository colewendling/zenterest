import React from "react";
import Modal from './modal/modal';
import { Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import NavBar from "./navbars/nav_internal_container";
import NavSplash from './navbars/nav_splash_container';
import Profile from '../components/profile/profile_container';
import BoardShow from './board/board_show';
import ProfilePins from '../components/pin/profile_pins_container';



const App = () => (
<div> 
  <AuthRoute exact path='/' component={NavSplash} /> 
  <ProtectedRoute path='/' component={NavBar} /> 
  <Modal />

  <Switch>
    <ProtectedRoute exact path='/users/:userId' component={Profile} />
    <ProtectedRoute exact path='/users/:userId/boards' component={Profile} />
    <ProtectedRoute exact path='/users/:userId/boards/:boardId' component={BoardShow} />
    <ProtectedRoute exact path='/users/:userId/pins' component={ProfilePins} />
  </Switch>

</div>
);
           
export default App;
        
       

 
