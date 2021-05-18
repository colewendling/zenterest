import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePins from './profile_pins';
import { fetchAllPins, fetchPin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: Object.values(state.entities.users)[0],

    pins: Object.values(state.entities.pins), 
    pin: state.entities.pins[ownProps.match.params.pinId],
    board: Object.values(state.entities.boards)[0],
    boards: state.entities.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  openModal: modal => dispatch(openModal(modal)),
  // requestPin: (pinId) => dispatch(requestPin(pinId)),
  // getUserBoards: (userId) => dispatch(getUserBoards(userId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePins));