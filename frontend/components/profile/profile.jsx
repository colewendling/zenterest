import { red } from '@material-ui/core/colors';
import { SignalWifi4BarLockSharp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  render() {
    
    const user = this.props.currentUser;
    if (!user) return <div>Current User is Null</div>;
    return (
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
        </div>

        <div className="profile-btn-container">
          <Link to={`/users/${this.props.currentUser.id}/boards`}><button id="b-button">Boards</button></Link>
          <Link to={`/users/${this.props.currentUser.id}/pins`}><button id="p-button" >Pins</button></Link>
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
      </div>
    )
  }
}
export default Profile;