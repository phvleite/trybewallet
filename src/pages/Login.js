import React from 'react';
import CryptoJS from 'crypto-js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      isDisabled: true,
      redirect: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validate());
  }

  validate = () => {
    const { senha } = this.state;
    const MIN_LEN_PASSWORD = 6;
    const email = document.getElementById('email-input');
    const validateEmail = email.validity.valid;
    const validatePassword = senha.length >= MIN_LEN_PASSWORD;

    const validateLogin = validateEmail && validatePassword;

    this.setState({ isDisabled: !validateLogin });
  }

  onGetLoginClick = (event) => {
    event.preventDefault();
    const { senha, email } = this.state;
    const { getUserLogin } = this.props;
    const senhaEncrypted = CryptoJS.AES.encrypt(senha, 'EncryptionKey');
    this.setState({ redirect: true });
    getUserLogin({ senha: senhaEncrypted, email });
  }

  render() {
    const { email, senha, isDisabled, redirect } = this.state;
    return (
      <div>
        <div>Login</div>
        <form onSubmit={ this.onGetLoginClick }>
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
          <label htmlFor="password-input">
            Senha
            <input
              type="password"
              data-testid="password-input"
              name="senha"
              value={ senha }
              onChange={ this.onInputChange }
              id="password-input"
              placeholder="digite sua senha"
            />
          </label>
          <input
            type="submit"
            disabled={ isDisabled }
            value="Entrar"
          />
        </form>
        { redirect && <Redirect to="/carteira" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserLogin: (data) => dispatch(loginUserAction(data)),
});

Login.propTypes = {
  getUserLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
