import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"

function App() {
const [quote, setQuote] = useState({})
const getQuote = () => {
  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => {
        setQuote(res.data)
      })
}
  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ron Quotes to live by</h1>
        <span>{quote[0]}</span>
        <button onClick={() => {getQuote()}} >New Quote</button>
      </header>
    </div>
  );
}

export default App;
