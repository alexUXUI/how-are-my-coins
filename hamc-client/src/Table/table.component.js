import React from 'react';
import _ from 'lodash'
import { Table } from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Chart from '../chart/chart.component'

export default class TableComponent extends React.Component {
  state = {
    column: null,
    data: this.props.data,
    direction: null,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    })
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });
      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state;
    return (
      <div>
        <Chart data={data} />
        <Table sortable celled fixed>
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'price_usd' ? direction : null} onClick={this.handleSort('price_usd')}>
              price_usd
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'rank' ? direction : null} onClick={this.handleSort('rank')}>
              rank
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'market_cap_usd' ? direction : null} onClick={this.handleSort('market_cap_usd')}>
              market_cap_usd
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'percent_change_1h' ? direction : null} onClick={this.handleSort('percent_change_1h')}>
              percent_change_1h
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'percent_change_24h' ? direction : null} onClick={this.handleSort('percent_change_24h')}>
              percent_change_24h
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'percent_change_7d' ? direction : null} onClick={this.handleSort('percent_change_7d')}>
              percent_change_7d
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ price_usd, name, rank, market_cap_usd, percent_change_1h, percent_change_24h, percent_change_7d  }) => (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{price_usd}</Table.Cell>
              <Table.Cell>{rank}</Table.Cell>
              <Table.Cell>{market_cap_usd}</Table.Cell>
              <Table.Cell>{percent_change_1h}</Table.Cell>
              <Table.Cell>{percent_change_24h}</Table.Cell>
              <Table.Cell>{percent_change_7d}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    );
  }
}
