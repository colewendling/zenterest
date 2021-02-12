import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: this.props.errors
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state)
        .then(this.props.closeModal)
        // .then(this.props.history.push('/home'))
    }

    demoLogin(event) {
        event.preventDefault();
        this.props.login({ email: 'cole@zenterest.com', password: 'password' })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.props.closeModal} className="x-button">X</button>
                <form onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} />


                    <img className="favicon-medium" src={window.logoURL} alt="favicon"/>

                    <h1>Welcome to Zenterest</h1>
                    <h2 className="modal-text-1">Login to an existing account</h2> 

                    <div className="login-form">
                        <br />
                        <label>Username
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <br />
                        <button className="red-button" type="submit">Login</button>

                        
                        {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;
