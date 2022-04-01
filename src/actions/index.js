// Coloque aqui suas actions
import {
  SAVE_LOGIN_USER,
  SAVE_WALLET,
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
} from './actionTypes';
import getCurrencies from '../services/currenciesApi';

const loginUserAction = (value) => ({
  type: SAVE_LOGIN_USER,
  value,
});

const walletAction = (value) => ({
  type: SAVE_WALLET,
  value,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const receiveCurrenciesSuccess = (currencies) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  currencies,
});

const receiveCurrenciesError = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
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

export {
  loginUserAction,
  walletAction,
  receiveCurrenciesError,
  receiveCurrenciesSuccess,
  requestCurrencies,
};
