import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './signup_form.jsx';

const mapStateToProps = ({ errors }) => {
    return {
       user: {email: '', password: ''},
       errors: Object.values(errors.session)
    };
};

const mapDispatchToProps = dispatch => {
    return {
       login: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
