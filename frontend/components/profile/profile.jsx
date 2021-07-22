import React from 'react';

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
    )
  }
}
export default Profile;