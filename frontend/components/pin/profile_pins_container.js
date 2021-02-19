import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePins from './profile_pins';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: Number(ownProps.match.params.userId),
    currentUser: state.session.currentUser,
    // user: state.entities.users[Number(ownProps.match.params.userId)]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllUserBoards: userId => dispatch(fetchAllUserBoards(userId)),
  openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePins));