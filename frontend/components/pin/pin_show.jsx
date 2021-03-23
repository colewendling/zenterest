import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pin = this.props.pins[this.props.id]
    const board = this.props.boards[pin.board_id]
    return (
      <div className='pin-show'>
        <button className='modal-close-x' onClick={() => { this.props.closeModal() }}>X</button>
        <i className='fa fa-angle-left' id='board-back' onClick={() => { this.props.openModal(['boardShow', pin.board_id])}}></i>
        <button className="pin-delete-button" onClick={() => {
          this.props.deletePin(pin.id)
          this.props.closeModal()
          window.location.reload();
        }}>Delete
        </button>
        <div className='pin-show-left'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
        <div className='pin-show-right'>
          <div className='pin-show-info-container'>
            <div>
              <h1 className='pin-show-title'>{pin.title}</h1>
              <hr />
            </div>
            <div>
              <p className='pin-show-description'>{pin.description}</p>
              <hr />
            </div>
            <i className='pin-show-board-link' onClick={() => this.props.openModal(['boardShow', pin.board_id])}>Board | {board.title}</i>    
          </div>
        </div>
      </div>
    );
  }
}

export default PinShow;