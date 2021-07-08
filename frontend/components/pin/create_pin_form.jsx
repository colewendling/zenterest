import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions';

class CreatePinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url:'fakeurl',
      author_id: 1,
      board_id: 1,
      imageFile: null
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.uploadImage = this.uploadImage.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  
  handleFile(e) {
    this.setState({ imageFile: e.target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[url]', this.state.url);
    formData.append('pin[author_id]', this.state.author_id);
    formData.append('pin[board_id]', this.state.board_id);
    formData.append('pin[image]', this.state.imageFile);
    
    // if (this.state.imageFile) {

    // }
 
    this.props.createPin(formData)
      .then((action) => {
        this.props.history.push(`/users/${action.pin.author_id}/pins/${action.pin.id}`);
        this.props.closeModal();
      })
  }

  // handleClose(event) {
  //   event.preventDefault();
  //   this.props.closeModal();
  // }

  // uploadImage(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('pin[title]', this.state.title);
  //   if (this.state.imageFile) {

  //     formData.append('pin[image]', this.state.imageFile);
  //   }
  //   $.ajax({
  //     url: '/api/pins',
  //     method: 'POST',
  //     data: formData,
  //     contentType: false,
  //     processData: false
  //   });
  // }


  render() {
    return (


      <div className="create-modal-container">


        <h1 className='create-text'>Create Pin</h1>


        <form onSubmit={this.handleSubmit} className="create-form">
          <h2 className="input-label">Title:</h2>
          <div className="create-form-input-title">
            <label className="create-input-item">
              <input
                className="create-input-item-title"
                type="text"
                value={this.state.title}
                placeholder="Add board title here."
                onChange={this.update('title')}
              />
            </label>
            <h2 className="input-label">Description:</h2>
            <label className="create-input-item">
              <textarea
                className="create-input-item-description"
                type="text"
                value={this.state.description}
                placeholder="Briefly describe your new board."
                onChange={this.update('description')}
              />
            </label>
            <h2 className="input-label">Insert Image:</h2>

            {/* <form onSubmit={this.uploadImage}> */}
              <label>Upload Image Here</label>
            {/* <input type="file" onSubmit={this.uploadImage} /> */}
              <input type="file" onChange={this.handleFile}/>
              {/* <input type="submit" value="submitImage"/> */}
            {/* </form> */}


            {/* <label className="create-input-item">
              <input
                className="create-input-item-title"
                type="text"
                value={this.state.url}
                placeholder="Place an image here."
                onChange={this.update('title')}
              />
            </label> */}
          </div>

          <div className="create-nav">
            {/* <div className="bt">
                <button onClick={this.props.closeModal} className='grey-button'>Cancel</button>
              </div> */}
            <div className="bt">

              {/* <button onClick={this.handleClose} className='grey-button'>Create</button> */}
              <button className='grey-button'>Create</button>
            </div>

          </div>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  author_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createPin: (pin) => dispatch(createPin(pin)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePinForm));