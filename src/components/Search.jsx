import React, {useState} from 'react';
import StyledInputField from "./StyledInputField";

const _ = require('lodash');

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    props.onSearch(event.target.value);
  }

  return (
      <div>
        <div className="w-full flex flex-col">
          <StyledInputField
            label={"Search"}
            value={searchTerm}
            onChange={(event) => handleSearch(event)}
          />
        </div>
    </div>
  );
};

export default Search;