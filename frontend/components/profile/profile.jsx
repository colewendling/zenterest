import React from 'react';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  render() {
    
    return (
    <div className="profile-container">

      
        <div className="user-circle" />
        <h1 className="user-name">{this.capitalize(this.props.currentUser.username)}</h1>
        <h7 className="user-handle">@{(this.props.currentUser.username)}</h7>
        <div className="user-follows-container">
            <h7 className="user-follows">0 followers</h7>
            <span>·</span>
            <h7 className="user-follows">0 following</h7>
        </div>
      
        <div className="plus-button-container">
            <div className="plus-button-dropdown">
              <button className='plus-button'><i className="fa fa-plus"></i></button>
            </div>
        </div>

        <div className="profile-link-buttons-container">
            <div className="profile-link" />
            <div className="profile-link" />
        </div>

        <div className="profile-bottom">
          <div className="board-container">

          </div>
        </div>
    </div>
    )
  }
}
export default Profile;