import React, {useEffect, useState} from 'react';
import StyledInputField from "./StyledInputField";
import './Search.css';

const _ = require('lodash');

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    props.onSearch(event.target.value);
  }

  useEffect(() => {
    if(props.searchResults) {
      console.log("XXXX", props.searchResults)
    }
  }, [props.searchResults])

  return (
      <div>
        <div className="w-full flex flex-col">
          <StyledInputField
            label={"Search"}
            value={searchTerm}
            onChange={(event) => handleSearch(event)}
          />

          <div className=".Results">
            {props.searchResults &&
            props.searchResults
              .map((item) => (
                <div className={"Results"}>
                  <div>Style Name: {item.styleName}</div>
                  <div>Style Colour Code: {item.colour.styleColourCode}</div>
                  <div>Style Colour Name: {item.colour.name}</div>
                  <div>Price: {item.colour.pricing.price}</div>
                </div>
              ))}
          </div>
        </div>
    </div>
  );
};

export default Search;