import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

class ProfilePins extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  editBoard(event) {
    eventpreventDefault();
    this.props.history.push('/profile/edit');
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

        <div className="profile-nav">
          <div className="profile-header">
            <div className="user-circle">
              <h1 className="user-letter">{(this.props.currentUser.username)[0]}</h1>
            </div>
            <h1 className="user-name">{this.capitalize(this.props.currentUser.username)}</h1>
            <h4 className="user-handle">@{(this.props.currentUser.username)}</h4>
            <div className="user-follows-container">
              <h4 className="user-follows">0 followers · 0 following</h4>
            </div>
            <div className="profile-btn-container">
              <Link to={`/users/${this.props.currentUser.id}/boards`} className="a-button"><button>Boards</button></Link>
              <Link to={`/users/${this.props.currentUser.id}/pins`} className="b-button"><button>Pins</button></Link>
            </div>
          </div>
        </div>

        <div className="plus-button-container">
          <div className="dropdown">
            <button className='dropbtn'><i className="fa fa-plus"></i></button>
            <div className="dropdown-content">
              <a onClick={() => this.props.openModal('createPin')}>Create Pin</a>
              <a onClick={() => this.props.openModal('createBoard')}>Create Board</a>
            </div>
          </div>
        </div>

        <div className='pin-index-container'>
          <div className="row">
            <div className="column">
              {allPins.slice(0, 8)}
            </div>
            <div className="column">
              {allPins.slice(8, 17)}

            </div>
            <div className="column">
              {allPins.slice(17, 24)}

            </div>
            <div className="column">
              {allPins.slice(24, 31)}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfilePins;