import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  editBoard(event) {
    eventpreventDefault();
    this.props.history.push('/profile/edit');
  }

  render() {
    
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
              <Link to={`/users/${this.props.currentUser.id}/boards`} className="b-button"><button>Boards</button></Link>
              <Link to={`/users/${this.props.currentUser.id}/pins`} className="a-button"><button>Pins</button></Link>
        </div>
      </div>

        </div>

        <div className="plus-button-container">
            <div className="dropdown">
            </div>
        </div>
  <div className="b-row">
      <div className="b-column">
            <div className='b-container'>
              <div className='b-img'>
                <img src="https://media0.giphy.com/media/f9SgDMEBslfqTPWoIM/giphy.gif" className="b-img" />
                <div></div>
                <div>
                <div></div>
                </div>
              </div>
              <div className="b-title">Zen Delight</div>
              <div className="pin-count">Pins</div>
            </div>
      </div>
      <div className="b-column">
            <div className='b-container'>
              <div className='b-img'>
                <img src="https://i.pinimg.com/564x/b1/5b/48/b15b48a21546a2520f033a148f70294a.jpg" className="b-img" />
                <div>
                </div>
              </div>
              <div className="b-title">Zen Ideas</div>
              <div className="pin-count">Pins</div>
            </div>
      </div>
      <div className="b-column">
            <div className='b-container'>
              <div className='b-img'>
                <div></div>
                <div>
                </div>
              </div>
              <div className="b-title">Zen Inspiration</div>
              <div className="pin-count">Pins</div>
            </div>
      </div>
</div>
    </div>
    )
  }
}
export default Profile;