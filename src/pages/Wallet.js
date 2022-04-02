import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Form />
        </main>
      </>
    );
  }
}

export default Wallet;
