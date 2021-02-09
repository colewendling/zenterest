import React from 'react';




class Greeting extends React.Component {

//    sessionLinks() {
//         <nav>
//             <button onClick={() => this.props.openModal('login')}>Login</button>
//             <button onClick={() => this.props.openModal('signup')}>Signup</button>
//         </nav>
//    };

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
