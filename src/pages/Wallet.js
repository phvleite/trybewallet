import React, { Component } from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <ExpenseForm />
        </main>
      </>
    );
  }
}

export default Wallet;
