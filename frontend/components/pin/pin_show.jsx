import React from 'react';


class PinShow extends React.Component {

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {
    const pin = this.props.pins[this.props.id]
    return (
    
      <div className='pin-show'>
    
        <div className='pin-show-image'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
        <div className='pin-show-info-container'>
          <div className='pin-delete-button-container'>
          <button className="pin-delete-button" onClick={() => {
            this.props.deletePin(pin.id)
            this.props.closeModal()
            }}><i className="far fa-times-circle"></i></button>


            
          </div>
          <h1 className='pin-show-title'>{pin.title}</h1>
          <hr />
          <p className='pin-show-description'>{pin.description}</p>
       

        </div>

      </div>
    
    );
  }
}

export default PinShow;