import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePins from './profile_pins';
import { fetchPin } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    pins: state.entities.pins,
    boards: state.entities.boards,
    currentUser: state.session.currentUser,
    user: Object.values(state.entities.users)[0],
    board: Object.values(state.entities.boards)[0]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchAllPins: () => dispatch(requestAllPins()),
  requestPin: (pinId) => dispatch(requestPin(pinId)),
  getUserBoards: (userId) => dispatch(getUserBoards(userId)),
  openModal: (modal) => dispatch(openModal(modal, boardId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePins));