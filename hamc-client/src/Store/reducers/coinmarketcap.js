import {inspect} from 'util';
import { COINS } from '../constants/index';

const reducer = (state = {
  currencies: []
}, action) => {

  switch (action.type) {
    
    case COINS.fetchCoins: {
      return {
        currencies: JSON.parse(action.currencies)
      }
    }
  
    default: {
      return state;
    }
      
  }

}

export default reducer;

