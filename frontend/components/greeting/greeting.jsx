import React from 'react';




class Greeting extends React.Component {

   render() {
    const { openModal } = this.props;
    return (
        <div>
            <header>
                <h1>Welcome to Zenterest!</h1>
                <button className="green-button" onClick={() => openModal('login')}>Login</button>
                <button className="red-button" onClick={() => openModal('signup')}>Signup</button>
            </header>
        </div>
    );
   }
 };

export default Greeting;
