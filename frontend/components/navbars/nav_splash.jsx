import React from 'react';
import {Link} from 'react-router-dom'

class NavSplash extends React.Component {

render() {
  const { openModal } = this.props;

  return (
    <div className="splash">
      <div className="nav-box">
        <div className="nav-left">
          <Link to='/'><img src={window.logoURL} className="nav-icon" /></Link> 
          <div className="nav-title-box">
            <Link to='/'><h3 className="nav-title">Zenterest</h3></Link>
          </div>
        </div>
        <div className="nav-right">
          <div className="text-links-box">
            <form action='https://wendling.io/' className="work-link">
                <button className="link" type='submit'>Work</button>
            </form>
            <form action='https://github.com/colewendling' className="text-link">
                <button className="link" type='submit'>Github</button>
            </form>
            <form action='https://www.linkedin.com/in/colewendling/' className="text-link">
                <button className="link" type='submit'>Linkedin</button>
            </form>
            </div>
          <div className="nav-button-box">
            <button className="red-button" onClick={() => openModal('login')}>Log in</button>
          </div>
          <div className="nav-button-box">
            <button className="grey-button" onClick={() => openModal('signup')}>Sign up</button>
          </div>
        </div>
      </div>

      <svg className="arrow">
        <path class="a1" d="M0 0 L30 22 L60 0"></path>
        <path class="a2" d="M0 20 L30 42 L60 20"></path>
        <path class="a3" d="M0 40 L30 62 L60 40"></path>
      </svg>
    
      <img src={window.animation} />
    </div>
    );
  }
};

export default NavSplash;
