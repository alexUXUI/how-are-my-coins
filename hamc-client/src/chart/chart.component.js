import React from 'react';
import _ from 'lodash'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { inspect } from 'util';

export default class Chart extends React.Component {
  render() {
    const { data } = this.props;
    const chartData = data.map(currency => {
      return {
        rank: parseInt(currency.rank),
        name: currency.name,
        price_usd: parseFloat(currency.price_usd)
      }
    });
    return (
      <BarChart width={1230} height={550} data={chartData}>
        <XAxis dataKey='name'/>
        <YAxis dataKey='price_usd' fill='#82ca9d'/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey='price_usd' fill='cornflowerblue' />
      </BarChart>
    );
  }
};