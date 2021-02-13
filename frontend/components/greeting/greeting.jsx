import React from 'react';
import {Link} from 'react-router-dom'



class Greeting extends React.Component {

   render() {
    const { openModal } = this.props;
    return (


        <div className="nav-bar">
            <div className="nav-bar-child-left">
               {/* <Link to='/'><img src={window.znRedURL} className="zn" /></Link> */}
               <Link to='/'><img src={window.znRedURL} className="zn" /></Link>
               <h3>Zenterest</h3>
            </div>
            <nav className="nav-bar-child-right">
                    <button className="red-button" onClick={() => openModal('login')}>Login</button>
                    <button className="grey-button" onClick={() => openModal('signup')}>Signup</button>
            </nav>
        </div>
    );
   }
 };

export default Greeting;
