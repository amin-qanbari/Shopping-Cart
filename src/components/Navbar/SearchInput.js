import React, { useContext } from "react";

//context
import { setSearchContext } from "../../context/SearchContextProvider";

const SearchInput = () => {
  const setSearchTerm = useContext(setSearchContext);
  return (
    <div>
      <input
        type="text"
        placeholder="جستجو..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
