//require('dotenv').config();
import React, { Component } from 'react';
import CurrencyConverter from './currencyconverter/CurrencyConverter';
import './App.css';


class App extends Component {
  
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h2>Currency Converter</h2>
          </header>
          <CurrencyConverter/>
         
        </div>
    );
  }
}

export default App;
