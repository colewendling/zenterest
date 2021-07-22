import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import CreatePinForm from './create_pin_form';

const mapStateToProps = state => {
  return ({
  currentUser: state.session.currentUser,
  user: Object.values(state.entities.users)[0],
  boards: Object.values(state.entities.boards),
  // boards: state.entities.boards,
  })
}

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
  closeModal: () => dispatch(closeModal()),
  createPin: (pin) => dispatch(createPin(pin))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePinForm));