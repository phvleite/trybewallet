import React, { Component } from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import TableExpenses from '../components/TableExpenses';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <ExpenseForm />
          <TableExpenses />
        </main>
      </>
    );
  }
}

export default Wallet;
