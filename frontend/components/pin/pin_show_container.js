import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import { fetchBoard } from '../../actions/board_actions';
import { fetchAllUserBoards } from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps  = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pin: state.entities.pins[ownProps.match.params.pinId],
    pins: state.entities.pins,
    boards: state.session.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchAllUserBoards: (userId) => dispatch(fetchAllUserBoards(userId)),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);