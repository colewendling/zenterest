import React from 'react';
import BoardIndexItem from './board_index_item';

class ProfileBoards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchAllPins();
    this.props.fetchUser(this.props.userId);
    document.getElementById("p-button").style.background = "white";
    document.getElementById("p-button").style.color = "black";
    document.getElementById("b-button").style.background = "black";
    document.getElementById("b-button").style.color = "white";
  }

  render() {
    const { user, boards } = this.props;
    let userBoardsArray = Object.values(boards).filter(board => {
      return board.author_id === user.id
    })
    const userBoards = userBoardsArray.map((board, idx) => {
      return <BoardIndexItem 
      key={idx} 
      id={board.id} 
      board={board} 
      openModal={this.props.openModal} 
      />
    })
    return (
      <div className='board-index-spacer'>
        <div className='board-index-container'>
          {userBoards.reverse()}
        </div>
      </div>
    )
  }
}

export default ProfileBoards;