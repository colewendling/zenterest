import React from 'react';




class Greeting extends React.Component {

   render() {
    const { openModal } = this.props;
    return (
        <div>
            <nav>
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
            </nav>
        </div>
    );
   }
 };

export default Greeting;
