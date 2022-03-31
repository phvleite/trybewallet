import { combineReducers } from 'redux';
import reducerUserLogin from './user';
import reducerWallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  reducerUserLogin,
  reducerWallet,
});

export default rootReducer;
