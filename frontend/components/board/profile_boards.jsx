import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';
import Profile from '../profile/profile';


class ProfileBoards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchUser(this.props.userId);
    document.getElementById("p-button").style.background = "white";
    document.getElementById("p-button").style.color = "black";
    document.getElementById("b-button").style.background = "black";
    document.getElementById("b-button").style.color = "white";
  }

  // componentDidUpdate() {
  //   this.props.fetchAllBoards();
  //   this.props.fetchUser(this.props.userId);
  // }

 

  // capitalize(string) {
  //   return string[0].toUpperCase() + string.slice(1)
  // }

  render() {
    const { user, boards } = this.props;
    let userBoardsArray = Object.values(boards).filter(board => {
      return board.author_id === user.id
    })
    
    const userBoards = userBoardsArray.map((board, idx) => {
      return <BoardIndexItem id={board.id} openModal={this.props.openModal} key={idx} board={board} />
    })

    
    
    return (
      <div className="profile-container">

          {/* <div className="profile-nav"> 
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
              <Link to={`/users/${this.props.currentUser.id}/boards`} className="b-button"><button>Boards</button></Link>
              <Link to={`/users/${this.props.currentUser.id}/pins`} className="a-button"><button>Pins</button></Link>
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
          </div> */}

        {/* <Profile /> */}
        <div className='board-index-container'>
          {userBoards.reverse()}
        </div>
      </div>
    )
  }
}
export default ProfileBoards;