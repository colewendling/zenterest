import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   debugger
  //   if (this.props.pins.length !== prevProps.pins.length) {
  //     // this.fetchData(this.props.userID);
  //   }
  // }

  render() {
    const pin = this.props.pins[this.props.id]
    return (
      <div className='pin-show'>
        <div className='pin-show-left'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
        <div className='pin-show-right'>
        <div className='pin-show-info-container'>
          <h1 className='pin-show-title'>{pin.title}</h1>
          <hr />
          <p className='pin-show-description'>{pin.description}</p>
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