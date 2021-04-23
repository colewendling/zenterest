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
      url:'',
      author_id: '',
      board_id: '',
      imageFile: null,
      imageUrl: null
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  
  handleFile(e) {
    // this.setState({ imageFile: e.target.files[0] });
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
          this.setState({ imageFile: file, imageUrl: fileReader.result });
      }
      if (file) {
          fileReader.readAsDataURL(file);
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[author_id]', this.state.author_id);
    formData.append('pin[board_id]', this.state.board_id);
    formData.append('pin[image]', this.state.imageFile);
    
    this.props.createPin(formData)
      .then((action) => {
        this.props.history.push(`/users/${action.pin.author_id}/pins/${action.pin.id}`);
        this.props.closeModal();
      })
  }


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
                placeholder="Add pin title here."
                onChange={this.update('title')}
              />
            </label>
            <h2 className="input-label">Description:</h2>
            <label className="create-input-item">
              <textarea
                className="create-input-item-description"
                type="text"
                value={this.state.description}
                placeholder="Briefly describe your new pin."
                onChange={this.update('description')}
              />
            </label>
            <h2 className="input-label">Insert Image:</h2>

              <label>Upload Image Here</label>
              <input type="file" onChange={this.handleFile}/>
            


       
          </div>

          <div className="create-nav">
           
            <div className="bt">

              <button className='grey-button'>Create</button>
            </div>

          </div>
        </form>

      </div>
    );
  }
}


export default withRouter(CreatePinForm);