import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard, fetchUserBoards } from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateBoardForm from './create_board_form';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser],
  boards: state.entities.boards,
})

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
  closeModal: () => dispatch(closeModal()),
  createBoard: (board) => dispatch(createBoard(board)),
  fetchUserBoards: (userId) => dispatch(fetchUserBoards(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm));