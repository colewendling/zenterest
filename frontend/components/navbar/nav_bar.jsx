import React from 'react';


class NavBar extends React.Component {
    
   render() {
  
   return (
      <div>
         <nav>
            <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
            <button className="grey-button" Link to="">Home</button>
            <button className="oarnge-button" onClick={this.props.logout}>Logout</button>
         </nav>
      </div>
   );
   }
};
export default NavBar;





