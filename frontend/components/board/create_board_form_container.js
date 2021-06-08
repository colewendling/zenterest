import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard, fetchAllBoards } from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateBoardForm from './create_board_form';

const mapStateToProps = ({ session }) => {
  return {
    author_id: session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  createBoard: (board) => dispatch(createBoard(board)),
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm));