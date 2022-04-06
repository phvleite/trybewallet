// Coloque aqui suas actions
import {
  SAVE_LOGIN_USER,
  SAVE_EXPENSES,
  DELETE_EXPENSES,
  REQUEST_CURRENCIES,
  RECEIVE_CURRENCIES_SUCCESS,
  RECEIVE_CURRENCIES_ERROR,
} from './actionTypes';
import getCurrencies from '../services/currenciesApi';

export const loginUserAction = (value) => ({
  type: SAVE_LOGIN_USER,
  value,
});

export const saveExpenses = (expenses) => ({
  type: SAVE_EXPENSES,
  expenses,
});

export const deleteExpenses = (expenses) => ({
  type: DELETE_EXPENSES,
  expenses,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrenciesSuccess = (currencies) => ({
  type: RECEIVE_CURRENCIES_SUCCESS,
  currencies,
});

export const receiveCurrenciesError = (error) => ({
  type: RECEIVE_CURRENCIES_ERROR,
  error,
});

export function fetchCurrencies() {
  return async (dispacht) => {
    dispacht(requestCurrencies());
    try {
      const dbCurrencies = await getCurrencies();
      const currencies = Object.keys(dbCurrencies)
        .map((currencie) => (currencie))
        .filter((currencie) => currencie !== 'USDT');
      dispacht(receiveCurrenciesSuccess(currencies));
    } catch (error) {
      dispacht(receiveCurrenciesError(error));
    }
  };
}
