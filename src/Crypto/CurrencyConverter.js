import React from "react";
import Exchange from "./Exchange";
import { useState } from "react";
import axios from "axios";
import "../index.css";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [primaryCurr, setPrimaryCurr] = useState("BTC");
  const [secondaryCurr, setSecondaryCurr] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)

  const Convert = () => {

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency: primaryCurr, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurr},
        headers: {
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
          'X-RapidAPI-Key': '237425401amsha7ec5fa9e099898p150074jsn4d95a7fcf4b2'
        }
      };
      
      axios.request(options).then((response)=> {
          
          setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
          setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']* amount)
      }).catch((error) =>{
          console.error(error);
      });
  }

  return (
    <div className="currency">
      <h2>CurrencyConverter</h2>

      <table>
        <tbody>
          <tr>
            <td className="text-light">Primary Currency: </td>
            <td>
              <input type="number" value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </td>
            <td>
              <select
                value={primaryCurr}
                name="currency-option"
                className="option"
                onChange={(e) => setPrimaryCurr(e.target.value)}
              >
                {currencies.map((currency, i) => (
                  <option key={i}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className="text-light">Secondary Currency: </td>
            <td>
              <input value={result} disabled={true}/>
            </td>
            <td>
              <select
                value={secondaryCurr}
                name="currency-option"
                className="option"
                onChange={(e) => setSecondaryCurr(e.target.value)}
              >
                {currencies.map((currency, i) => (
                  <option key={i}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={Convert}>Convert</button>
      <Exchange exchangeRate={exchangeRate}/>
    </div>
  );
};

export default CurrencyConverter;
