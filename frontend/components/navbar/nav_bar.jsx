import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    

   return (
      <div>
         <Link to="/login">
            <button>
               <div>Log in</div>
            </button>
         </Link>
         <Link to="/signup">
            <button>
               <div>Sign Up</div>
            </button>
         </Link>
      </div>
   )
};
export default NavBar;





