import React from 'react';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      author_id: this.props.currentUser,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state).then(this.props.closeModal)
      .then(() => this.props.fetchAllBoards())
  }

  render() {
    return (
      <div className="create-modal-container">
        <button className='form-modal-close-x' onClick={() => { this.props.closeModal() }}>X</button>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
        <h1 className='create-text'>Create Board</h1>
        <form onSubmit={this.handleSubmit} className="create-form">
          <h2 className="input-label">Title:</h2>
          <label className="create-input-item">
            <input
              className="create-input-item-title"
              type="text"
              value={this.state.title}
              placeholder="Add board title here..."
              onChange={this.update('title')}
            />
          </label>
          <h2 className="input-label">Description:</h2>
          <label className="create-input-item">
            <textarea
              className="create-input-item-description"
              type="text"
              value={this.state.description}
              placeholder="Describe your new board..."
              onChange={this.update('description')}
            />
          </label>
          <div className='create-button-container'>
            <button className='create-button'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBoardForm;