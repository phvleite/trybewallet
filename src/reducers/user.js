// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_LOGIN_USER } from '../actions/actionTypes';

const user = {
  email: '',
  senha: '',
};

const reducerUserLogin = (state = user, action) => {
  switch (action.type) {
  case SAVE_LOGIN_USER:
    return { ...state, ...action.value };
  default:
    return state;
  }
};

export default reducerUserLogin;
