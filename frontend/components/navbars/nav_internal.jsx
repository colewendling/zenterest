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
      <div className="search">
        </div>
      <div className="internal-nav-right">
          
            <div className="internal-text-link">
            {/* <button onClick={() => this.props.history.push(`/profile`)} className="profile-link"> */}

            <button onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}/boards`)} className="profile-link">
                Welcome {this.capitalize(this.props.currentUser.username)}!
              </button>
            </div>
          <div className="dropdown">
            <button className="dropbtn"><i className="fa fa-bars"></i></button>
            <div className="dropdown-content">
              <a onClick={this.handleLogout}>Log out</a>
              <a onClick={() => this.props.history.push(`/users/:userId/boards`)}>{this.capitalize(this.props.currentUser.username)}'s Boards</a>
              <a onClick={() => this.props.history.push(`/users/:userId/pins`)}>{this.capitalize(this.props.currentUser.username)}'s Pins</a>
            </div>
        </div>
      </div>
    </div>
    
    );
  }
};

export default withRouter(NavInternal);





