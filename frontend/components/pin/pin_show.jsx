import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pin = this.props.pins[this.props.id]
    // debugger
    return (
      <div className='pin-show'>
        <button className='modal-close-x' onClick={() => {this.props.closeModal()}}>X</button>
        <div className='pin-show-left'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
        <div className='pin-show-right'>
        <div className='pin-show-info-container'>
          <h1 className='pin-show-title'>{pin.title}</h1>
          <hr />
          <p className='pin-show-description'>{pin.description}</p>
          <hr />
            <i onClick={() => this.props.openModal(['boardShow', pin.board_id])} class="fas fa-arrow-right"></i>
        </div>
          <div className='pin-delete-button-container'>
            <button className="pin-delete-button" onClick={() => {
                this.props.deletePin(pin.id)
                this.props.closeModal()
                window.location.reload();
              }}>Delete
            </button>
          </div>
      </div>
    </div>
    );
  }
}

export default PinShow;