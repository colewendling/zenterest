import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser} from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: Number(ownProps.match.params.userId),
    currentUser: state.session.currentUser,
    user: Object.values(state.entities.users)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));