import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavInternal extends React.Component {
    
   render() {
  
   return (
     <div className="nav-box">
       <div className="nav-left-logo">
         <Link to='/'><img src={window.logoURL} className="nav-icon" /></Link>
         <div className="nav-title-box">
           
         </div>
         {/* <Link to='/home' className="black-button">Home</Link> */}
         <button className="black-button" href='/home'>Home</button>
       </div>

     </div>
   );
   }
};
export default NavInternal;





