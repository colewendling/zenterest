import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import ProfileBoards from './profile_boards';
import { fetchUserBoards} from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: state.entities.users[Number(ownProps.match.params.userId)],
    boards: state.entities.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  // fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  fetchUserBoards: (userId) => dispatch(fetchUserBoards(userId)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileBoards));