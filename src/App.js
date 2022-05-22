import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ApiClass from "./ApiClass";
// import ApiFn from "./ApiFn";
// import Users from "./user";
import CryptoDash from "./Crypto/CryptoDash";
import CurrencyConverter from "./Crypto/CurrencyConverter";
import './App.css'





function App() {
  return (
    <div className="App"> 
      <CryptoDash />
      <CurrencyConverter />
    </div>
  )
}


export default App