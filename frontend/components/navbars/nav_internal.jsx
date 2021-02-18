import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavInternal extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }
  
  capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

  render() {
    return (
      
    <div className="nav-box">

      <div className="nav-left">
        <Link to='/home'><img src={window.logoURL} className="nav-icon" /></Link>
        <button className="black-button" href='/home'>Home</button>
      </div>

      <div className="internal-nav-right">
          
            <div className="internal-text-link">
               <button className="profile-link">Welcome {this.capitalize(this.props.currentUser.username)}!</button>
            </div>
            <div className="dropdown">
          <button className="dropbtn"><i className="fa fa-bars"></i></button>
          <div className="dropdown-content">
            <a onClick={this.handleLogout}>Log out</a>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
};

export default withRouter(NavInternal);




