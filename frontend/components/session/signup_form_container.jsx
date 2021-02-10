import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form.jsx';

const mapStateToProps = ({ errors }) => {
    return {
        user: { email: '', password: '' },
        errors: Object.values(errors.session)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
