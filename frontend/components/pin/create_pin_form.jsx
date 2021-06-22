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
    this.selectListItem = this.selectListItem.bind(this);
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


  toggleClass() {
    const element = document.getElementById("board-li");
    element.classList.toggle("red-boy");
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

  selectListItem(id) {
    this.setState({ board_id: id});
    event.target.style.color = "red";
  }

  render() {
    return (
      <div className="create-modal-container">
        <button className='form-modal-close-x' onClick={() => { this.props.closeModal() }}>X</button>
        <svg className="board-list-arrow">
          <path class="a1" d="M0 0 L30 22 L60 0"></path>
          <path class="a2" d="M0 20 L30 42 L60 20"></path>
          <path class="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
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

          <div className='create-bottom'>
            <div className='create-right'>
              <h2 className="input-label">Select Board:</h2>
              <div className='board-select-list'>
                {this.props.boards.map(board => 
                <div
                  className='board-li'
                  onClick={() => this.selectListItem(board.id)}
                  key={board.id}
                  >
                  {board.title}
                </div>
                ).reverse()}
              </div>
            </div>
            <div className='create-left'>
              
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
              
              <button className='create-button'>Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePinForm;