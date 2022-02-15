import React,{useState,useCallback} from "react";
import "./App.css";
import Search from "./Search";
import axios from "axios";
import Beer from "./Beer";
import _ from 'lodash';

function App() {
  const [beers, setBeers] = useState([]);
  const onSearchSubmit = _.memoize(async term => {
    const parsedQuery = term.toLowerCase().replaceAll(' ', '+');

    const res = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${parsedQuery}`);
    if(res.status !== 200) return [];
    setBeers(res.data);
  })
  const clearResults = useCallback(() => setBeers([]));
  return (
    <div className="App">
      <h1 className="title">Real Time Search</h1>
      <Search onSearchSubmit={(term) => onSearchSubmit(term)} clearResults={clearResults} />
      <div className="main-content">
     { beers.map((b, i) => {
      return <Beer beer={b} key={i} />
    })}
      </div>
    </div>
  );
}

export default App;
