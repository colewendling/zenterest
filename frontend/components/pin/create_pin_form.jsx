import React from 'react';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      author_id: 1,
      board_id: 1,
      imageFile: null,
      imageUrl: null,
    };
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  updateBoard() {
    return (e) => {
      this.setState({ board_id: e.target.value });
      this.showMenu()
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
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
      document.getElementsByClassName("create-button")[0].style.background = "#e60023";
      document.getElementsByClassName("create-button")[0].style.color = "white";
      fileReader.readAsDataURL(file);
    }
  }

  // boardFromTitle(boardTitle) {
  //   let currentUserBoards = this.props.currentUser.boards
  //   let board = currentUserBoards.filter(board => {
  //     return Object.values(board)[0].title === boardTitle
  //   })
  //   return Object.values(board[0])[0];
  // }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[author_id]', this.state.author_id);
    formData.append('pin[board_id]', this.state.board_id);
    formData.append('pin[image]', this.state.imageFile);

    document.getElementsByClassName("loader")[0].style.opacity = "90%";
    document.getElementsByClassName("create-modal-container")[0].style.background = "grey";
    document.getElementsByClassName("create-input-item")[0].style.opacity = "5%";
    document.getElementsByClassName("create-input-item")[1].style.opacity = "5%";
    document.getElementsByClassName("input-label")[0].style.opacity = "20%";
    document.getElementsByClassName("input-label")[1].style.opacity = "20%";
    document.getElementsByClassName("input-button")[0].style.opacity = "20%";
    document.getElementsByClassName("create-button")[0].style.opacity = "20%";
    this.props.createPin(formData)
    .then((action) => {
      location.reload();
    })
  }

  render() {
    // const { user } = this.props;
    // const boardTitles = user.boards.map((board, idx) => {
    //   return <div className="show-pin-select-board-title" onClick={this.handleSelect} key={Object.values(board)[0].id}>{Object.values(board)[0].title}</div>;
    // })
    // const imagePreview = this.state.imageUrl ? <img src={this.state.imageUrl} alt='pin image preview' /> : null;
    // const imagePreviewClass = this.state.imageUrl ? 'show' : '';
   
    return (
      <div className="create-modal-container">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
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

          <div className='file-input'>
            <input
              className='file'
              type="file"
              id='file'
              onChange={this.handleFile}  
            />
            <label className='input-button' htmlFor='file'>
              Select file
              <p className='file-name'></p>
            </label>

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