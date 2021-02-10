import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    
   render() {
    const { currentUser, logout } = this.props;
    return (
     <div>
           <div> 
             <Link to="/login"> 
                <button onClick={() => openModal('login')}>Login</button>
             </Link>
           </div>
            <div> 
             <Link to="/signup"> 
                <button onClick={() => openModal('signup')}>Signup</button>
            </div>
      </div>
    );
   }
};

export default NavBar;