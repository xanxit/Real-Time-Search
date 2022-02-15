import React,{useState,useEffect} from "react";
import "./App.css";

const Search = ({onSearchSubmit,clearResults}) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  
  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
}, [debouncedTerm])

  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    }
    else{
        clearResults();
    }
  }, [term]);
  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
    </div>
  );
};
export default Search;
