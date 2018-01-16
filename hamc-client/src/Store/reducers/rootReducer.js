import { combineReducers } from 'redux';
import coinReducer from '../reducers/coinmarketcap';

const rootReducer = combineReducers({
  coins: coinReducer
});

export default rootReducer;