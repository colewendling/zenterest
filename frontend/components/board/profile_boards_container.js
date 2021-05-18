import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllPins } from '../../actions/pin_actions';
import { fetchAllBoards } from '../../actions/board_actions';
import ProfileBoards from './profile_boards';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: Object.values(state.entities.users)[0],
    
    board: state.entities.boards[ownProps.match.params.boardId],
    boards: state.entities.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchAllBoards:() => dispatch(fetchAllBoards()),
  openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileBoards));