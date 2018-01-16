import axios from 'axios';
import { COINS } from '../constants/index';

export const fetchCoins = payload => {

  return dispatch => {
    const REQUEST_URL = `https://secure-citadel-52378.herokuapp.com/coins`;

    const REQUEST = {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'content-type': 'application/json',
      }),
    };

    return axios(REQUEST_URL, REQUEST).then(response => {
      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: COINS.fetchCoins,
          currencies: response.data.body
        });
      } else {
        console.log('get coins failed')
        dispatch({
          type: "coins/FETCH_COIN_FAIL",
        });
      }
    })
  }

}