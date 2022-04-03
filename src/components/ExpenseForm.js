import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    //   currency: '',
    //   method: '',
    //   tag: '',
    //   description: '',
    //   exchangeRates: {},
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    const metodoPagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Pix'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <main>
        <form className="box-form-expenses" onSubmit={ currencies }>
          <label htmlFor="value-input" className="label-input">
            Valor
            <input
              type="number"
              className="value-input"
              data-testid="value-input"
              name="valor"
              value={ value }
              onChange={ this.onInputChange }
              id="value-input"
            />
          </label>
          <label htmlFor="currency-input" className="label-input">
            Moeda
            <select
              data-testid="currency-input"
              id="currency-input"
              className="select-input"
            >
              { currencies.map((currency, ind) => (
                <option key={ ind } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input" className="label-input">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method-input"
              className="select-input"
            >
              { metodoPagamento.map((currency, ind) => (
                <option key={ ind } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="tag-input" className="label-input">
            Método de pagamento
            <select
              data-testid="tag-input"
              id="tag-input"
              className="select-input"
            >
              { categoria.map((currency, ind) => (
                <option key={ ind } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="description-input" className="label-input">
            Valor
            <input
              type="text"
              className="description-input"
              data-testid="description-input"
              name="descricao"
              value={ description }
              onChange={ this.onInputChange }
              id="description-input"
            />
          </label>
          <input
            type="submit"
            // className="btn-input"
            // disabled={ isDisabled }
            value="Adcionar despesa"
          />
        </form>
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

ExpenseForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
