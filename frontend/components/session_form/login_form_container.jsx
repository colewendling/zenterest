// import { connect } from 'react-redux';
// import React from 'react';
// import { login } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import SessionForm from './session_form';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'login',
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (user) => dispatch(login(user)),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('signup'))}>
//                 Signup
//             </button>
//         ),
//         closeModal: () => dispatch(closeModal())
//     };
// };

import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);