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
      <div className="modal-container">
        <img src={window.logoURL}/>
        <h1>Welcome to Zenterest</h1>
        <h2>{form === 'signup' ? "Find new ideas to try" : ""}</h2>

        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="modal-form">
            <input 
              className="modal-input"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username" required
            />
            {form === 'signup' ? 
            <input 
              className="modal-input"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="modal-input"
              placeholder="Email" required
            /> 
            : ''}
            <input 
              className="modal-input"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="modal-input"
              placeholder="Password" required
            />
   
            <button className="modal-button" type="submit">{form === 'signup' ? "Continue" : "Log in"}</button>
            
          </form>
        </div>
      </div>
    );
  }
}


export default SessionForm;

