import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePins extends React.Component {
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
              {/* <Link to='/pin-builder'><div>Create Pin</div></Link> */}
              {/* </div> */}

              {/* <a>Create Pin</a> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div></div>
            <img src="https://data.whicdn.com/images/135292552/original.gif" />
            <img src="https://i.pinimg.com/564x/d9/74/b4/d974b4021a08ba94d5c8c1e3025bc59b.jpg" />
            <img src="https://freight.cargo.site/w/450/i/71be907f0135c22d5ad117b35c0a24ba434d369ad917f971bc0c255175e68dcb/190712.gif" />
            <img src="https://i.pinimg.com/564x/3f/bc/95/3fbc95bae85e22d9a52f6b2b91d04922.jpg" />
            <img src="https://i.pinimg.com/564x/dc/4e/26/dc4e26b12e24967e03a178db77cdd633.jpg" />
            <img src="https://i.pinimg.com/564x/ef/84/1e/ef841e46856babdd7b09ab6bd5608972.jpg" />
            <img src="https://i.pinimg.com/564x/f8/3e/bc/f83ebc158d7cc112f9127401cc3d2048.jpg" />
          </div>
          <div className="column">
            <div></div>
            <img src="https://i.pinimg.com/564x/b1/5b/48/b15b48a21546a2520f033a148f70294a.jpg" />
            <img src="https://i.pinimg.com/originals/ef/69/f4/ef69f4d4f12831034423a74f102610db.gif" />
            <img src="https://i.pinimg.com/564x/66/29/eb/6629ebad8f062d64c0514512b1b0ae52.jpg" />
            <img src="https://i.pinimg.com/474x/32/7b/c2/327bc259ab44bb54c22b3ca8074135f1.jpg" />
            <img src="https://i.pinimg.com/564x/dd/1a/bd/dd1abda7f4848990319d3eba36d4a3aa.jpg" />
            <img src="https://media0.giphy.com/media/yoJC2pajKaLLlB8cpi/source.gif" />
            <img src="https://i.pinimg.com/474x/fc/08/cf/fc08cf177be4ce099a9a203719046b45.jpg" />
          </div>
          <div className="column">
            <div></div>
            <img src="https://i.pinimg.com/474x/df/8a/ce/df8ace7a82fd5696377877df84d35d6a.jpg" />
            <img src="https://freight.cargo.site/w/350/i/0c6f6ba78e5c30aeb6e6240af2dd114756dbdbdc0cbc83718f2646e71fa6f544/190717_small.gif" />
            <img src="https://i.pinimg.com/474x/d7/1c/3e/d71c3e9326533f59f8b0fd8ab4cb2dce.jpg" />
            <img src="https://i.pinimg.com/564x/8a/4b/0b/8a4b0b6642fca0f01450a6f6ac176c04.jpg" />
            <img src="https://i.pinimg.com/564x/3a/e6/da/3ae6da2d3d63cf0e3c6ff037e2780a1e.jpg" />
            <img src="https://i.pinimg.com/564x/05/f4/1e/05f41e5cd6b3bdb36f26098fba4e1a49.jpg" />
            <img src="https://i.pinimg.com/564x/bd/d1/42/bdd1425d38b97cc792e2f4f866df3105.jpg" />
          </div>
          <div className="column">
            <div></div>
            <img src="https://i.pinimg.com/originals/71/02/22/710222a5830181b0fe7e22fa07595fdb.gif" />
            <img src="https://i.pinimg.com/564x/07/61/04/076104df3eaf5d91d4d5201ffa313fe5.jpg" />
            <img src="https://i.pinimg.com/564x/aa/4d/30/aa4d309a9062f461134dd588e2725ec0.jpg" />
            <img src="https://i.pinimg.com/564x/4c/4b/00/4c4b006fcd3f8545935f811b9d2f5700.jpg" />
            <img src="https://media3.giphy.com/media/8UI85273lC1VzEgkyW/giphy.gif" />
            <img src="https://i.pinimg.com/474x/e2/a6/c1/e2a6c1ba6bd7287ac3b62030eb5d1489.jpg" />
          </div>
        </div>
      </div>
    )
  }
}
export default ProfilePins;