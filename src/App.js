import React, { Component } from "react";
import axios from "axios";
import { getAPIUrl, apiKey } from "./config";
import Spinner from "./Component/Spinner";
import Interface from "./Component/Interface";

class App extends Component {
  state = {};
  componentDidMount() {
    this.getAPIData();
  }

  getAPIData = async () => {
    const { data } = await axios.get(getAPIUrl(apiKey));
    this.setState({ currency: data });
  };

  getUserValue = async (e) => {
    const userValue = { ...this.state.userValue };
    userValue["value"] = e.target.value;

    this.setState({ userValue });
  };

  getUserCurrency = async (e) => {
    const userCurrency = { ...this.state.userCurrency };
    userCurrency["currency"] = e.target.value;

    this.setState({ userCurrency });
  };

  calculateConversion = async () => {
    const userCurrency = { ...this.state.userCurrency };
    const userValue = { ...this.state.userValue };
    const currency = { ...this.state.currency };
    const conversion = { ...this.state.conversion };
    console.log(this.state)
   

    for (let i = 0; i < Object.keys(currency.rates).length; i++) {
      if (Object.keys(currency.rates)[i] === userCurrency.currency){
        conversion["value"] = Object.values(currency.rates)[i] * userValue.value;
      }
    }

    console.log(conversion.value)
 
  };

  render() {
    const { currency, conversion } = this.state;
    return !currency ? (
      <Spinner />
    ) : (
      <Interface
        currency={currency}
        getUserValue={this.getUserValue}
        getUserCurrency={this.getUserCurrency}
        calculateConversion={this.calculateConversion}
        conversion={conversion}
      />
    );
  }
}

export default App;
