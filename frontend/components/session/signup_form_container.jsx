import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form.jsx';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        user: { email: '', password: '' },
        errors: Object.values(errors.session)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
