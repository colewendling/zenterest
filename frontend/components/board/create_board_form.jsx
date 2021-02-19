import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';

class CreateBoardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.createBoard(this.state)
    .then((action) => {
    this.props.history.push(`/users/${action.board.author_id}/boards/${action.board.id}`);
    this.props.closeModal();
  })
  }

  handleClose(event) {
    event.preventDefault();
    this.props.closeModal();
  }


  render() {
    return (


      <div className="create-modal-container">

        
          <h1 className='create-text'>Create board</h1>
        

        <form className="create-form">
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
          </div>
        </form>

        <div className="create-nav">
            {/* <div className="bt">
              <button onClick={this.props.closeModal} className='grey-button'>Cancel</button>
          </div> */}
          <div className="bt">

              <button onClick={this.handleClose} className='grey-button'>Create</button>
          </div>

          </div>






      </div>
    );
  }
}

const mapStateToProps = state => ({
  author_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createBoard: (board) => dispatch(createBoard(board)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm));