import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards } from '../../actions/board_actions';
import ProfileBoards from './profile_boards';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: state.entities.users[Number(ownProps.match.params.userId)],
    board: state.entities.boards[ownProps.match.params.boardId],
    boards: state.entities.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllBoards:() => dispatch(fetchAllBoards()),
  openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileBoards));