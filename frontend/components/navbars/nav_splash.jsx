import React from 'react';
import {Link} from 'react-router-dom'

class NavSplash extends React.Component {
render() {
  const { openModal } = this.props;
  return (
    <div className="nav-box">
      <div className="nav-left-logo">
        <Link to='/'><img src={window.logoURL} className="nav-icon" /></Link> 
        <div className="nav-title-box">
          <Link to='/'><h3 className="nav-title">Zenterest</h3></Link>
        </div>
      </div>
      <div className="nav-right">
        <div className="text-links-box">
          <div className="text-link">
            <button className="link">About</button>
          </div>
          <div className="text-link">
            <button className="link">Business</button>
          </div>
          <div className="text-link">
            <button className="link">Contact</button>
          </div>
        </div>
        <div className="nav-button-box">
          <button className="red-button" onClick={() => openModal('login')}>Log in</button>
        </div>
        <div className="nav-button-box">
          <button className="grey-button" onClick={() => openModal('signup')}>Sign up</button>
        </div>
      </div>
    </div>
  );
  }
};

export default NavSplash;
