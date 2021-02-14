import React from 'react';
import {Link} from 'react-router-dom'

class Greeting extends React.Component {
render() {
const { openModal } = this.props;
return (
<div className="nav-bar">
<div className="nav-bar-child-left">
<Link to='/'><img src={window.logoURL} className="nav-icon" /></Link> 
<h3 class="nav-title">Zenterest</h3>
</div>
<nav className="nav-bar-child-right">
<button className="red-button" onClick={() => openModal('login')}>Log in</button>
<button className="grey-button" onClick={() => openModal('signup')}>Sign up</button>
</nav>
</div>
);
}
};

export default Greeting;
