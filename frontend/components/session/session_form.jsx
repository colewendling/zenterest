import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: this.props.errors
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

  update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

  handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.switchForm(user)
        .then(this.props.closeModal)
        .then(() => this.props.history.push('/home'));
    }

  // demoLogin(event) {
  //       event.preventDefault();
  //       this.props.login({ email: 'cole@zenterest.com', password: 'password' })
  //   }

  // renderErrors() {
  //       return (
  //           <ul>
  //               {this.props.errors.map((error, i) => (
  //                   <li key={`error-${i}`}>
  //                       {error}
  //                   </li>
  //               ))}
  //           </ul>
  //       );
  //   }

  render() {
    const { form } = this.props;
    return (
      <div className="login-container">
        <div className="modal-icon">
          <img src={window.logoURL} />
        </div>
        <div className="modal-welcome">
           <h1>Welcome to Zenterest</h1>
           <h2>{form === 'signup' ? "Find new ideas to try" : ""}</h2>
        </div>
        <form>
          <div className="login-form">
          <label>Username
          <input 
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="login-input"
          />
          </label>
          <label>Email
          <input 
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          />
          </label>
          <label>Password
          <input 
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className="login-input"
          />
          </label>
          <button className="red-button" type="submit">Log in</button>
          </div>
          </form>
        </div>
     
    );
  }
}


export default SessionForm;

