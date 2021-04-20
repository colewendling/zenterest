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
        <button className='modal-close-x' onClick={() => { this.props.closeModal() }}>X</button>
        <h1 className='board-show-title'>{board.title}</h1>
        <p className='board-show-description'>{board.description}</p>
        <hr />
        <div className='board-show-container'>
          <div className='pin-index-container'>
            {board.pins.map((pin)=> 
              <a key={pin.id} onClick={() => this.props.openModal(['pinShow', pin.id])} >
              <div className='pin-index-item-container'>
                <div className='pin-index-item-image'>
                  <img src={pin.imageUrl} alt={pin.title} />
                </div>
              </div>
              </a>
            )}
          </div>
        </div>

        <button className="board-delete-button" onClick={() => {
          this.props.deleteBoard(board.id);
          this.props.closeModal();
          window.location.reload();
          }}>Delete
        </button>
      </div>
    );
  }
}

export default BoardShow;