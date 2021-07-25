import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.board.id).then(this.props.closeModal)
      .then(() => this.props.fetchAllBoards())
  }


  render() {
    const board = this.props.board
    return (
      <div className='board-show'>
        <h1 className='board-show-title'>{board.title}</h1>
      <hr />
      <div className='pin-index-container'>
        {board.pins.map((pin)=> 
          <a onClick={() => this.props.openModal(['pinShow', pin.id])} >
          <div className='pin-index-item-container'>
            <div className='pin-index-item-image'>
              <img src={pin.imageUrl} alt={pin.title} />
            </div>
          </div>
          </a>
          )}
      </div>
        {/* <div className='board-delete-button-container'>
          <button className="board-delete-button" onClick={this.handleSubmit}>Delete</button>
          <div className="plus-button-container">
            <div className="dropdown">
              <button className='dropbtn'><i className="fa fa-plus"></i></button>
              <div className="dropdown-content">
                <a onClick={() => this.props.openModal('createPin')}>Create Pin</a>
              </div>
            </div>
          </div>
        </div> */}

{/* 
        <div className='board-delete-button-container'>
          <button className="board-delete-button"
          onClick={this.handleSubmit}
          >Delete
          </button>
        </div> */}
          
        {/* <div className='board-show-image'>
          <img src={board.imageUrl} alt={board.title} />
        </div> */}

        {/* <div className='board-show-info-container'>
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