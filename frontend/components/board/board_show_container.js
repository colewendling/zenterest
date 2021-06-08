import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchBoard, deleteBoard, fetchAllBoards} from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.currentUser],
    boards: state.entities.boards,
    board: state.entities.boards[state.ui.modal[1]]
  })
}

const mapDispatchToProps = dispatch => ({
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));