import React from 'react';

const Coin = props => {
  const { name, price_usd, id } = props;
  return (
    <div key={id}>
      {name} | USD: {price_usd}
    </div>
  );
};

export default Coin;

/**
 * coin props
 { 
    id: 'bitcoindark',
    name: 'BitcoinDark',
    symbol: 'BTCD',
    rank: '100',
    price_usd: '216.353',
    price_btc: '0.0163867',
    '24h_volume_usd': '349021.0',
    market_cap_usd: '278849200.0',
    available_supply: '1288862.0',
    total_supply: '1288862.0',
    max_supply: null,
    percent_change_1h: '0.55',
    percent_change_24h: '-13.25',
    percent_change_7d: '-41.92',
    last_updated: '1516086543' 
  }
 */
