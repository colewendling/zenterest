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

  render() {
    return (
    <div className="nav-box">

      <div className="nav-left">
        <Link to='/'><img src={window.logoURL} className="nav-icon" /></Link>
        <button className="black-button" href='/home'>Home</button>
      </div>

      <div className="nav-right">
        <div className="dropdown">
          <button className="dropbtn"><i className="fa fa-bars"></i></button>
          <div className="dropdown-content">
            <a onClick={this.handleLogout}>Log out</a>
          </div>
        </div>
      </div>
    </div >
    );
  }
};

export default withRouter(NavInternal);





