import React, {useState} from "react";
import axios from "axios";
import Search from "../components/Search";

const SearchContainer = (props) => {
  const [response, setResponse] = useState(null);

  // const { player, loadingPlayer } = useSearch(searchTerm, [searchTerm]);

  return (
    <Search
      onSearch={async (searchTerm) => {
        const headers = {
          "Content-Type": "application/json"
        };

        try {
          await axios
            .get(
              `https://sandbox368.bravissimo.site/api/search/${searchTerm}`,
              { headers }
            )
            .then((resp) => setResponse(resp.data.items));
        } catch (err) {
          console.log("ERROR FETCHING ITEM: ", err.message);
        } finally {
          //SOMETHING
        }
      }}
      searchResults={response}
    />
  );
};

export default SearchContainer;
