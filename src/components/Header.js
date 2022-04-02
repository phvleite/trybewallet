import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Headers extends Component {
  render() {
    const { restoreData } = this.props;
    const { email } = restoreData.user;
    return (
      <div>
        <div>
          TrybeWallet
        </div>
        <div>
          <div data-testid="email-field">
            { `e-Mail: ${email}` }
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </div>
      </div>);
  }
}

const mapStateToProps = (store) => ({
  restoreData: store,
});

Headers.propTypes = {
  restoreData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Headers);
