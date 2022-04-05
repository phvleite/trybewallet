import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/TableExpenses.css';

class TableExpenses extends Component {
  renderTableHeader() {
    // Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir
    return (
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
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
    console.log(expenses);
    return (
      <section className="table-expenses">
        <table id="expenses">
          <tbody>
            { this.renderTableHeader() }
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
