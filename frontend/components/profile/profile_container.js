import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser} from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: Object.values(state.entities.users)[0],
    pinsCount: state.entities.pins.length,
    boardsCount: state.entities.boards.length,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));