import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
       user: {email: '', password: ''},
       errors: Object.values(errors.session)
    };
};

const mapDispatchToProps = dispatch => {
    return {
       login: user => dispatch(login(user)),
       closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
