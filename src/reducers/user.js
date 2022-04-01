// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_LOGIN_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN_USER:
    return { ...state, ...action.value };
  default:
    return state;
  }
};

export default user;
