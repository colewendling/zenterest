import React from 'react';




class Greeting extends React.Component {

   render() {
    const { openModal } = this.props;
    return (
        <div className="header-container">
                <div className="header-icon">
                <img className="favicon-medium" src={window.logoURL} alt="favicon" />
                </div>
               
                <div className="header-buttons">
                    <button className="red-button" onClick={() => openModal('login')}>Login</button>
                    <button className="grey-button" onClick={() => openModal('signup')}>Signup</button>
                </div>
        </div>
    );
   }
 };

export default Greeting;
