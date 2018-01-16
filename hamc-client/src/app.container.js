import React from 'react';
import { connect } from 'react-redux';
// actions
import {fetchCoins} from './Store/actions/coinmarketcap.action';
// components 
import Coin from './coins/coin.component';

import { inspect } from 'util';
import TableComponent from './Table/table.component';

class AppContainer extends React.Component {

  componentWillMount() {
    this.props.fetchCoins();
  }

  render() {
    return(
      <div>
        { 
          this.props.coins ?
            <TableComponent data={this.props.coins} /> :
            null
        }
      </div>
    ); // end return
  } // end render 
}

const mapStateToProps = state => {
  return {
    state,
    coins: state.coins.currencies,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCoins: () => dispatch(fetchCoins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

