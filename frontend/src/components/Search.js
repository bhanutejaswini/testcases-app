import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="search"
        name="search-box"
        id="serach-box"
        className="search-box"
        placeholder="Search issue..."
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Search;
