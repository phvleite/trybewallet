import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Headers extends Component {
  render() {
    const { restoreData, expenses } = this.props;
    const { email } = restoreData.user;
    let totalExpenses = 0;
    if (expenses.length > 0) {
      expenses.forEach((element) => {
        const { ask } = element.exchangeRates[element.currency];
        totalExpenses += parseFloat(element.value) * ask;
      });
    }
    return (
      <header className="box-header">
        <div className="box-title-header">
          <h1>
            Trybe
            <span id="wallet">Wallet</span>
          </h1>
        </div>
        <div className="box-info">
          <div data-testid="email-field" className="box-email">
            { `e-Mail: ${email}` }
          </div>
          <div data-testid="total-field" className="box-total">
            { totalExpenses.toFixed(2) }
          </div>
          <div data-testid="header-currency-field" className="box-currency">
            BRL
          </div>
        </div>
      </header>);
  }
}

const mapStateToProps = (store) => ({
  restoreData: store,
  totalExpenses: store.wallet.totalExpenses,
  expenses: store.wallet.expenses,
});

Headers.propTypes = {
  restoreData: PropTypes.objectOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Headers);
