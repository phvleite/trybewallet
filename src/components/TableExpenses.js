import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/TableExpenses.css';

class TableExpenses extends Component {
  renderTableHeader() {
    return (
      <tr className="table-header">
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    const dbExchangeRates = expenses
      .map((expense) => expense.exchangeRates[expense.currency]);
    const dbCurrency = dbExchangeRates.map((currency) => currency.name.split('/'));
    const decimals = 2;
    return (
      <section className="table-expenses">
        <table id="expenses">
          <tbody>
            { this.renderTableHeader() }
            { (expenses.length > 0) && expenses.map((expense, ind) => (
              <tr key={ expense.id } className="table-body">
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ parseFloat(expense.value).toFixed(2) }</td>
                <td>
                  { dbCurrency[ind][0] === 'Dólar Americano'
                    ? 'Dólar Comercial'
                    : dbCurrency[ind][0] }
                </td>
                <td>{ parseFloat(dbExchangeRates[ind].ask).toFixed(decimals) }</td>
                <td>
                  { parseFloat(expense.value * dbExchangeRates[ind].ask).toFixed(2) }
                </td>
                <td>Real</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>);
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableExpenses);
