import React, { Component } from "react";
//import swap from "./swap.png"; 
// import axios from "axios";
import CURRENCY from '../consts/CurrencyCodes';

 const appKey =process.env.APP_KEY

class CurrencyConverter extends Component {
    
    state = {
        currencies: Object.keys(CURRENCY),
        base: "USD",
        amount: "",
        convertTo: "EUR",
        result: "",
       
    };
    
    handleSelection = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                result: null
            },
            this.convertCurrency
            );
        };
        
    handleInput = e => {
        this.setState(
            {
              amount: e.target.value,
              result: null,
            },
             this.convertCurrency
            );
        };
            
    //converting currency
    convertCurrency = () => {
        const amount = this.state.amount;
        const convertTo = this.state.convertTo;
        const base = this.state.base;
     console.log(appKey)
                
    if (amount === isNaN) {
      return;
    } else {
       
        var query = base + "_" + convertTo;
       fetch(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${appKey}`)
        .then(res => res.json())
        .then(data => {
            
          const result = (data[query]* amount).toFixed(3);
          this.setState({
            result,
        });
        });
    }
  };

   handleToggle = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.convertCurrency
    );
  };

  render() {
    const { currencies, base, amount, convertTo, result } = this.state;
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount} {base} equals 
              </h5>
              <h2>
                {result}{" "}
                {convertTo}
              </h2>
              <p>As of {Date()}</p>
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelection}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                        {currency}
                          
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      disabled={true}
                      value={ result }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelection}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency} 
                        </option>
                      ))}
                    </select>
                  </form>
                </div>

                { <div className="col-lg-2 align-self-center">
                  <h5 onClick={this.handleToggle} className="swap">
                  <button>Toggle</button>
                  </h5>
                </div> }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;


