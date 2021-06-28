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
              {/* <button className='dropbtn'><i className="fa fa-plus"></i></button>
              <div className="dropdown-content">
                  <a onClick={() => this.props.openModal('createPin')}>Create Pin</a>
              </div>
              <div className="dropdown-content">
                  <a onClick={() => this.props.openModal('createBoard')}>Create Board</a>
              </div> */}
            </div>
        </div>
  <div className="b-row">
      <div className="b-column">
            <div className='b-container'>
              <div className='b-img'>
                <img src="https://media0.giphy.com/media/f9SgDMEBslfqTPWoIM/giphy.gif" className="b-img" />
                <div></div>
                {/* <img src="https://i.pinimg.com/originals/55/d4/88/55d4886ba2acde32ef0746f03b7c51a6.gif" className="b-img"/> */}
                <div>
                <div></div>
                  {/* <img src="https://i.pinimg.com/564x/3f/bc/95/3fbc95bae85e22d9a52f6b2b91d04922.jpg" className="b-img-r1"/>
                  <img src="https://i.pinimg.com/564x/d9/74/b4/d974b4021a08ba94d5c8c1e3025bc59b.jpg" className="b-img-r2"/> */}
                </div>
              </div>
              <div className="b-title">Zen Delight</div>
              <div className="pin-count">Pins</div>
            </div>
        
            {/* <img src="https://i.pinimg.com/564x/da/f2/9a/daf29ae3de18e7e9cb5bc3ae390d63d9.jpg" />
            <img src="https://i.pinimg.com/564x/3f/bc/95/3fbc95bae85e22d9a52f6b2b91d04922.jpg" />
            <img src="https://i.pinimg.com/564x/d9/74/b4/d974b4021a08ba94d5c8c1e3025bc59b.jpg" />
            <img src="https://i.pinimg.com/564x/dc/4e/26/dc4e26b12e24967e03a178db77cdd633.jpg" />
            <img src="https://i.pinimg.com/564x/ef/84/1e/ef841e46856babdd7b09ab6bd5608972.jpg" />
            <img src="https://i.pinimg.com/564x/f8/3e/bc/f83ebc158d7cc112f9127401cc3d2048.jpg" />
            <img src="https://i.pinimg.com/474x/cc/5d/27/cc5d27b7058980f949c118bb03231d5c.jpg" /> */}
            {/* <div className='b-container'>
              <div className='b-img'>
                <img src="https://i.pinimg.com/564x/f8/3e/bc/f83ebc158d7cc112f9127401cc3d2048.jpg"  className="b-img" />
                <div>
                  <img src="https://i.pinimg.com/564x/bd/d1/42/bdd1425d38b97cc792e2f4f866df3105.jpg" className="b-img-r1" />
                  <img src="https://i.pinimg.com/564x/bd/d1/42/bdd1425d38b97cc792e2f4f866df3105.jpg"className="b-img-r2" />
                </div>
              </div>
              <div className="b-title">Zen Paintings</div>
              <div className="pin-count">24 Pins</div>
            </div> */}
      </div>
      <div className="b-column">
            <div className='b-container'>
              <div className='b-img'>
                <img src="https://i.pinimg.com/564x/b1/5b/48/b15b48a21546a2520f033a148f70294a.jpg" className="b-img" />
                <div>
                  <div></div>
                  {/* <img src="https://24.media.tumblr.com/ba2bd6ba59437d7ba8634abbfec8fc9f/tumblr_n3mr675pUi1s60oo7o1_r1_500.gif" className="b-img-r1" />
                  <img src="https://i.pinimg.com/474x/32/7b/c2/327bc259ab44bb54c22b3ca8074135f1.jpg" className="b-img-r2" /> */}
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
                {/* <img src="https://i.pinimg.com/474x/bc/b1/16/bcb116dfe489d18cb0754f528642fdb5.jpg" className="b-img" /> */}
                <div>
                  <div></div>
                  {/* <img src="https://i.pinimg.com/474x/d7/1c/3e/d71c3e9326533f59f8b0fd8ab4cb2dce.jpg" className="b-img-r1" />
                  <img src="https://i.pinimg.com/564x/8a/4b/0b/8a4b0b6642fca0f01450a6f6ac176c04.jpg" className="b-img-r2" /> */}
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