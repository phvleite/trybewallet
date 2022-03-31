import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      // senha: '',
      // loginButton: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <div>Login</div>
        <form>
          <label htmlFor="email-input">
            e-Mail
            <input
              type="email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
              id="email-input"
              placeholder="digite seu e-mail"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
