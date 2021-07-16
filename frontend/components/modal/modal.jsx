import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateBoardForm from '../board/create_board_form';
import EditBoardForm from '../board/edit_board_form';
import CreatePinForm from '../pin/create_pin_form_container';
import PinShowContainer from '../pin/pin_show_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let pinId;

    if (typeof modal != 'string' ) {
      pinId = modal[1]
      modal = modal[0]
    }


    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'createBoard':
            component = <CreateBoardForm />;
            break;
        case 'editBoard':
            component = <EditBoardForm />;
            break;
        case 'createPin':
            component = <CreatePinForm />;
            break;
        case 'pinShow':
          component = <PinShowContainer 
            id={pinId}
          />;
          break;
      
      default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
