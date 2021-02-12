import React from 'react';
import { Link } from 'react-router-dom';



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
        this.props.signup(this.state)
        .then(this.props.closeModal)
        // .then(this.props.history.push('/home'))
            
    }
    

    renderErrors() {
        let error = [];

        function emailIsValid(email) {
            return /\S+@\S+\.\S+/.test(email); 
        }

        
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
                    <img className="icon" href="../../../app/assets/images/favicon.png"/>
                    <button onClick={this.props.closeModal} className="x-button">X</button>
                    <h1>Welcome to Zenterest</h1>
                    {this.renderErrors()}
                    <br/>
                  

                    <div className="login-form">
                        <br />
                        <label>Username
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="modal-text"
                        />
                        </label>
                        <br/>
                        <label>Email
                        <input 
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="modal-text"
                        />
                        </label>
                        <br />
                        <label>Password
              <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="modal-text"
                            />
                        </label>
                        <br />
                       
                        <button className="blue-button" type="submit">Continue</button>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
