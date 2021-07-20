import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => {
  return ({
    boards: state.entities.boards,
    currentUser: state.entities.users[state.session.currentUser],
    boards: state.entities.boards,
  })
}

const mapDispatchToProps = dispatch => ({
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));