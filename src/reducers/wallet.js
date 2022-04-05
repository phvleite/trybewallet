// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  RECEIVE_CURRENCIES_SUCCESS,
  RECEIVE_CURRENCIES_ERROR,
  SAVE_EXPENSES,
  SAVE_TOTAL_EXPENSES,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case RECEIVE_CURRENCIES_SUCCESS:
    return { ...state,
      currencies: [...action.currencies] };
  case RECEIVE_CURRENCIES_ERROR:
    return { ...state, error: action.error };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses] };
  case SAVE_TOTAL_EXPENSES:
    return {
      ...state,
      totalExpenses: action.totalExpenses };
  default:
    return state;
  }
};

export default wallet;
