import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard } from '../../action/board_actions';
import { closeModal } from '../../action/modal_actions';

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
    this.props.createBoard(this.state).then(() => this.props.closeModal());
  }


  handleClose(event) {
    event.preventDefault();
    this.props.closeModal();
  }


  render() {
    return (
      <div>TEST</div>
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