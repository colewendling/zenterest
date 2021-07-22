import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.boards[this.props.id]
    return (
      <div className='pin-show'>
        {board.pins.map(pin => 
        <div>
          <div>
              {pin.title}
          </div>

            <img src={pin.imageUrl} />
              
       
          </div>
          
          )}
        {/* <div className='board-show-image'>
          <img src={board.imageUrl} alt={board.title} />
        </div>
        <div className='board-show-info-container'>
          <div className='board-delete-button-container'>
            <button className="board-delete-button" onClick={() => {
                this.props.deleteBoard(board.id)
                this.props.closeModal()
              }}>
            <i className="far fa-times-circle"></i>
            </button>
          </div>
          <h1 className='board-show-title'>{board.title}</h1>
          <hr />
          <p className='board-show-description'>{board.description}</p>
        </div> */}
      </div>
    );
  }
}

export default BoardShow;