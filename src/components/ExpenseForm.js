import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, saveExpenses } from '../actions';
import getCurrencies from '../services/currenciesApi';
import '../css/ExpenseForm.css';

const Alimentação = 'Alimentação';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentação,
      description: '',
      isDisabled: true,
    };
  }

  componentDidMount() {
    const { getCurrenciesOptions } = this.props;
    getCurrenciesOptions();
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validate());
  }

  validate = () => {
    const { value, description } = this.state;
    const MIN_LEN_DESCRIPTION = 5;
    const validateDescription = description.length >= MIN_LEN_DESCRIPTION;
    const validateValue = value > 0;

    const validateData = validateDescription && validateValue;

    this.setState({ isDisabled: !validateData });
  }

  getExpense = async (e) => {
    e.preventDefault();
    const { dispatchExpense, expenses } = this.props;
    const { value, description, currency, tag, method } = this.state;
    const exchangeRates = await getCurrencies();
    // const splitExchangeRates = exchangeRates[currency].name.split('/');
    // console.log(splitExchangeRates);
    let id;
    if (expenses.length === 0) {
      id = 0;
    } else {
      id = expenses[expenses.length - 1].id + 1;
    }
    const expense = {
      id,
      value,
      description,
      currency,
      tag,
      method,
      exchangeRates,
    };
    dispatchExpense(expense);
    this.setState({
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentação,
      description: '',
      isDisabled: true,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, isDisabled, currency, tag, method } = this.state;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Pix'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <section className="box-expenses">
        <form className="box-form-expenses" onSubmit={ this.getExpense }>
          <label htmlFor="value-input" className="label-input">
            Valor
            <input
              type="number"
              className="value-input"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ this.onInputChange }
              id="value-input"
            />
          </label>
          <label htmlFor="currency-input" className="label-input">
            Moeda
            <select
              name="currency"
              value={ currency }
              onChange={ this.onInputChange }
              data-testid="currency-input"
              id="currency-input"
              className="select-input"
            >
              { currencies.map((moeda, ind) => (
                <option key={ ind } value={ moeda }>{ moeda }</option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input" className="label-input">
            Método de pagamento
            <select
              name="method"
              value={ method }
              onChange={ this.onInputChange }
              data-testid="method-input"
              id="method-input"
              className="select-input"
            >
              { paymentMethod.map((pay, ind) => (
                <option key={ ind } value={ pay }>{ pay }</option>
              ))}
            </select>
          </label>
          <label htmlFor="tag-input" className="label-input">
            Categoria
            <select
              name="tag"
              value={ tag }
              onChange={ this.onInputChange }
              data-testid="tag-input"
              id="tag-input"
              className="select-input"
            >
              { category.map((cat, ind) => (
                <option key={ ind } value={ cat }>{ cat }</option>
              ))}
            </select>
          </label>
          <label htmlFor="description-input" className="label-input">
            Descrição
            <input
              type="text"
              className="value-input"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.onInputChange }
              id="description-input"
            />
          </label>
          <input
            type="submit"
            className="btn-add-expense"
            disabled={ isDisabled }
            value="Adicionar despesa"
          />
        </form>
      </section>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesOptions: () => dispatch(fetchCurrencies()),
  dispatchExpense: (state) => dispatch(saveExpenses(state)),
});

ExpenseForm.propTypes = {
  dispatchExpense: PropTypes.func.isRequired,
  getCurrenciesOptions: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
