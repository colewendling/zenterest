import React from 'react';


class PinShow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pin = this.props.pins[this.props.id]
    return (
    
      <div className='pin-show'>
    
        <div className='pin-show-image'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
        <div className='pin-show-info-container'>
          <h1 className='pin-show-title'>{pin.title}</h1>
          <hr />
          <p className='pin-show-description'>{pin.description}</p>
          <button></button>
        </div>
      </div>
    
    );
  }
}

export default PinShow;