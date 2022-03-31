// Coloque aqui suas actions
import { SAVE_LOGIN_USER, SAVE_WALLET } from './actionTypes';

const loginUserAction = (value) => ({
  type: SAVE_LOGIN_USER,
  value,
});

const walletAction = (value) => ({
  type: SAVE_WALLET,
  value,
});

export { loginUserAction, walletAction };
