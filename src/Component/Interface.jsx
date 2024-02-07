import React, { Component } from "react";
import Select from "./Select";

class Interface extends Component {
  state = {};

  render() {
    const { currency, getUserValue, getUserCurrency, conversion, calculateConversion} = this.props;
    return (
      <>
        <div className="container">
          <div>
            <h1>Currency Convertor</h1>
            <label htmlFor="inputCurrency">US Dollar</label>
            <input type="number" name="inputCurrency" onInput={getUserValue} />
          </div>
          <Select currency={currency} getUserCurrency={getUserCurrency} />
          <button onClick={()=>calculateConversion()}>Calculate</button>
        </div>
      </>
    );
  }
}

export default Interface;
