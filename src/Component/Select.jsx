import React, { Component } from "react";

class Select extends Component {
  render() {
    const { currency, getUserCurrency} = this.props;
    return (
      <>
        <select onChange={getUserCurrency}>
          {Object.keys(currency.rates).map((rate) => {
            return <option value={rate} key={rate}>{rate}</option>;
          })}
        </select>
      </>
    );
  }
}

export default Select;
