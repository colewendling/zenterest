import React from 'react';


class PinShow extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   title: '',
    //   description: '',
    //   url: 'url',
    //   author_id: 1,
    //   board_id: 1,
    //   imageFile: null,
    //   imageUrl: null
    // };
  
    // this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchPin(this.props.id);
  // }

  // update(field) {
  //   return event => this.setState({
  //     [field]: event.currentTarget.value
  //   });
  // }


  render() {
    const pin = this.props.pins[this.props.id]
    
    return (


      <div className="create-modal-container">
        <h1 className='create-text'>Pin Show</h1>
        <div className='pin-show-image'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
        <div>

        </div>
      </div>
    );
  }
}


export default PinShow;