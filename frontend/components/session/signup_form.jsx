import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from "../greeting/greeting";


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            errors: this.props.errors
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(null, (error) => {
                this.setState({errors:this.renderErrors})
            })
    }

    renderErrors() {
        let error = [];

        function emailIsValid(email) {
            return /\S+@\S+\.\S+/.test(email); // must have @ - . email
        }

        //error descriptions to return to user
        if (this.props.errors.includes('Invalid email or Password')) {
            if (this.state.email === '') {
                error.push('Email is blank.');
                return error;
            } else if (!emailIsValid(this.state.email)) {
                error.push('Email is invalid.');
                return error;
            } else {
                error.push('Password is invalid.');
                return error;
            }
        }     
    }

        emailErrors() {
            if (this.state.errors[0] === 'Email is blank.'
                || this.state.errors[0] === 'Email is invalid.'
                || this.state.errors[0] === 'Use another Email.') {
                {return this.state.errors;}
        }
     }
        passwordErrors() {
            if (this.state.errors[0] === 'Invalid password') {
                return this.state.errors;
            }
        }
    

    render() {
        return (
            <div className="modal-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <Greeting />
                   
                <br />
      
                    <div onClick={this.props.closeModal} className="close-x" />
                   
                    <div className="login-form">
                        <br />
                        <label>Username:
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
