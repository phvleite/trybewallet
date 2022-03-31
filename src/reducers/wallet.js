// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_WALLET } from '../actions/actionTypes';

const wallet = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = wallet, action) => {
  switch (action.type) {
  case SAVE_WALLET:
    return { ...state, ...action.value };
  default:
    return state;
  }
};

export default reducerWallet;
