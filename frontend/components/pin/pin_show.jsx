import React from 'react';


class PinShow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pin = this.props.pins[this.props.id]
    return (
      // <div className="create-modal-container">
      <div className='pin-show-container'>
      {/* <h1 className='pin-show-title'>Pin Show</h1> */}
        <div className='pin-show-image-container'>
          <img className='pin-show-image' src={pin.imageUrl} alt={pin.title} />
        </div>
        <div className='pin-show-info-container'>
          <h2 className='pin-show-title'>{pin.title}</h2>
          <p className='pin-show-description'>{pin.description}</p>
        </div>
      </div>
    // </div>
    );
  }
}

export default PinShow;