import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import Profile from '../profile/profile';

class ProfilePins extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   debugger
  //   if (this.props.pins.length !== prevProps.pins.length) {
  //     // this.fetchData(this.props.userID);
  //   }
  // }

  componentDidMount() {
    this.props.fetchAllPins();
    this.props.fetchAllBoards();
    
    document.getElementById("b-button").style.background = "white";
    document.getElementById("b-button").style.color = "black";
    document.getElementById("p-button").style.background = "black";
    document.getElementById("p-button").style.color = "white";
  }

  render() {
    const user  = this.props.currentUser;
    if (!user) return <div>Current User is Null</div>;
    const {pins}  = this.props;
    const allPins = pins.map(pin => (
        <PinIndexItem key={pin.id} pin={pin} 
          openModal={this.props.openModal}
          id={pin.id}
        />
    ))
    return (
      <div className="profile-container">
        <div className='pin-index-container'>
          {allPins.reverse()}
        </div>
      </div>
    )
  }
}
export default ProfilePins;