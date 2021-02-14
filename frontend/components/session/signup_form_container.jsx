import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import {  openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        form: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        switchForm: (
        <h1 onClick={() => dispatch(openModal('login'))} className="switch-form-link">
          Need an account? Sign up now
        </h1>)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
