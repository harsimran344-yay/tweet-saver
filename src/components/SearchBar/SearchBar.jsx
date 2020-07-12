import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
    const [searchText, setSearchText] = useState('');
  return (
    <form className="search-bar" onSubmit={e => handleSubmit(e, searchText)}>
        <input type="text" placeholder="Search..." name="searchTxt" value={searchText} onChange={e => setSearchText(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;