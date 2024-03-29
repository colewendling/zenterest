import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPin, deletePin, fetchAllPins } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchAllBoards } from '../../actions/board_actions';
import PinShow from './pin_show';

const mapStateToProps = (state) => {
  return ({
    pins: state.entities.pins,
    boards: state.entities.boards,
    currentUser: state.entities.users[state.session.currentUser],
    boards: state.entities.boards,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  deletePin: pinId => dispatch(deletePin(pinId)),
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));