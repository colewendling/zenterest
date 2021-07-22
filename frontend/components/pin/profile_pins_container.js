import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePins from './profile_pins';
import { fetchAllPins, fetchPin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';

import { fetchAllBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    pins: Object.values(state.entities.pins), 
    boards: state.entities.boards,
    currentUser: state.session.currentUser,
    user: Object.values(state.entities.users)[0],
    board: Object.values(state.entities.boards)[0]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  requestPin: (pinId) => dispatch(requestPin(pinId)),
  getUserBoards: (userId) => dispatch(getUserBoards(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllBoards: () => dispatch(fetchAllBoards()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePins));