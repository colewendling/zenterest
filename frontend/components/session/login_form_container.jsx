import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
       errors: errors.session,
       form: 'login'
    };
};

const mapDispatchToProps = dispatch => {
    return {
       login: user => dispatch(login(user)),
       closeModal: () => dispatch(closeModal()),
       switchForm: (
        <h1 onClick={() => dispatch(openModal('signup'))} className="switch-form-link">
          Need an account? Sign up now
        </h1>
       )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
