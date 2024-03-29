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

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentDidMount() {
    document.getElementsByClassName("arrow")[0].style.opacity= "0%";
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal)
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  demoLogin(e) {
    e.preventDefault()
    this.props.demoLogin({email: 'zen@zenterest.net', username: 'zen', password: '123456'})
    .then(this.props.closeModal)
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
    const { form } = this.props;
    return (
      <div className="modal-container">
        <svg className="demo-arrow">
          <path className="a1" d="M0 0 L30 22 L60 0"></path>
          <path className="a2" d="M0 20 L30 42 L60 20"></path>
          <path className="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
        <img src={window.logoURL}/>
        <h1>Welcome to Zenterest</h1>
        <h2>{form === 'signup' ? "Find new ideas to try" : ""}</h2>

        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="modal-form">
            {form === 'signup' ? 
            <input 
              className="modal-input"
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="modal-input"
              placeholder="Email" required
              /> 
              : ''}
            <input 
              className="modal-input"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username" required
            />
            <input 
              className="modal-input"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="modal-input"
              placeholder="Password" required
            />
            <div className="error-text">
              {this.renderErrors()}
            </div>

            <button 
              className="modal-button" type="submit">{form === 'signup' ? "Continue" : "Log in"}</button>
            {form === 'login' ? <h5>OR</h5> : ''}
            {form === 'login' ? <button className="demo-button" type="submit" onClick={this.demoLogin}>Demo Log in</button> : ''}
            <hr />
            <h6>By continuing, you agree to Zenterest’s <a className='tos' href="">Terms of Service</a>, <a className='tos' href="#">Privacy policy</a></h6>
            <div className="modal-form">{this.props.switchForm}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;

