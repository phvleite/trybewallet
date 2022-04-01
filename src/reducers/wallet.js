// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case REQUEST_CURRENCIES_SUCCESS:
    return { ...state,
      currencies: [...action.currencies] };
  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: action.error };
  default:
    return state;
  }
};

export default wallet;
