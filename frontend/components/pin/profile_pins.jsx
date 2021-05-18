import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import Profile from '../profile/profile';

class ProfilePins extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
    this.props.fetchAllBoards();
    this.props.fetchUser(this.props.userId);

    document.getElementById("b-button").style.background = "white";
    document.getElementById("b-button").style.color = "black";
    document.getElementById("p-button").style.background = "black";
    document.getElementById("p-button").style.color = "white";
  }

  render() {
    const { user, pins } = this.props;
    // const user  = this.props.currentUser;
    // if (!user) return <div>Current User is Null</div>;
    // const {pins}  = this.props;
// debugger
    let userPinsArray = Object.values(pins).filter(pin => {
      return pin.author_id === user.id
    })
    
    const userPins = pins.map((pin, idx)=> (
      <PinIndexItem 
      key={idx} 
      id={pin.id}
      pin={pin} 
      openModal={this.props.openModal}
      />
      ))
      // debugger
    return (
      <div className="profile-container">
        <div className='pin-index-container'>
          {userPins.reverse()}
        </div>
      </div>
    )
  }
}
export default ProfilePins;