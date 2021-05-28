import React from 'react';

class CreatePinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url:'url',
      author_id: 1,
      board_id: 1,
      imageFile: null,
      imageUrl: null
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    
  }


  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
      fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }
      if (file) {
      document.getElementsByClassName("input-button")[0].style.background = "#efefef";
      document.getElementsByClassName("input-button")[0].style.color = "#333333";
      document.getElementsByClassName("create-button")[0].style.background = "green";
      document.getElementsByClassName("create-button")[0].style.color = "white";
      fileReader.readAsDataURL(file);
    }
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
    
    this.props.createPin(formData)
      .then((action) => {
        // this.props.history.push(`/users/${action.pin.author_id}/pins/${action.pin.id}`);
        location.reload();
        // this.props.closeModal();
      })
  }





  render() {


    return (
      <div className="create-modal-container">
        <h1 className='create-text'>Create Pin</h1>
        <form onSubmit={this.handleSubmit} className="create-form">

          <h2 className="input-label">Title:</h2>
          <label className="create-input-item">
            <input
            className="create-input-item-title"
            type="text"
            value={this.state.title}
            placeholder="Add pin title here..."
            onChange={this.update('title')}
            />
          </label>

          <h2 className="input-label">Description:</h2>
          <label className="create-input-item">
            <textarea
            className="create-input-item-description"
            type="text"
            value={this.state.description}
            placeholder="Describe your new pin..."
            onChange={this.update('description')}
            />
          </label>

          {/* <h2 className="input-label">Insert Image:</h2> */}
          {/* <label className='upload-image'> */}
            <div className='file-input'>
            <input
              
              className='file'
              // placeholder="Drag files or click here"
              type="file"
              id='file'
              onChange={this.handleFile}  
              // required="required"
            />
            <label className='input-button' htmlFor='file'>
              Select file
              <p className='file-name'></p>
            </label>
            {/* <p>Drag files or click here</p> */}
          </div>
          
          
           <div className='create-button-container'>
              <button className='create-button'>Create</button>
           </div>
        
          
        </form>
      </div>
    );
  }
}

export default CreatePinForm;